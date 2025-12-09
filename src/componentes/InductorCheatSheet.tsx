import React, { useEffect, useState } from "react";
import "./inductorCheatSheet.css";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

// Helper para fórmulas en bloque (MathJax se encarga del render)
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const InductorCheatSheet: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="ind-body">
      <h1>Inductor ideal: corriente, tensión, impedancia y potencia</h1>

      <p>
        Resumen de las ecuaciones más usadas para un inductor ideal, tanto en el
        dominio del tiempo como en régimen sinusoidal (AC).
      </p>

      {/* 1. v–i en el tiempo */}
      <h2>1. Relación tensión–corriente en el dominio del tiempo</h2>
      <section className="formula-block">
        <div className="tag">Definición básica</div>
        <Formula
          tex={String.raw`$$ v_L(t) = L \cdot \dfrac{di(t)}{dt} $$`}
        />
        <ul>
          <li>{"$v_L(t)$ : tensión en el inductor (V)"}</li>
          <li>{"$i(t)$ : corriente por el inductor (A)"}</li>
          <li>{"$L$ : inductancia (H)"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Corriente a partir de la tensión</div>
        <Formula
          tex={String.raw`$$ i(t) = i(t_0) + \dfrac{1}{L} \int_{t_0}^{t} v_L(\tau)\,d\tau $$`}
        />
        <p>
          La corriente es proporcional al área (integral) de la tensión en el
          tiempo.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Caso en corriente continua</div>
        <Formula
          tex={String.raw`$$ \dfrac{di}{dt} = 0 \;\;\Rightarrow\;\; v_L(t) = 0 $$`}
        />
        <p>
          En régimen permanente de CC, el inductor ideal se comporta como un
          cortocircuito (solo queda su resistencia serie real).
        </p>
      </section>

      {/* 2. Impedancia en AC */}
      <h2>2. Impedancia del inductor en régimen sinusoidal</h2>
      <section className="formula-block">
        <div className="tag">Impedancia compleja</div>
        <p>
          Para una tensión sinusoidal de frecuencia $f$ y pulsación
          {" $\\omega = 2\\pi f$"}, la impedancia de un inductor ideal es:
        </p>
        <Formula tex={String.raw`$$ Z_L = j\,\omega L $$`} />
        <ul>
          <li>{"$j$ : unidad imaginaria"}</li>
          <li>{"$\\omega = 2\\pi f$ : pulsación (rad/s)"}</li>
          <li>{"$L$ : inductancia (H)"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Reactancia inductiva</div>
        <Formula
          tex={String.raw`$$ \lvert Z_L \rvert = X_L = \omega L $$`}
        />
        <p>
          A mayor frecuencia o mayor inductancia, mayor oposición al paso de la
          corriente ($X_L$ más grande).
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Desfase</div>
        <Formula
          tex={String.raw`$$ Z_L = j X_L \;\;\Rightarrow\;\; \text{la tensión adelanta 90^\circ a la corriente} $$`}
        />
        <p>
          El inductor “retrasa” la corriente: $i(t)$ queda 90° por detrás de
          $v(t)$.
        </p>
      </section>

      {/* 3. Corriente y tensión sinusoidal */}
      <h2>3. Corriente y tensión sinusoidal en el inductor</h2>
      <section className="formula-block">
        <div className="tag">Formas de onda</div>
        <Formula tex={String.raw`$$ v(t) = V_m \sin(\omega t) $$`} />
        <Formula tex={String.raw`$$ i(t) = I_m \sin(\omega t - 90^\circ) $$`} />
        <p>
          En fasores, la tensión está adelantada 90° respecto de la corriente.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Relación fasorial</div>
        <Formula
          tex={String.raw`$$ \vec{I} = \dfrac{\vec{V}}{Z_L} = \dfrac{\vec{V}}{j\,\omega L} $$`}
        />
      </section>

      {/* 4. Potencia en el inductor ideal */}
      <h2>4. Potencia en un inductor ideal (P, Q y factor de potencia)</h2>
      <section className="formula-block">
        <div className="tag">Potencia instantánea</div>
        <Formula tex={String.raw`$$ p(t) = v(t) \cdot i(t) $$`} />
      </section>

      <section className="formula-block">
        <div className="tag">Potencia activa promedio</div>
        <Formula
          tex={String.raw`$$ P = V_\text{rms} I_\text{rms} \cos\varphi $$`}
        />
        <Formula tex={String.raw`$$ \varphi = +90^\circ \;\;\Rightarrow\;\; P = 0 $$`} />
        <p>
          El inductor ideal no disipa potencia activa: solo almacena y devuelve
          energía.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Potencia reactiva</div>
        <Formula
          tex={String.raw`$$ Q = V_\text{rms} I_\text{rms} \sin\varphi $$`}
        />
        <Formula
          tex={String.raw`$$ \varphi = +90^\circ \;\;\Rightarrow\;\; Q = V_\text{rms} I_\text{rms} $$`}
        />
        <p>En un inductor ideal, el factor de potencia es puramente inductivo:</p>
        <Formula tex={String.raw`$$ \cos\varphi = 0 $$`} />
      </section>

      <section className="formula-block">
        <div className="tag">Q en función de corriente o tensión</div>
        <Formula
          tex={String.raw`$$ Q = I_\text{rms}^2 X_L = I_\text{rms}^2 \omega L $$`}
        />
        <Formula
          tex={String.raw`$$ Q = \dfrac{V_\text{rms}^2}{X_L} = \dfrac{V_\text{rms}^2}{\omega L} $$`}
        />
      </section>

      {/* 5. Unidades */}
      <h2>5. Unidades típicas</h2>
      <section className="formula-block">
        <ul>
          <li>{"$L$ : henrio (H)"}</li>
          <li>{"$f$ : hertz (Hz)"}</li>
          <li>{"$\\omega = 2\\pi f$ : radianes por segundo (rad/s)"}</li>
          <li>{"$X_L$ : ohm (Ω)"}</li>
          <li>{"$V_\\text{rms}$ : volt (V)"}</li>
          <li>{"$I_\\text{rms}$ : ampere (A)"}</li>
          <li>{"$P$ : watt (W)"}</li>
          <li>{"$Q$ : volt-ampere reactivo (var)"}</li>
        </ul>
      </section>

      {/* 6. Calculadora práctica */}
      <h2>6. Calculadora de inductor en AC</h2>
      <InductorCalculator />
    </main>
  );
};

export default InductorCheatSheet;

/* ============================
   CALCULADORA
   ============================ */

const InductorCalculator: React.FC = () => {
  // L en mH, f en Hz, V e I en RMS
  const [LmH, setLmH] = useState<string>("10");
  const [freq, setFreq] = useState<string>("50");
  const [Vrms, setVrms] = useState<string>("220");
  const [Irms, setIrms] = useState<string>("");

  const L = parseFloat(LmH) * 1e-3 || 0;
  const f = parseFloat(freq) || 0;
  const V = parseFloat(Vrms) || 0;
  const I = parseFloat(Irms) || 0;

  const omega = f > 0 ? 2 * Math.PI * f : 0;
  const XL = omega * L;
  const Zmod = XL;

  const I_from_V = V > 0 && XL > 0 ? V / XL : 0;
  const V_from_I = I > 0 && XL > 0 ? I * XL : 0;

  const Q_from_VI = V > 0 && I > 0 ? V * I : 0;
  const Q_from_V = V > 0 && XL > 0 ? (V * V) / XL : 0;
  const Q_from_I = I > 0 && XL > 0 ? I * I * XL : 0;

  return (
    <section className="ind-calc">
<p>
  {"Ingresá inductancia $L$, frecuencia $f$ y opcionalmente $V_{rms}$ y/o $I_{rms}$. Se asume inductor ideal."}
</p>




      <div className="ind-calc-grid">
        <label>
          L (mH)
          <input
            type="number"
            value={LmH}
            onChange={(e) => setLmH(e.target.value)}
            min={0}
            step={0.1}
          />
        </label>

        <label>
          f (Hz)
          <input
            type="number"
            value={freq}
            onChange={(e) => setFreq(e.target.value)}
            min={0}
            step={1}
          />
        </label>

        <label>
          <div>V<sub>rms</sub> (V)</div>
          
          <input
            type="number"
            value={Vrms}
            onChange={(e) => setVrms(e.target.value)}
            min={0}
            step={1}
          />
        </label>

        <label>
          <div>I<sub>rms</sub> (A)</div>
          
          <input
            type="number"
            value={Irms}
            onChange={(e) => setIrms(e.target.value)}
            min={0}
            step={0.01}
          />
        </label>
      </div>

      <div className="ind-calc-results">
        <h3>Resultados</h3>
        <ul>
          <li>
            <span>ω (rad/s)</span>
            <span>{omega ? omega.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>
              X<sub>L</sub> = |Z<sub>L</sub>| (Ω)
            </span>
            <span>{Zmod ? Zmod.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>
              I<sub>rms</sub> desde V (A)
            </span>
            <span>{I_from_V ? I_from_V.toFixed(3) : "—"}</span>
          </li>
          <li>
            <span>
              V<sub>rms</sub> desde I (V)
            </span>
            <span>{V_from_I ? V_from_I.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>Q = V · I (var)</span>
            <span>{Q_from_VI ? Q_from_VI.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>Q = V² / Xₗ (var)</span>
            <span>{Q_from_V ? Q_from_V.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>Q = I² · Xₗ (var)</span>
            <span>{Q_from_I ? Q_from_I.toFixed(2) : "—"}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
