import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

// Componente helper para fórmulas en bloque (MathJax las renderiza)
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const ResistenciaMateriales: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="page-wrapper">
      <h1>Resistencia de los materiales conductores</h1>

      <p>
        Resumen de las fórmulas más usadas para calcular la resistencia
        eléctrica en función del material, la longitud y la sección del
        conductor, con un ejemplo práctico en cable de cobre.
      </p>

      {/* 1. Definición general */}
      <h2>1. Definición general de resistencia</h2>
      <section className="formula-block">
        <div className="tag">Ley geométrica</div>
        <Formula tex={String.raw`$$ R = \rho \,\dfrac{L}{A} $$`} />
        <ul>
          <li>R: resistencia eléctrica (Ω)</li>
          <li>ρ: resistividad del material (Ω·m o Ω·mm²/m)</li>
          <li>L: longitud del conductor (m)</li>
          <li>A: sección transversal (m² o mm²)</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Forma práctica para conductores</div>
        <p>
          En instalaciones se usa mucho la fórmula con sección en mm² y
          resistividad en Ω·mm²/m:
        </p>
        <Formula
          tex={String.raw`$$ R = \rho_{\text{mm}^2} \,\dfrac{L\;[\text{m}]}{S\;[\text{mm}^2]} $$`}
        />
        <p>
          Para cobre a 20&nbsp;°C se suele tomar{" "}
          {String.raw`$\rho_{\text{Cu}} \approx 0{,}0178\;\Omega\cdot\text{mm}^2/\text{m}$`}
          .
        </p>
      </section>

      {/* 2. Dependencia con la temperatura */}
      <h2>2. Variación de la resistencia con la temperatura</h2>
      <section className="formula-block">
        <div className="tag">Coeficiente de temperatura</div>
        <Formula
          tex={String.raw`$$ R_T = R_{T_0}\,\bigl[\,1 + \alpha\,(T - T_0)\bigr] $$`}
        />
        <ul>
          <li>Rₜ: resistencia a la temperatura T (°C)</li>
          <li>Rₜ₀: resistencia a la temperatura de referencia T₀ (≈ 20 °C)</li>
          <li>α: coeficiente de temperatura del material (1/°C)</li>
        </ul>
        <p>
          Para cobre, se suele usar un coeficiente{" "}
          {String.raw`$\alpha_{\text{Cu}} \approx 0{,}0039\;1/^\circ\text{C}$`}
          .
        </p>
      </section>

      {/* 3. Ejemplo numérico simple */}
      <h2>3. Ejemplo simple en cable de cobre</h2>
      <section className="formula-block">
        <div className="tag">Ejemplo R de un tramo</div>
        <p>
          Cable de cobre de sección S = 2,5&nbsp;mm², longitud L = 30&nbsp;m,
          a 20&nbsp;°C, usando{" "}
          {String.raw`$\rho_{\text{Cu}} = 0{,}0178\;\Omega\cdot\text{mm}^2/\text{m}$`}:
        </p>
        <Formula
          tex={String.raw`$$
R = 0{,}0178\;\dfrac{\Omega\cdot\text{mm}^2}{\text{m}} \cdot
    \dfrac{30\;\text{m}}{2{,}5\;\text{mm}^2}
  \approx 0{,}2136\;\Omega
$$`}
        />
        <p>
          Si se considera ida y vuelta (fase + neutro), la resistencia total de
          la línea es aproximadamente 2·R.
        </p>
      </section>

      {/* 4. Calculadora práctica */}
      <h2>4. Calculadora de resistencia en cable de cobre</h2>
      <ResistenciaCobreCalculator />
    </main>
  );
};

export default ResistenciaMateriales;

/* ==========================
   CALCULADORA
   ========================== */

const ResistenciaCobreCalculator: React.FC = () => {
  // Inputs: sección en mm², longitud en m, temperatura °C
  const [seccion, setSeccion] = useState<string>("2.5");
  const [longitud, setLongitud] = useState<string>("30");
  const [temperatura, setTemperatura] = useState<string>("20");

  // Constantes de cálculo (puedes ajustarlas si querés)
  const RHO_CU_MM2 = 0.0178; // Ω·mm²/m a 20 °C
  const ALFA_CU = 0.0039; // 1/°C

  const S = parseFloat(seccion) || 0;
  const L = parseFloat(longitud) || 0;
  const T = parseFloat(temperatura);

  // Resistencia a 20 °C (un conductor)
  const R20 = S > 0 && L > 0 ? (RHO_CU_MM2 * L) / S : 0;

  // Resistencia a 20 °C ida + vuelta
  const R20_ida_vuelta = R20 * 2;

  // Resistencia a temperatura T (un conductor)
  const RT =
    !isNaN(T) && R20 > 0 ? R20 * (1 + ALFA_CU * (T - 20)) : 0;

  // Resistencia a temperatura T ida + vuelta
  const RT_ida_vuelta = RT * 2;

  return (
    <section className="formula-block">
      <p>
        Calcula la resistencia aproximada de un cable de cobre en función
        de la sección, la longitud y la temperatura. La fórmula base es
        R = ρ · L / S, tomando ρ para cobre a 20&nbsp;°C.
      </p>

      <div className="calc-grid">
        <label>
          Sección S (mm²)
          <input
            type="number"
            min={0}
            step={0.1}
            value={seccion}
            onChange={(e) => setSeccion(e.target.value)}
          />
        </label>

        <label>
          Longitud L (m)
          <input
            type="number"
            min={0}
            step={1}
            value={longitud}
            onChange={(e) => setLongitud(e.target.value)}
          />
        </label>

        <label>
          Temperatura T (°C)
          <input
            type="number"
            step={1}
            value={temperatura}
            onChange={(e) => setTemperatura(e.target.value)}
          />
        </label>
      </div>

      <div className="calc-results">
        <h3>Resultados</h3>
        <ul>
          <li>
            <span>ρ₍Cu₎ (a 20&nbsp;°C)</span>
            <span>{RHO_CU_MM2.toFixed(4)} Ω·mm²/m</span>
          </li>
          <li>
            <span>R a 20&nbsp;°C (un conductor)</span>
            <span>{R20 ? R20.toFixed(4) + " Ω" : "—"}</span>
          </li>
          <li>
            <span>R a 20&nbsp;°C (ida + vuelta)</span>
            <span>{R20_ida_vuelta ? R20_ida_vuelta.toFixed(4) + " Ω" : "—"}</span>
          </li>
          <li>
            <span>R a T (un conductor)</span>
            <span>{RT ? RT.toFixed(4) + " Ω" : "—"}</span>
          </li>
          <li>
            <span>R a T (ida + vuelta)</span>
            <span>{RT_ida_vuelta ? RT_ida_vuelta.toFixed(4) + " Ω" : "—"}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
