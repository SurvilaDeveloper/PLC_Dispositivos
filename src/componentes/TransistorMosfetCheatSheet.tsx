// src/componentes/TransistorMosfetCheatSheet.tsx
import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

// Helper para fórmulas en bloque (MathJax se encarga del render)
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

/* ==============================
   Calculadora de pequeña señal MOSFET
   ============================== */

const MosfetCalculator: React.FC = () => {
  // Corriente de drenador en reposo (mA)
  const [Id_mA, setId_mA] = useState<string>("2");
  // Tensión de sobreconducción Vov = VGS - Vth (V)
  const [VovStr, setVovStr] = useState<string>("0.2");
  // Parásito de canal corto λ (1/V)
  const [lambdaStr, setLambdaStr] = useState<string>("0.02");
  // Resistencia de drenador (Ω)
  const [RdStr, setRdStr] = useState<string>("4700");
  // Resistencia de carga (Ω)
  const [RlStr, setRlStr] = useState<string>("10000");

  const Id = parseFloat(Id_mA);
  const Vov = parseFloat(VovStr);
  const lambda = parseFloat(lambdaStr);
  const Rd = parseFloat(RdStr);
  const Rl = parseFloat(RlStr);

  const Id_A = isFinite(Id) && Id > 0 ? Id / 1000 : 0; // mA → A

  // gm ≈ 2·Id / Vov en saturación
  const gm = Id_A > 0 && Vov > 0 ? (2 * Id_A) / Vov : 0; // S

  // ro ≈ 1 / (λ · Id)
  const ro = Id_A > 0 && lambda > 0 ? 1 / (lambda * Id_A) : 0; // Ω

  // Paralelo (Rd || Rl || ro)
  const parallel = (...res: number[]) => {
    const valid = res.filter((r) => r > 0 && isFinite(r));
    if (valid.length === 0) return 0;
    const sumInv = valid.reduce((acc, r) => acc + 1 / r, 0);
    return 1 / sumInv;
  };

  const R_load_total = parallel(Rd, Rl, ro);

  // Ganancia de tensión de fuente común (aprox)
  const Av = gm > 0 && R_load_total > 0 ? -gm * R_load_total : 0;

  // Resistencia de entrada (idealmente infinita)
  const Rin = Infinity; // para MOSFET ideal, solo carga de compuerta

  // Resistencia de salida (aprox) vista desde el drenador
  const Rout = parallel(Rd, ro); // ignorando Rl externa para la definición

  return (
    <section className="calc">
      <p>
        Calculadora aproximada de parámetros de pequeña señal de una etapa
        <strong> NMOS de fuente común en saturación</strong>. Se ingresa la
        corriente de drenador en reposo, la sobreconducción V<sub>ov</sub> =
        V<sub>GS</sub> − V<sub>th</sub>, el parámetro λ y las resistencias de
        drenador y carga.
      </p>

      <div className="calc-grid">
        <label>
          I<sub>D</sub> de reposo (mA)
          <input
            type="number"
            min={0}
            step={0.1}
            value={Id_mA}
            onChange={(e) => setId_mA(e.target.value)}
          />
        </label>

        <label>
          V<sub>ov</sub> = V<sub>GS</sub> − V<sub>th</sub> (V)
          <input
            type="number"
            min={0}
            step={0.01}
            value={VovStr}
            onChange={(e) => setVovStr(e.target.value)}
          />
        </label>

        <label>
          λ (1/V)
          <input
            type="number"
            min={0}
            step={0.001}
            value={lambdaStr}
            onChange={(e) => setLambdaStr(e.target.value)}
          />
        </label>

        <label>
          R<sub>D</sub> (Ω)
          <input
            type="number"
            min={0}
            step={10}
            value={RdStr}
            onChange={(e) => setRdStr(e.target.value)}
          />
        </label>

        <label>
          R<sub>L</sub> (Ω)
          <input
            type="number"
            min={0}
            step={10}
            value={RlStr}
            onChange={(e) => setRlStr(e.target.value)}
          />
        </label>
      </div>

      <div className="calc-results">
        <h3>Resultados (modelo de pequeña señal MOSFET)</h3>
        <ul>
          <li>
            <span>
              I<sub>D</sub> (A)
            </span>
            <span>{Id_A ? Id_A.toExponential(3) : "—"}</span>
          </li>
          <li>
            <span>
              g<sub>m</sub> (S)
            </span>
            <span>{gm ? gm.toFixed(3) : "—"}</span>
          </li>
          <li>
            <span>
              r<sub>o</sub> (Ω)
            </span>
            <span>{ro ? ro.toFixed(0) : "—"}</span>
          </li>
          <li>
            <span>
              R<sub>D</sub> ∥ R<sub>L</sub> ∥ r<sub>o</sub> (Ω)
            </span>
            <span>{R_load_total ? R_load_total.toFixed(0) : "—"}</span>
          </li>
          <li>
            <span>
              A<sub>v</sub> ≈ −g<sub>m</sub>(R<sub>D</sub> ∥ R<sub>L</sub> ∥
              r<sub>o</sub>)
            </span>
            <span>{Av ? Av.toFixed(1) : "—"}</span>
          </li>
          <li>
            <span>
              R<sub>in</sub> (ideal) 
            </span>
            <span>{Rin === Infinity ? "Muy alta (≈ ∞)" : Rin.toFixed(0)}</span>
          </li>
          <li>
            <span>
              R<sub>out</sub> ≈ R<sub>D</sub> ∥ r<sub>o</sub> (Ω)
            </span>
            <span>{Rout ? Rout.toFixed(0) : "—"}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

/* ==============================
   Apuntes + fórmulas MOSFET
   ============================== */

const TransistorMosfetCheatSheet: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="sheet">
      {/* Encabezado */}
      <header className="sheet-header">
        <span className="sheet-pill">Electrónica · MOSFET</span>
        <h1 className="sheet-title">Transistor MOSFET: fórmulas clave</h1>
        <p className="sheet-subtitle">
          Resumen de regiones de operación, ecuaciones de corriente y modelo de
          pequeña señal de un MOSFET de canal n (NMOS) en configuración típica
          de fuente común.
        </p>
      </header>

      {/* 1. Tipos y regiones */}
      <section className="sheet-section">
        <h2>1. Tipos de MOSFET y regiones de operación</h2>

        <div className="formula-block">
          <span className="formula-tag">Tipos habituales</span>
          <ul>
            <li>NMOS canal n, PMOS canal p.</li>
            <li>De enriquecimiento (enhancement) y de agotamiento (depletion).</li>
            <li>Uso típico en electrónica analógica: NMOS de enriquecimiento.</li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Regiones de operación (NMOS)</span>
          <ul>
            <li>
              <strong>Corte:</strong> V<sub>GS</sub> &lt; V<sub>th</sub> → I
              <sub>D</sub> ≈ 0.
            </li>
            <li>
              <strong>Tríodo (región lineal):</strong>{" "}
              0 &lt; V<sub>DS</sub> &lt; V<sub>GS</sub> − V<sub>th</sub>.
            </li>
            <li>
              <strong>Saturación:</strong>{" "}
              V<sub>DS</sub> ≥ V<sub>GS</sub> − V<sub>th</sub>.
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Corriente de drenador */}
      <section className="sheet-section">
        <h2>2. Corriente de drenador en NMOS de enriquecimiento</h2>

        <div className="formula-block">
          <span className="formula-tag">Definición de k y V<sub>ov</sub></span>
          <Formula
            tex={String.raw`$$ k = \frac{1}{2}\mu_n C_{ox} \frac{W}{L} $$`}
          />
          <Formula
            tex={String.raw`$$ V_{ov} = V_{GS} - V_{th} \qquad\text{(tensión de sobreconducción)} $$`}
          />
          <p>
            μ<sub>n</sub>C<sub>ox</sub> y W/L caracterizan la tecnología y las
            dimensiones del transistor.
          </p>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Región de tríodo (lineal)</span>
          <Formula
            tex={String.raw`$$ I_D = \mu_n C_{ox}\frac{W}{L}\left[(V_{GS}-V_{th})V_{DS} - \frac{V_{DS}^2}{2}\right] $$`}
          />
        </div>

        <div className="formula-block">
          <span className="formula-tag">Región de saturación (sin λ)</span>
          <Formula
            tex={String.raw`$$ I_D = \frac{1}{2}\mu_n C_{ox}\frac{W}{L}(V_{GS}-V_{th})^2 = k V_{ov}^2 $$`}
          />
        </div>

        <div className="formula-block">
          <span className="formula-tag">Efecto de canal corto (λ)</span>
          <Formula
            tex={String.raw`$$ I_D \approx k V_{ov}^2 \left(1 + \lambda V_{DS}\right) $$`}
          />
          <p>
            λ es el parámetro de modulación de longitud de canal (efecto Early
            del MOSFET). λ = 0 ideal, λ &gt; 0 → I<sub>D</sub> sube levemente
            con V<sub>DS</sub>.
          </p>
        </div>
      </section>

      {/* 3. Modelo de pequeña señal en saturación */}
      <section className="sheet-section">
        <h2>3. Modelo de pequeña señal (saturación)</h2>

        <div className="formula-block">
          <span className="formula-tag">Transconductancia g<sub>m</sub></span>
          <Formula
            tex={String.raw`$$ g_m = \frac{\partial I_D}{\partial V_{GS}} \bigg|_{Q} \approx \frac{2I_{D_Q}}{V_{ov}} $$`}
          />
          <p>
            I<sub>D_Q</sub> es la corriente de drenador en el punto de
            polarización Q. V<sub>ov</sub> = V<sub>GS</sub> − V<sub>th</sub>.
          </p>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Resistencia de salida r<sub>o</sub></span>
          <Formula
            tex={String.raw`$$ r_o = \left(\frac{\partial I_D}{\partial V_{DS}}\right)^{-1}_{Q} \approx \frac{1}{\lambda I_{D_Q}} $$`}
          />
          <p>
            Cuanto mayor λ, menor r<sub>o</sub> y más pronunciado el efecto de
            modulación de canal (la salida deja de ser idealmente plana).
          </p>
        </div>
      </section>

      {/* 4. Etapa de fuente común */}
      <section className="sheet-section">
        <h2>4. Etapa NMOS de fuente común</h2>

        <div className="formula-block">
          <span className="formula-tag">Ganancia de tensión</span>
          <Formula
            tex={String.raw`$$ A_v \approx -g_m\,(R_D \parallel R_L \parallel r_o) $$`}
          />
          <ul>
            <li>R<sub>D</sub>: resistencia de drenador.</li>
            <li>R<sub>L</sub>: carga del circuito siguiente o resistor externo.</li>
            <li>r<sub>o</sub>: resistencia de salida del MOSFET.</li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Resistencias de entrada y salida</span>
          <Formula
            tex={String.raw`$$ R_{in} \approx \infty \quad\text{(compuerta ideal)} $$`}
          />
          <Formula
            tex={String.raw`$$ R_{out} \approx R_D \parallel r_o $$`}
          />
          <p>
            En la práctica, R<sub>in</sub> está limitada por resistencias de
            polarización de puerta y por la capacitancia de entrada, pero es muy
            alta comparada con un BJT.
          </p>
        </div>
      </section>

      {/* 5. Ejemplo rápido */}
      <section className="sheet-section">
        <h2>5. Ejemplo numérico rápido</h2>

        <div className="formula-block">
          <span className="formula-tag">Datos de diseño</span>
          <ul>
            <li>I<sub>D_Q</sub> = 2 mA</li>
            <li>V<sub>ov</sub> = 0.2 V</li>
            <li>λ = 0.02 1/V</li>
            <li>R<sub>D</sub> = 4.7 kΩ</li>
            <li>R<sub>L</sub> = 10 kΩ</li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Cálculos</span>
          <Formula
            tex={String.raw`$$ g_m \approx \frac{2I_{D_Q}}{V_{ov}} = \frac{2\cdot 2\ \text{mA}}{0.2\ \text{V}} = 0.02\ \text{S} $$`}
          />
          <Formula
            tex={String.raw`$$ r_o \approx \frac{1}{\lambda I_{D_Q}} = \frac{1}{0.02 \cdot 2\,\text{mA}} = 25\,\text{k}\Omega $$`}
          />
          <Formula
            tex={String.raw`$$ R_D \parallel R_L \parallel r_o \approx 3.0\,\text{k}\Omega\ \text{(orden de magnitud)} $$`}
          />
          <Formula
            tex={String.raw`$$ A_v \approx -g_m (R_D \parallel R_L \parallel r_o) \approx -0.02 \cdot 3\,\text{k}\Omega \approx -60 $$`}
          />
          <p>
            La etapa fuente común tiene una ganancia inversora de unas
            60&nbsp;veces en este ejemplo idealizado.
          </p>
        </div>
      </section>

      {/* 6. Calculadora */}
      <section className="sheet-section">
        <h2>6. Calculadora de pequeña señal MOSFET</h2>
        <MosfetCalculator />
      </section>
    </main>
  );
};

export default TransistorMosfetCheatSheet;
