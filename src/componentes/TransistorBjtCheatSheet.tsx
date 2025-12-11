// src/componentes/TransistorBjtCheatSheet.tsx
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
   Calculadora de pequeña señal BJT
   ============================== */

const BjtCalculator: React.FC = () => {
  // Corriente de colector de reposo en mA
  const [Icq_mA, setIcq_mA] = useState<string>("2");
  // Beta de DC
  const [betaStr, setBetaStr] = useState<string>("100");
  // Resistencia de colector (Ω)
  const [RcStr, setRcStr] = useState<string>("4700");
  // Resistencia de carga (Ω)
  const [RlStr, setRlStr] = useState<string>("10000");
  // Tensión de Early (V)
  const [VaStr, setVaStr] = useState<string>("50");

  const Icq = parseFloat(Icq_mA);
  const beta = parseFloat(betaStr);
  const Rc = parseFloat(RcStr);
  const Rl = parseFloat(RlStr);
  const Va = parseFloat(VaStr);

  const Icq_A = isFinite(Icq) && Icq > 0 ? Icq / 1000 : 0; // mA → A
  const VT = 0.025; // 25 mV aprox a 25 °C

  const gm = Icq_A > 0 ? Icq_A / VT : 0; // S
  const rpi = gm > 0 && beta > 0 ? beta / gm : 0; // Ω
  const ro = Icq_A > 0 && Va > 0 ? Va / Icq_A : 0; // Ω

  let Rc_par_Rl = 0;
  if (Rc > 0 && Rl > 0) {
    Rc_par_Rl = (Rc * Rl) / (Rc + Rl);
  } else if (Rc > 0) {
    Rc_par_Rl = Rc;
  } else if (Rl > 0) {
    Rc_par_Rl = Rl;
  }

  const Av = gm > 0 && Rc_par_Rl > 0 ? -gm * Rc_par_Rl : 0;
  const Rin = rpi; // aproximación
  const Rout = Rc_par_Rl; // aproximación

  return (
    <section className="calc">
      <p>
        Calculadora aproximada de parámetros de pequeña señal de una etapa
        emisor común (NPN) en función de la corriente de colector de reposo,
        β y las resistencias de colector y carga.
      </p>

      <div className="calc-grid">
        <label>
          I<sub>CQ</sub> (mA)
          <input
            type="number"
            min={0}
            step={0.1}
            value={Icq_mA}
            onChange={(e) => setIcq_mA(e.target.value)}
          />
        </label>

        <label>
          β (ganancia de corriente)
          <input
            type="number"
            min={1}
            step={1}
            value={betaStr}
            onChange={(e) => setBetaStr(e.target.value)}
          />
        </label>

        <label>
          R<sub>C</sub> (Ω)
          <input
            type="number"
            min={0}
            step={10}
            value={RcStr}
            onChange={(e) => setRcStr(e.target.value)}
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

        <label>
          V<sub>A</sub> (V) (tensión de Early)
          <input
            type="number"
            min={0}
            step={1}
            value={VaStr}
            onChange={(e) => setVaStr(e.target.value)}
          />
        </label>
      </div>

      <div className="calc-results">
        <h3>Resultados (modelo de pequeña señal)</h3>
        <ul>
          <li>
            <span>
              I<sub>CQ</sub> (A)
            </span>
            <span>{Icq_A ? Icq_A.toExponential(3) : "—"}</span>
          </li>
          <li>
            <span>
              g<sub>m</sub> (S)
            </span>
            <span>{gm ? gm.toFixed(3) : "—"}</span>
          </li>
          <li>
            <span>
              r<sub>π</sub> (Ω)
            </span>
            <span>{rpi ? rpi.toFixed(0) : "—"}</span>
          </li>
          <li>
            <span>
              r<sub>o</sub> (Ω)
            </span>
            <span>{ro ? ro.toFixed(0) : "—"}</span>
          </li>
          <li>
            <span>
              R<sub>C</sub> ∥ R<sub>L</sub> (Ω)
            </span>
            <span>{Rc_par_Rl ? Rc_par_Rl.toFixed(0) : "—"}</span>
          </li>
          <li>
            <span>
              A<sub>v</sub> ≈ −g<sub>m</sub>(R<sub>C</sub> ∥ R<sub>L</sub>)
            </span>
            <span>{Av ? Av.toFixed(1) : "—"}</span>
          </li>
          <li>
            <span>
              R<sub>in</sub> ≈ r<sub>π</sub> (Ω)
            </span>
            <span>{Rin ? Rin.toFixed(0) : "—"}</span>
          </li>
          <li>
            <span>
              R<sub>out</sub> ≈ R<sub>C</sub> ∥ R<sub>L</sub> (Ω)
            </span>
            <span>{Rout ? Rout.toFixed(0) : "—"}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

/* ==============================
   Apuntes + fórmulas BJT
   ============================== */

const TransistorBjtCheatSheet: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="sheet">
      {/* Encabezado */}
      <header className="sheet-header">
        <span className="sheet-pill">Electrónica · BJT</span>
        <h1 className="sheet-title">Transistor bipolar BJT: fórmulas clave</h1>
        <p className="sheet-subtitle">
          Resumen de relaciones entre corrientes, parámetros de ganancia y
          modelo de pequeña señal para transistores bipolares NPN/PNP.
        </p>
      </header>

      {/* 1. Corrientes básicas y parámetros estáticos */}
      <section className="sheet-section">
        <h2>1. Corrientes básicas y parámetros estáticos</h2>

        <div className="formula-block">
          <span className="formula-tag">Relación de corrientes</span>
          <Formula tex={String.raw`$$ I_E = I_C + I_B $$`} />
          <Formula tex={String.raw`$$ I_C \approx \beta I_B $$`} />
          <ul>
            <li>
              <strong>I<sub>E</sub></strong>: corriente de emisor.
            </li>
            <li>
              <strong>I<sub>C</sub></strong>: corriente de colector.
            </li>
            <li>
              <strong>I<sub>B</sub></strong>: corriente de base.
            </li>
            <li>
              <strong>β</strong> (beta): ganancia de corriente en emisor común.
            </li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Relación entre α y β</span>
          <Formula tex={String.raw`$$ \alpha = \frac{I_C}{I_E} $$`} />
          <Formula
            tex={String.raw`$$ \beta = \frac{\alpha}{1 - \alpha} \qquad\qquad \alpha = \frac{\beta}{\beta + 1} $$`}
          />
          <p>
            En muchos diseños prácticos se usa solo β (ganancia de corriente en
            emisor común).
          </p>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Unión base–emisor</span>
          <Formula
            tex={String.raw`$$ I_C \approx I_S \,\exp\!\left(\frac{V_{BE}}{V_T}\right) $$`}
          />
          <ul>
            <li>I<sub>S</sub>: corriente de saturación del transistor.</li>
            <li>
              V<sub>BE</sub>: tensión base–emisor (≈ 0.7 V para Si en
              conducción).
            </li>
            <li>
              V<sub>T</sub>: tensión térmica (≈ 25 mV a temperatura ambiente).
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Regiones de operación */}
      <section className="sheet-section">
        <h2>2. Regiones de operación del BJT NPN</h2>

        <div className="formula-block">
          <span className="formula-tag">Activa directa</span>
          <ul>
            <li>
              Unión base–emisor: directa (V<sub>BE</sub> ≈ 0.6–0.7 V).
            </li>
            <li>Unión base–colector: inversa.</li>
            <li>
              El BJT se comporta como amplificador:{" "}
              <strong>
                I<sub>C</sub> ≈ β · I<sub>B</sub>
              </strong>
              .
            </li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Corte y saturación</span>
          <ul>
            <li>
              <strong>Corte:</strong> V<sub>BE</sub> por debajo del umbral → I
              <sub>C</sub> ≈ 0, I<sub>B</sub> ≈ 0.
            </li>
            <li>
              <strong>Saturación:</strong> ambas uniones directas, aproximadamente:
            </li>
          </ul>
          <Formula
            tex={String.raw`$$ V_{BE(\text{sat})} \approx 0.7\ \text{V},\qquad V_{CE(\text{sat})} \approx 0.2\ \text{V} $$`}
          />
        </div>
      </section>

      {/* 3. Modelo de pequeña señal */}
      <section className="sheet-section">
        <h2>3. Modelo de pequeña señal (emisor común)</h2>

        <div className="formula-block">
          <span className="formula-tag">Transconductancia</span>
          <Formula tex={String.raw`$$ g_m = \frac{I_{C_Q}}{V_T} $$`} />
          <ul>
            <li>
              I<sub>CQ</sub>: corriente de colector en el punto de polarización
              Q.
            </li>
            <li>V<sub>T</sub> ≈ 25 mV a 25 °C.</li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Resistencias internas</span>
          <Formula tex={String.raw`$$ r_\pi = \frac{\beta}{g_m} $$`} />
          <Formula tex={String.raw`$$ r_o \approx \frac{V_A}{I_{C_Q}} $$`} />
          <ul>
            <li>r<sub>π</sub>: resistencia de entrada vista en la base.</li>
            <li>r<sub>o</sub>: resistencia de salida (efecto Early).</li>
            <li>V<sub>A</sub>: tensión de Early.</li>
          </ul>
        </div>
      </section>

      {/* 4. Ganancias típicas de una etapa emisor común */}
      <section className="sheet-section">
        <h2>4. Ganancias de una etapa emisor común</h2>

        <div className="formula-block">
          <span className="formula-tag">Ganancia de tensión</span>
          <Formula
            tex={String.raw`$$ A_v \approx -g_m \,(R_C \parallel R_L) $$`}
          />
          <ul>
            <li>R<sub>C</sub>: resistencia de colector.</li>
            <li>R<sub>L</sub>: carga conectada al colector.</li>
            <li>
              El signo negativo indica inversión de fase entre entrada y salida.
            </li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Resistencia de entrada y salida</span>
          <Formula
            tex={String.raw`$$ R_{in} \approx r_\pi \parallel R_{\text{polarización}} $$`}
          />
          <Formula tex={String.raw`$$ R_{out} \approx R_C \parallel R_L $$`} />
          <p>
            R<sub>polarización</sub> representa el paralelo de las resistencias
            del divisor de base (si lo hay) vistas desde la señal de entrada.
          </p>
        </div>
      </section>

      {/* 5. Ejemplo numérico rápido */}
      <section className="sheet-section">
        <h2>5. Ejemplo numérico rápido</h2>

        <div className="formula-block">
          <span className="formula-tag">Datos de diseño</span>
          <ul>
            <li>I<sub>CQ</sub> = 2 mA</li>
            <li>β ≈ 100</li>
            <li>R<sub>C</sub> = 4.7 kΩ</li>
            <li>R<sub>L</sub> = 10 kΩ (carga externa)</li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Cálculos</span>
          <Formula
            tex={String.raw`$$ g_m = \frac{I_{C_Q}}{V_T} \approx \frac{2\ \text{mA}}{25\ \text{mV}} = 0.08\ \text{S} $$`}
          />
          <Formula
            tex={String.raw`$$ r_\pi = \frac{\beta}{g_m} \approx \frac{100}{0.08} \approx 1.25\ \text{k}\Omega $$`}
          />
          <Formula
            tex={String.raw`$$ R_C \parallel R_L \approx \frac{4.7\,\text{k}\Omega \cdot 10\,\text{k}\Omega}{4.7\,\text{k}\Omega + 10\,\text{k}\Omega} \approx 3.2\,\text{k}\Omega $$`}
          />
          <Formula
            tex={String.raw`$$ A_v \approx -g_m (R_C \parallel R_L) \approx -0.08 \cdot 3.2\,\text{k}\Omega \approx -256 $$`}
          />
          <p>
            En este ejemplo idealizado, la etapa emisor común tiene una ganancia
            de tensión aproximada de −250 (inversora).
          </p>
        </div>
      </section>

      {/* 6. Calculadora */}
      <section className="sheet-section">
        <h2>6. Calculadora de pequeña señal BJT</h2>
        <BjtCalculator />
      </section>
    </main>
  );
};

export default TransistorBjtCheatSheet;

