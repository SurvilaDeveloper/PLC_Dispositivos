import React, { useEffect, useMemo, useState } from "react";
import {
  COPPER_RESISTIVITY_20C_OHM_MM2_PER_M,
  COPPER_TEMPERATURE_COEFFICIENT_20C_PER_C,
  calculateCopperResistance,
} from "../electricalCalculations";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

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
        Resumen de las relaciones físicas entre resistividad, longitud,
        sección y temperatura, con una calculadora didáctica para conductor de
        cobre.
      </p>

      <h2>1. Resistencia de un conductor</h2>
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
        <div className="tag">Forma práctica con sección en mm²</div>
        <Formula
          tex={String.raw`$$ R = \rho_{\text{mm}^2} \,\dfrac{L\;[\text{m}]}{S\;[\text{mm}^2]} $$`}
        />
        <p>
          Para los cálculos de esta página se usa como referencia para cobre
          recocido a 20&nbsp;°C:{" "}
          <strong>
            ρ<sub>20</sub> = {COPPER_RESISTIVITY_20C_OHM_MM2_PER_M.toFixed(6)}
            &nbsp;Ω·mm²/m
          </strong>
          . El valor real puede variar con el material, estado metalúrgico y
          temperatura del conductor.
        </p>
      </section>

      <h2>2. Variación aproximada con la temperatura</h2>
      <section className="formula-block">
        <div className="tag">Modelo lineal alrededor de 20 °C</div>
        <Formula
          tex={String.raw`$$ R_T = R_{20}\,\bigl[1 + \alpha_{20}(T - 20)\bigr] $$`}
        />
        <ul>
          <li>Rₜ: resistencia aproximada a la temperatura T</li>
          <li>R₂₀: resistencia a 20 °C</li>
          <li>
            α₂₀ = {COPPER_TEMPERATURE_COEFFICIENT_20C_PER_C.toFixed(5)} 1/°C
            en este modelo de referencia
          </li>
        </ul>
        <p className="calc-note">
          Es una aproximación lineal útil para cálculos rápidos; no sustituye
          datos del fabricante ni modelos de temperatura más detallados.
        </p>
      </section>

      <h2>3. Ejemplo simple</h2>
      <section className="formula-block">
        <div className="tag">30 m de cobre de 2,5 mm² a 20 °C</div>
        <Formula
          tex={String.raw`$$
R = 0{,}017241\;\dfrac{\Omega\cdot\text{mm}^2}{\text{m}} \cdot
    \dfrac{30\;\text{m}}{2{,}5\;\text{mm}^2}
  \approx 0{,}2069\;\Omega
$$`}
        />
        <p>
          Ese valor corresponde a <strong>un solo conductor de 30 m</strong>.
          En un circuito monofásico de dos conductores, si fase y retorno tienen
          la misma longitud y sección, la resistencia resistiva total del lazo
          es aproximadamente el doble.
        </p>
      </section>

      <h2>4. Calculadora de resistencia de cobre</h2>
      <ResistenciaCobreCalculator />
    </main>
  );
};

export default ResistenciaMateriales;

const ResistenciaCobreCalculator: React.FC = () => {
  const [seccion, setSeccion] = useState("2.5");
  const [longitud, setLongitud] = useState("30");
  const [temperatura, setTemperatura] = useState("20");

  const resultado = useMemo(
    () =>
      calculateCopperResistance(
        Number.parseFloat(seccion),
        Number.parseFloat(longitud),
        Number.parseFloat(temperatura),
      ),
    [seccion, longitud, temperatura],
  );

  return (
    <section className="formula-block">
      <p>
        La longitud ingresada es la longitud física de <strong>un conductor</strong>.
        El resultado “ida + vuelta” sólo representa un lazo de dos conductores
        iguales; no debe aplicarse automáticamente a un sistema trifásico.
      </p>

      <div className="calc-grid">
        <label htmlFor="copper-resistance-section">
          Sección S (mm²)
          <input
            id="copper-resistance-section"
            type="number"
            min={0.01}
            step={0.1}
            inputMode="decimal"
            value={seccion}
            onChange={(event) => setSeccion(event.target.value)}
          />
        </label>

        <label htmlFor="copper-resistance-length">
          Longitud de un conductor L (m)
          <input
            id="copper-resistance-length"
            type="number"
            min={0.01}
            step={1}
            inputMode="decimal"
            value={longitud}
            onChange={(event) => setLongitud(event.target.value)}
          />
        </label>

        <label htmlFor="copper-resistance-temperature">
          Temperatura del conductor T (°C)
          <input
            id="copper-resistance-temperature"
            type="number"
            step={1}
            inputMode="decimal"
            value={temperatura}
            onChange={(event) => setTemperatura(event.target.value)}
          />
        </label>
      </div>

      <div className="calc-results" aria-live="polite" aria-atomic="true">
        <h3>Resultados</h3>

        {!resultado.ok ? (
          <p role="alert" style={{ color: "#f97373" }}>
            {resultado.error}
          </p>
        ) : (
          <ul>
            <li>
              <span>ρ del cobre a 20 °C</span>
              <span>
                {COPPER_RESISTIVITY_20C_OHM_MM2_PER_M.toFixed(6)} Ω·mm²/m
              </span>
            </li>
            <li>
              <span>ρ aproximada a T</span>
              <span>
                {resultado.value.resistivityAtTemperatureOhmMm2PerM.toFixed(6)}
                {" "}Ω·mm²/m
              </span>
            </li>
            <li>
              <span>R a 20 °C (un conductor)</span>
              <span>{resultado.value.oneWayResistance20COhm.toFixed(4)} Ω</span>
            </li>
            <li>
              <span>R a T (un conductor)</span>
              <span>
                {resultado.value.oneWayResistanceAtTemperatureOhm.toFixed(4)} Ω
              </span>
            </li>
            <li>
              <span>R a T (lazo de dos conductores iguales)</span>
              <span>
                {resultado.value.twoWireLoopResistanceAtTemperatureOhm.toFixed(4)} Ω
              </span>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};
