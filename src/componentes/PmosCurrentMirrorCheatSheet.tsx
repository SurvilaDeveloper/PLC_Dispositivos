// src/componentes/PmosCurrentMirrorCheatSheet.tsx
import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

// Helper simple para fórmulas en bloque (MathJax se encarga del render)
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

/* =========================================================
   CALCULADORA · ESPEJO DE CORRIENTE PMOS (CARGA ACTIVA)
   ========================================================= */

const PmosMirrorCalculator: React.FC = () => {
  // Corriente de referencia (mA)
  const [Iref_mA, setIref_mA] = useState<string>("1");
  // Factor de espejado (m ramas de salida)
  const [mStr, setMStr] = useState<string>("2");
  // Overdrive del PMOS (|Vov_p| en V)
  const [VovStr, setVovStr] = useState<string>("0.2");
  // Tensión de alimentación
  const [VddStr, setVddStr] = useState<string>("5");

  const Iref = parseFloat(Iref_mA);
  const m = parseFloat(mStr);
  const Vov = parseFloat(VovStr);
  const Vdd = parseFloat(VddStr);

  const Iref_A = isFinite(Iref) && Iref > 0 ? Iref / 1000 : 0;
  const Iout_A = Iref_A * (isFinite(m) && m > 0 ? m : 0);

  // gm de la rama de referencia: gm ≈ 2·Id / |Vov|
  const gm_ref =
    Iref_A > 0 && Vov > 0 ? (2 * Iref_A) / Vov : 0; // S (A/V)

  // Corriente total desde VDD
  const Isupply_A = Iref_A + Iout_A;

  // Tensión máxima en el nodo de salida para que el PMOS se mantenga en saturación
  // (PMOS arriba de la carga, fuente en VDD):
  // cond. saturación: V_SD ≥ |Vov| → V_out ≤ VDD - |Vov|
  const Vout_max = Vdd > 0 && Vov > 0 ? Vdd - Vov : 0;

  return (
    <section className="calc">
      <p>
        Calculadora simplificada para un{" "}
        <strong>espejo de corriente PMOS</strong> como carga activa. Se define
        una corriente de referencia I<sub>REF</sub>, un overdrive |
        V<sub>ov,p</sub>| y la cantidad de ramas de salida m (todas idénticas a
        la rama de referencia).
      </p>

      <div className="calc-grid">
        <label>
          I<sub>REF</sub> (mA)
          <input
            type="number"
            min={0}
            step={0.1}
            value={Iref_mA}
            onChange={(e) => setIref_mA(e.target.value)}
          />
        </label>

        <label>
          m (número de ramas de salida)
          <input
            type="number"
            min={0}
            step={1}
            value={mStr}
            onChange={(e) => setMStr(e.target.value)}
          />
        </label>

        <label>
          |V<sub>ov,p</sub>| (V)
          <input
            type="number"
            min={0}
            step={0.01}
            value={VovStr}
            onChange={(e) => setVovStr(e.target.value)}
          />
        </label>

        <label>
          V<sub>DD</sub> (V)
          <input
            type="number"
            min={0}
            step={0.1}
            value={VddStr}
            onChange={(e) => setVddStr(e.target.value)}
          />
        </label>
      </div>

      <div className="calc-results">
        <h3>Resultados (modelo de pequeña señal del espejo PMOS)</h3>
        <ul>
          <li>
            <span>
              I<sub>REF</sub> (A)
            </span>
            <span>{Iref_A ? Iref_A.toExponential(3) : "—"}</span>
          </li>
          <li>
            <span>
              I<sub>OUT</sub> total (A) = m · I<sub>REF</sub>
            </span>
            <span>{Iout_A ? Iout_A.toExponential(3) : "—"}</span>
          </li>
          <li>
            <span>
              g<sub>m,REF</sub> ≈ 2·I<sub>REF</sub>/|V<sub>ov,p</sub>| (S)
            </span>
            <span>{gm_ref ? gm_ref.toFixed(3) : "—"}</span>
          </li>
          <li>
            <span>
              I de alimentación ≈ I<sub>REF</sub> + I<sub>OUT</sub> (A)
            </span>
            <span>{Isupply_A ? Isupply_A.toExponential(3) : "—"}</span>
          </li>
          <li>
            <span>
              V<sub>OUT,max</sub> ≈ V<sub>DD</sub> − |V<sub>ov,p</sub>| (V)
            </span>
            <span>{Vout_max ? Vout_max.toFixed(2) : "—"}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

/* =========================================================
   APUNTES · ESPEJO DE CORRIENTE PMOS
   ========================================================= */

const PmosCurrentMirrorCheatSheet: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="sheet">
      {/* Encabezado */}
      <header className="sheet-header">
        <span className="sheet-pill">Electrónica · PMOS</span>
        <h1 className="sheet-title">
          Transistor PMOS como espejo de corriente / carga activa
        </h1>
        <p className="sheet-subtitle">
          Resumen del funcionamiento de un espejo de corriente PMOS simple,
          usado como carga activa en amplificadores integrados, con las
          relaciones básicas de corriente, sobreconducción y tensión de
          cumplimiento.
        </p>
      </header>

      {/* 1. Topología básica */}
      <section className="sheet-section">
        <h2>1. Topología básica del espejo PMOS</h2>

        <div className="formula-block">
          <span className="formula-tag">Idea general</span>
          <p>
            Un espejo de corriente PMOS se monta habitualmente en{" "}
            <strong>alta lado (high side)</strong>, con las fuentes conectadas a
            V<sub>DD</sub>. Los drenadores bajan hacia las cargas o nodos del
            circuito.
          </p>
          <ul>
            <li>
              Un transistor PMOS de referencia fija la corriente I
              <sub>REF</sub>.
            </li>
            <li>
              Uno o varios PMOS “de salida” copian esa corriente hacia otros
              nodos (I<sub>OUT</sub>).
            </li>
            <li>
              El gate de todos los PMOS se conecta en común, de modo que V
              <sub>SG</sub> sea igual.
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Corriente de referencia y cuadrática */}
      <section className="sheet-section">
        <h2>2. Corriente de referencia y modelo cuadrático</h2>

        <div className="formula-block">
          <span className="formula-tag">Modelo en saturación</span>
          <p>
            Para un PMOS de canal largo ideal en saturación (ignorando efectos
            de canal corto):
          </p>
          <Formula
            tex={String.raw`$$ I_D = \frac{k_p}{2}(V_{SG} - |V_{th,p}|)^2 = \frac{k_p}{2} V_{ov,p}^2 $$`}
          />
          <ul>
            <li>
              k<sub>p</sub>: parámetro tecnológico (incluye W/L).
            </li>
            <li>
              V<sub>SG</sub>: tensión fuente–compuerta (positiva en valor
              absoluto).
            </li>
            <li>
              |V<sub>th,p</sub>|: módulo de la tensión umbral del PMOS.
            </li>
            <li>
              V<sub>ov,p</sub> = V<sub>SG</sub> − |V<sub>th,p</sub>|:{" "}
              <strong>overdrive</strong> del PMOS.
            </li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Transconductancia</span>
          <Formula
            tex={String.raw`$$ g_m = \frac{\partial I_D}{\partial V_{SG}} \approx \frac{2I_D}{V_{ov,p}} $$`}
          />
          <p>
            Esta expresión se usa para el modelo de pequeña señal de la carga
            activa PMOS en amplificadores.
          </p>
        </div>
      </section>

      {/* 3. Espejo de corriente PMOS */}
      <section className="sheet-section">
        <h2>3. Espejo de corriente PMOS simple</h2>

        <div className="formula-block">
          <span className="formula-tag">Espejo 1:1</span>
          <p>
            Si se usan dos dispositivos idénticos (mismo W/L) y se fuerza una
            corriente I<sub>REF</sub> en la rama de referencia:
          </p>
          <Formula
            tex={String.raw`$$ I_{OUT} \approx I_{REF} \quad (\text{espejo 1:1}) $$`}
          />
        </div>

        <div className="formula-block">
          <span className="formula-tag">Espejo m:1</span>
          <p>
            Si se escala el ancho W de la rama de salida por un factor m
            (manteniendo L constante):
          </p>
          <Formula
            tex={String.raw`$$ I_{OUT} \approx m \, I_{REF} $$`}
          />
          <p>
            Esto se usa para generar corrientes múltiples o escaladas a partir
            de una sola referencia.
          </p>
        </div>
      </section>

      {/* 4. Tensión de cumplimiento (compliance) */}
      <section className="sheet-section">
        <h2>4. Tensión de cumplimiento del espejo PMOS</h2>

        <div className="formula-block">
          <span className="formula-tag">Condición de saturación</span>
          <p>
            Para que el PMOS de salida se mantenga en saturación y la corriente
            se espeje correctamente, se requiere:
          </p>
          <Formula
            tex={String.raw`$$ V_{SD} \ge V_{ov,p} \quad\Rightarrow\quad V_D \le V_{DD} - V_{ov,p} $$`}
          />
          <p>
            Es decir, la tensión en el drenador (nodo de salida) no puede estar
            demasiado cerca de V<sub>DD</sub>; si sube por encima de
            V<sub>DD</sub> − V<sub>ov,p</sub>, el transistor sale de saturación
            y la corriente empieza a caer.
          </p>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Tensión máxima de salida</span>
          <Formula
            tex={String.raw`$$ V_{OUT,max} \approx V_{DD} - V_{ov,p} $$`}
          />
          <p>
            Por debajo de ese valor, el espejo de corriente se comporta
            correctamente y mantiene I<sub>OUT</sub> ≈ m·I<sub>REF</sub>.
          </p>
        </div>
      </section>

      {/* 5. Ejemplo numérico */}
      <section className="sheet-section">
        <h2>5. Ejemplo numérico</h2>

        <div className="formula-block">
          <span className="formula-tag">Datos</span>
          <ul>
            <li>I<sub>REF</sub> = 1 mA</li>
            <li>m = 2 (dos ramas de salida idénticas)</li>
            <li>|V<sub>ov,p</sub>| = 0.2 V</li>
            <li>V<sub>DD</sub> = 5 V</li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Cálculos</span>
          <Formula
            tex={String.raw`$$ I_{OUT} \approx 2 \cdot 1\ \text{mA} = 2\ \text{mA} $$`}
          />
          <Formula
            tex={String.raw`$$ I_{suministro} \approx I_{REF} + I_{OUT} = 3\ \text{mA} $$`}
          />
          <Formula
            tex={String.raw`$$ V_{OUT,max} \approx 5\ \text{V} - 0.2\ \text{V} = 4.8\ \text{V} $$`}
          />
          <p>
            Mientras el nodo de salida permanezca por debajo de 4.8 V, la rama
            de salida se mantiene en saturación y la corriente espejada se
            aproxima a 2 mA.
          </p>
        </div>
      </section>

      {/* 6. Calculadora */}
      <section className="sheet-section">
        <h2>6. Calculadora de espejo de corriente PMOS</h2>
        <PmosMirrorCalculator />
      </section>
    </main>
  );
};

export default PmosCurrentMirrorCheatSheet;
