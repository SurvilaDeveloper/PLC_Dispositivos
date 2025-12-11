// src/componentes/PmosActiveLoadDiffAmpCheatSheet.tsx
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
   CALCULADORA · GANANCIA DIFERENCIAL CON CARGA ACTIVA PMOS
   ========================================================= */

const PmosActiveLoadDiffCalculator: React.FC = () => {
  // g_mn en mA/V
  const [gmnStr, setGmnStr] = useState<string>("5");
  // r_on y r_op en kΩ
  const [ronStr, setRonStr] = useState<string>("50");
  const [ropStr, setRopStr] = useState<string>("50");

  const gmn_mA_V = parseFloat(gmnStr);
  const ron_k = parseFloat(ronStr);
  const rop_k = parseFloat(ropStr);

  const gmn = isFinite(gmn_mA_V) && gmn_mA_V > 0 ? gmn_mA_V / 1000 : 0; // S
  const ron = isFinite(ron_k) && ron_k > 0 ? ron_k * 1e3 : 0; // Ω
  const rop = isFinite(rop_k) && rop_k > 0 ? rop_k * 1e3 : 0; // Ω

  // r_out = r_on || r_op
  let rout = 0;
  if (ron > 0 && rop > 0) {
    rout = (ron * rop) / (ron + rop);
  }

  // Ganancia como common–source (entrada en una rama, la otra a masa AC)
  const Av_cs = gmn > 0 && rout > 0 ? -gmn * rout : 0; // adimensional

  // Ganancia diferencial (entrada diferencial v_id, salida en un solo nodo)
  // v_id se reparte como +v_id/2 y -v_id/2 en cada transistor.
  // A_v_diff_single ≈ -(gmn * rout) / 2
  const Av_diff_single = Av_cs / 2;

  return (
    <section className="calc">
      <p>
        Calculadora simplificada para estimar la ganancia de un{" "}
        <strong>amplificador diferencial NMOS con carga activa PMOS</strong>,
        vista en una sola salida. Se usan parámetros de pequeña señal: g
        <sub>m</sub> del NMOS y resistencias de salida r
        <sub>o</sub> de NMOS y PMOS.
      </p>

      <div className="calc-grid">
        <label>
          g<sub>m,n</sub> (mA/V)
          <input
            type="number"
            min={0}
            step={0.1}
            value={gmnStr}
            onChange={(e) => setGmnStr(e.target.value)}
          />
        </label>

        <label>
          r<sub>o,n</sub> (kΩ)
          <input
            type="number"
            min={0}
            step={1}
            value={ronStr}
            onChange={(e) => setRonStr(e.target.value)}
          />
        </label>

        <label>
          r<sub>o,p</sub> (kΩ)
          <input
            type="number"
            min={0}
            step={1}
            value={ropStr}
            onChange={(e) => setRopStr(e.target.value)}
          />
        </label>
      </div>

      <div className="calc-results">
        <h3>Resultados (modelo de pequeña señal)</h3>
        <ul>
          <li>
            <span>
              g<sub>m,n</sub> (S)
            </span>
            <span>{gmn ? gmn.toFixed(4) : "—"}</span>
          </li>
          <li>
            <span>
              r<sub>out</sub> = r<sub>o,n</sub> ∥ r<sub>o,p</sub> (kΩ)
            </span>
            <span>{rout ? (rout / 1e3).toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>
              A<sub>v,CS</sub> ≈ −g<sub>m,n</sub> · r<sub>out</sub>
            </span>
            <span>{Av_cs ? Av_cs.toFixed(1) : "—"}</span>
          </li>
          <li>
            <span>
              A<sub>v,d→o</sub> ≈ A<sub>v,CS</sub>/2 (entrada diferencial,
              salida simple)
            </span>
            <span>{Av_diff_single ? Av_diff_single.toFixed(1) : "—"}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

/* =========================================================
   APUNTES · PMOS COMO CARGA ACTIVA EN AMPLIFICADOR DIFERENCIAL
   ========================================================= */

const PmosActiveLoadDiffAmpCheatSheet: React.FC = () => {
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
          PMOS como carga activa en amplificador diferencial NMOS
        </h1>
        <p className="sheet-subtitle">
          Resumen conceptual y de pequeña señal de un amplificador diferencial
          NMOS con carga activa PMOS: corrientes, resistencias de salida y
          ganancia aproximada de etapa.
        </p>
      </header>

      {/* 1. Estructura general */}
      <section className="sheet-section">
        <h2>1. Estructura general del amplificador diferencial con carga activa</h2>

        <div className="formula-block">
          <span className="formula-tag">Topología típica</span>
          <p>
            Un amplificador diferencial MOS clásico se compone de:
          </p>
          <ul>
            <li>
              Un par diferencial NMOS en la parte baja (fuentes unidas a una
              fuente de corriente de cola I<sub>tail</sub>).
            </li>
            <li>
              Transistores PMOS como carga activa en la parte alta (conectados a
              V<sub>DD</sub>), formando espejos de corriente.
            </li>
            <li>
              Una o dos salidas: salida simple (un nodo) o salida diferencial
              (dos nodos opuestos).
            </li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Corriente de cola</span>
          <Formula
            tex={String.raw`$$ I_{\text{tail}} \approx I_{D1} + I_{D2} $$`}
          />
          <p>
            En régimen ideal y simétrico, la corriente de cola se reparte entre
            las dos ramas del par diferencial según la entrada diferencial.
          </p>
        </div>
      </section>

      {/* 2. Relación entrada diferencial - corrientes */}
      <section className="sheet-section">
        <h2>2. Relación entrada diferencial – corrientes de rama</h2>

        <div className="formula-block">
          <span className="formula-tag">Entrada diferencial pequeña</span>
          <p>
            Para señales pequeñas y dispositivos idénticos se puede linealizar
            alrededor del punto de operación. Sea v<sub>id</sub> la tensión
            diferencial de entrada:
          </p>
          <Formula
            tex={String.raw`$$ v_{id} = v_{in1} - v_{in2} $$`}
          />
        </div>

        <div className="formula-block">
          <span className="formula-tag">Incremento de corriente</span>
          <Formula
            tex={String.raw`$$ \Delta I_{D1} \approx +\frac{g_{m,n}}{2}\,v_{id} $$`}
          />
          <Formula
            tex={String.raw`$$ \Delta I_{D2} \approx -\frac{g_{m,n}}{2}\,v_{id} $$`}
          />
          <p>
            La corriente de una rama aumenta y la de la otra disminuye en la
            misma magnitud, manteniendo aproximadamente constante la suma de
            corrientes (igual a I<sub>tail</sub>).
          </p>
        </div>
      </section>

      {/* 3. Carga activa PMOS y resistencia de salida */}
      <section className="sheet-section">
        <h2>3. Carga activa PMOS y resistencia de salida</h2>

        <div className="formula-block">
          <span className="formula-tag">Modelo de pequeña señal</span>
          <p>
            En pequeña señal, la rama de salida se ve como:
          </p>
          <ul>
            <li>
              Un transconductor g<sub>m,n</sub> (del transistor NMOS de la rama).
            </li>
            <li>
              Dos resistencias de salida en paralelo: r<sub>o,n</sub> y r
              <sub>o,p</sub>.
            </li>
          </ul>
          <Formula
            tex={String.raw`$$ r_{\text{out}} \approx r_{o,n} \parallel r_{o,p} $$`}
          />
        </div>

        <div className="formula-block">
          <span className="formula-tag">Ventaja de la carga activa</span>
          <p>
            Al usar PMOS como carga activa en lugar de una simple resistencia,
            r<sub>out</sub> aumenta considerablemente (r<sub>o,n</sub>∥r
            <sub>o,p</sub> puede ser del orden de cientos de kΩ o más), lo que
            incrementa la ganancia de la etapa.
          </p>
        </div>
      </section>

      {/* 4. Ganancia de etapa */}
      <section className="sheet-section">
        <h2>4. Ganancia de etapa con salida simple</h2>

        <div className="formula-block">
          <span className="formula-tag">Modo common–source</span>
          <p>
            Viendo solo una rama como un amplificador common–source NMOS con
            carga activa PMOS (entrada en esa rama, la otra fijada a masa AC):
          </p>
          <Formula
            tex={String.raw`$$ A_{v,CS} \approx -g_{m,n}\,r_{\text{out}} $$`}
          />
        </div>

        <div className="formula-block">
          <span className="formula-tag">Entrada diferencial, salida simple</span>
          <p>
            Cuando se aplica entrada diferencial y se observa la salida de solo
            una rama, la ganancia efectiva se reduce a la mitad (la rama “ve”
            aproximadamente v<sub>id</sub>/2):
          </p>
          <Formula
            tex={String.raw`$$ A_{v,d\to o} \approx -\frac{g_{m,n}\,r_{\text{out}}}{2} $$`}
          />
          <p>
            Esta es la ganancia diferencial a una sola salida. Si se toma la
            diferencia entre las dos salidas, la ganancia se duplica.
          </p>
        </div>
      </section>

      {/* 5. Ejemplo numérico */}
      <section className="sheet-section">
        <h2>5. Ejemplo numérico</h2>

        <div className="formula-block">
          <span className="formula-tag">Datos de diseño</span>
          <ul>
            <li>g<sub>m,n</sub> = 5 mA/V</li>
            <li>r<sub>o,n</sub> = 50 kΩ</li>
            <li>r<sub>o,p</sub> = 50 kΩ</li>
          </ul>
        </div>

        <div className="formula-block">
          <span className="formula-tag">Cálculos</span>
          <Formula
            tex={String.raw`$$ r_{\text{out}} = 50\,k\Omega \parallel 50\,k\Omega \approx 25\,k\Omega $$`}
          />
          <Formula
            tex={String.raw`$$ A_{v,CS} \approx -g_{m,n} \, r_{\text{out}} = -(5\ \text{mA/V})(25\ \text{k}\Omega) \approx -125 $$`}
          />
          <Formula
            tex={String.raw`$$ A_{v,d\to o} \approx -\frac{A_{v,CS}}{2} \approx -62.5 $$`}
          />
          <p>
            En este ejemplo, la ganancia diferencial a una sola salida es del
            orden de 60 veces en magnitud, gracias a la alta resistencia de
            salida generada por la carga activa PMOS.
          </p>
        </div>
      </section>

      {/* 6. Calculadora */}
      <section className="sheet-section">
        <h2>6. Calculadora de ganancia (modelo simple)</h2>
        <PmosActiveLoadDiffCalculator />
      </section>
    </main>
  );
};

export default PmosActiveLoadDiffAmpCheatSheet;
