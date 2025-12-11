// src/componentes/MosfetSourceFollowerCheatSheet.tsx
import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

// Helper para fórmulas en bloque
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

/* ========================================
   CALCULADORA: SEGUIDOR DE FUENTE (SOURCE FOLLOWER)
   ======================================== */

const MosfetSourceFollowerCalculator: React.FC = () => {
  // Corriente de drenador/fuente en reposo (mA)
  const [Id_mA, setId_mA] = useState<string>("2");
  // Vov = VGS - Vth (V)
  const [VovStr, setVovStr] = useState<string>("0.2");
  // Resistencia de fuente (Rs) a masa (Ω)
  const [RsStr, setRsStr] = useState<string>("1000");
  // Resistencia de carga (Rl) conectada a la salida (Ω)
  const [RlStr, setRlStr] = useState<string>("10000");

  const Id = parseFloat(Id_mA);
  const Vov = parseFloat(VovStr);
  const Rs = parseFloat(RsStr);
  const Rl = parseFloat(RlStr);

  const Id_A = isFinite(Id) && Id > 0 ? Id / 1000 : 0; // mA → A

  // gm ≈ 2·Id / Vov (en saturación)
  const gm = Id_A > 0 && Vov > 0 ? (2 * Id_A) / Vov : 0; // S

  // Resistencia equivalente de carga en la fuente (Rs || Rl)
  const parallel = (...res: number[]) => {
    const valid = res.filter((r) => r > 0 && isFinite(r));
    if (valid.length === 0) return 0;
    const sumInv = valid.reduce((acc, r) => acc + 1 / r, 0);
    return 1 / sumInv;
  };

  const R_load = parallel(Rs, Rl); // carga efectiva en la fuente

  // Ganancia aproximada de seguidor de fuente:
  // A_v ≈ R_load / (R_load + 1/gm)
  const gm_inv = gm > 0 ? 1 / gm : Infinity;

  const Av =
    gm > 0 && R_load > 0
      ? R_load / (R_load + gm_inv) // ~ < 1 y positiva
      : 0;

  // R_in: muy alta (limitada por resistencias de polarización)
  const Rin = Infinity;

  // R_out ≈ 1 / gm || Rs (simplificado)
  const Rout = parallel(gm > 0 ? 1 / gm : Infinity, Rs);

  return (
    <section className="calc">
      <p>
        Calculadora aproximada de una etapa{" "}
        <strong>seguidor de fuente (source follower) NMOS</strong> en
        saturación. Se ingresa la corriente de reposo, la sobreconducción
        V<sub>ov</sub>, la resistencia de fuente R<sub>S</sub> y la carga
        R<sub>L</sub> conectada a la salida.
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
          R<sub>S</sub> (Ω)
          <input
            type="number"
            min={0}
            step={10}
            value={RsStr}
            onChange={(e) => setRsStr(e.target.value)}
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
        <h3>Resultados (modelo de pequeña señal seguidor de fuente)</h3>
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
              R<sub>carga</sub> = R<sub>S</sub> ∥ R<sub>L</sub> (Ω)
            </span>
            <span>{R_load ? R_load.toFixed(0) : "—"}</span>
          </li>
          <li>
            <span>
              A<sub>v</sub> ≈ R<sub>carga</sub> / (R<sub>carga</sub> + 1/g
              <sub>m</sub>)
            </span>
            <span>{Av ? Av.toFixed(3) : "—"}</span>
          </li>
          <li>
            <span>
              R<sub>in</sub> (ideal)
            </span>
            <span>{Rin === Infinity ? "Muy alta (≈ ∞)" : Rin.toFixed(0)}</span>
          </li>
          <li>
            <span>
              R<sub>out</sub> ≈ (1/g<sub>m</sub>) ∥ R<sub>S</sub> (Ω)
            </span>
            <span>{Rout ? Rout.toFixed(0) : "—"}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

/* ========================================
   APUNTES + FÓRMULAS: MOSFET SEGUIDOR DE FUENTE
   ======================================== */

const MosfetSourceFollowerCheatSheet: React.FC = () => {
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
        <h1 className="sheet-title">
          Etapa MOSFET seguidor de fuente (source follower)
        </h1>
        <p className="sheet-subtitle">
          Resumen de funcionamiento, fórmulas de pequeña señal y parámetros
          básicos de una etapa NMOS seguidor de fuente, pensada como buffer de
          tensión con alta impedancia de entrada.
        </p>
      </header>

      {/* 1. Idea general */}
      <section className="sheet-section">
        <h2>1. Idea general del seguidor de fuente</h2>

        <div className="formula-block">
          <span className="formula-tag">Topología</span>
          <ul>
            <li>Compuerta (G) recibe la señal de entrada.</li>
            <li>Fuente (S) es la salida, conectada a una resistencia R<sub>S</sub> hacia masa.</li>
            <li>Drenador (D) conectado a V<sub>DD</sub> (a través de una resistencia o directamente).</li>
          </ul>
          <p>
            Es análogo al emisor seguidor en BJT, pero usando MOSFET:{" "}
            <strong>ganancia de tensión ≈ 1</strong>, alta impedancia de entrada
            y baja impedancia de salida.
          </p>
        </div>
      </section>

      {/* 2. Polarización básica */}
      <section className="sheet-section">
        <h2>2. Polarización de DC</h2>

        <div className="formula-block">
          <span className="formula-tag">Relación DC</span>
          <p>
            Si el MOSFET está en saturación, se cumple:
          </p>
          <Formula
            tex={String.raw`$$ I_D = I_S \approx k(V_{GS}-V_{th})^2 = k V_{ov}^2 $$`}
          />
          <p>
            y la tensión en la fuente (salida DC) es aproximadamente:
          </p>
          <Formula
            tex={String.raw`$$ V_S = I_D \cdot R_S $$`}
          />
          <p>
            con V<sub>GS</sub> fijada por la polarización de compuerta.
          </p>
        </div>
      </section>

      {/* 3. Modelo de pequeña señal */}
      <section className="sheet-section">
        <h2>3. Modelo de pequeña señal del seguidor de fuente</h2>

        <div className="formula-block">
          <span className="formula-tag">Transconductancia</span>
          <Formula
            tex={String.raw`$$ g_m \approx \frac{2I_{D_Q}}{V_{ov}} $$`}
          />
          <p>
            I<sub>D_Q</sub> es la corriente de reposo en el punto de operación Q.
          </p>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Ganancia de tensión</span>
          <p>
            Considerando una resistencia R<sub>S</sub> a masa y una carga
            R<sub>L</sub> conectada a la fuente:
          </p>
          <Formula
            tex={String.raw`$$ R_\text{carga} = R_S \parallel R_L $$`}
          />
          <Formula
            tex={String.raw`$$ A_v = \frac{v_o}{v_i} \approx \frac{R_\text{carga}}{R_\text{carga} + \frac{1}{g_m}} $$`}
          />
          <p>
            Para g<sub>m</sub> grande y R<sub>carga</sub> moderada, A<sub>v</sub>{" "}
            ≈ 0.9–0.99: el seguidor de fuente{" "}
            <strong>no invierte la señal</strong> y la copia con ligera caída.
          </p>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Impedancias</span>
          <Formula
            tex={String.raw`$$ R_{in} \approx \infty \quad\text{(compuerta ideal)} $$`}
          />
          <Formula
            tex={String.raw`$$ R_{out} \approx \left(\frac{1}{g_m}\right) \parallel R_S $$`}
          />
          <p>
            Por eso el seguidor de fuente se usa como{" "}
            <strong>buffer de tensión</strong>: carga poco a la etapa anterior y
            puede entregar corriente a la etapa siguiente.
          </p>
        </div>
      </section>

      {/* 4. Ejemplo numérico */}
      <section className="sheet-section">
        <h2>4. Ejemplo numérico</h2>

        <div className="formula-block">
          <span className="formula-tag">Datos</span>
          <ul>
            <li>I<sub>D_Q</sub> = 2 mA</li>
            <li>V<sub>ov</sub> = 0.2 V</li>
            <li>R<sub>S</sub> = 1 kΩ</li>
            <li>R<sub>L</sub> = 10 kΩ</li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Cálculos</span>
          <Formula
            tex={String.raw`$$ g_m \approx \frac{2I_{D_Q}}{V_{ov}} = \frac{2\cdot 2\ \text{mA}}{0.2\ \text{V}} = 0.02\ \text{S} $$`}
          />
          <Formula
            tex={String.raw`$$ R_\text{carga} = R_S \parallel R_L \approx 0.91\ \text{k}\Omega $$`}
          />
          <Formula
            tex={String.raw`$$ A_v \approx \frac{R_\text{carga}}{R_\text{carga} + 1/g_m} \approx \frac{0.91\ \text{k}\Omega}{0.91\ \text{k}\Omega + 50\ \Omega} \approx 0.95 $$`}
          />
          <p>
            La salida sigue a la entrada con una ganancia cercana a 1, pero con
            baja impedancia de salida (del orden de decenas de ohms).
          </p>
        </div>
      </section>

      {/* 5. Calculadora */}
      <section className="sheet-section">
        <h2>5. Calculadora de seguidor de fuente MOSFET</h2>
        <MosfetSourceFollowerCalculator />
      </section>
    </main>
  );
};

export default MosfetSourceFollowerCheatSheet;
