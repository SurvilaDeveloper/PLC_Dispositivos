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

const CapacitorCheatSheet: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="page-wrapper">
      <h1>Capacitor ideal: corriente, tensión, impedancia y potencia</h1>

      <p>
        Resumen de las ecuaciones más usadas para un capacitor ideal, tanto en el
        dominio del tiempo como en régimen sinusoidal (AC).
      </p>

      {/* 1. i–v en el tiempo */}
      <h2>1. Relación corriente–tensión en el dominio del tiempo</h2>
      <section className="formula-block">
        <div className="tag">Definición básica</div>
        <Formula
          tex={String.raw`$$ i_C(t) = C \cdot \dfrac{dv(t)}{dt} $$`}
        />
        <ul>
          <li>{"$i_C(t)$ : corriente por el capacitor (A)"}</li>
          <li>{"$v(t)$ : tensión en el capacitor (V)"}</li>
          <li>{"$C$ : capacitancia (F)"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Tensión a partir de la corriente</div>
        <Formula
          tex={String.raw`$$ v(t) = v(t_0) + \dfrac{1}{C} \int_{t_0}^{t} i_C(\tau)\,d\tau $$`}
        />
        <p>
          La tensión es proporcional al área (integral) de la corriente en el
          tiempo.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Caso en corriente continua</div>
        <Formula
          tex={String.raw`$$ \dfrac{dv}{dt} = 0 \;\;\Rightarrow\;\; i_C(t) = 0 $$`}
        />
        <p>
          En régimen permanente de CC, el capacitor ideal se comporta como un
          circuito abierto (no circula corriente continua).
        </p>
      </section>

      {/* 2. Impedancia en AC */}
      <h2>2. Impedancia del capacitor en régimen sinusoidal</h2>
      <section className="formula-block">
        <div className="tag">Impedancia compleja</div>
        <p>
          Para una tensión sinusoidal de frecuencia $f$ y pulsación
          {" $\\omega = 2\\pi f$"}, la impedancia de un capacitor ideal es:
        </p>
        <Formula
          tex={String.raw`$$ Z_C = \dfrac{1}{j\,\omega C} = -\,j\,\dfrac{1}{\omega C} $$`}
        />
        <ul>
          <li>{"$j$ : unidad imaginaria"}</li>
          <li>{"$\\omega = 2\\pi f$ : pulsación (rad/s)"}</li>
          <li>{"$C$ : capacitancia (F)"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Reactancia capacitiva</div>
        <Formula
          tex={String.raw`$$ \lvert Z_C \rvert = X_C = \dfrac{1}{\omega C} $$`}
        />
        <p>
          A mayor frecuencia o mayor capacitancia, <strong>menor</strong>{" "}
          oposición al paso de la corriente ($X_C$ más chico).
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Desfase</div>
        <Formula
          tex={String.raw`$$ Z_C = -j X_C \;\;\Rightarrow\;\; \text{la corriente adelanta 90^\circ a la tensión} $$`}
        />
        <p>
          El capacitor “adelanta” la corriente: $i(t)$ va 90° por delante de
          $v(t)$.
        </p>
      </section>

      {/* 3. Corriente y tensión sinusoidal */}
      <h2>3. Corriente y tensión sinusoidal en el capacitor</h2>
      <section className="formula-block">
        <div className="tag">Formas de onda</div>
        <Formula tex={String.raw`$$ v(t) = V_m \sin(\omega t) $$`} />
        <Formula tex={String.raw`$$ i(t) = I_m \sin(\omega t + 90^\circ) $$`} />
        <p>
          En fasores, la corriente está adelantada 90° respecto de la tensión.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Relación fasorial</div>
        <Formula
          tex={String.raw`$$ \vec{I} = \dfrac{\vec{V}}{Z_C} = j\,\omega C\,\vec{V} $$`}
        />
      </section>

      {/* 4. Potencia en el capacitor ideal */}
      <h2>4. Potencia en un capacitor ideal (P, Q y factor de potencia)</h2>
      <section className="formula-block">
        <div className="tag">Potencia instantánea</div>
        <Formula tex={String.raw`$$ p(t) = v(t) \cdot i(t) $$`} />
      </section>

      <section className="formula-block">
        <div className="tag">Potencia activa promedio</div>
        <Formula
          tex={String.raw`$$ P = V_\text{rms} I_\text{rms} \cos\varphi $$`}
        />
        <Formula
          tex={String.raw`$$ \varphi = -90^\circ \;\;\Rightarrow\;\; P = 0 $$`}
        />
        <p>
          El capacitor ideal tampoco disipa potencia activa: solo intercambia
          energía con el circuito.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Potencia reactiva capacitiva</div>
        <Formula
          tex={String.raw`$$ Q = V_\text{rms} I_\text{rms} \sin\varphi $$`}
        />
        <Formula
          tex={String.raw`$$ \varphi = -90^\circ \;\;\Rightarrow\;\; Q = -\,V_\text{rms} I_\text{rms} $$`}
        />
        <p>
          En un capacitor ideal, la potencia reactiva es{" "}
          <strong>capacitiva</strong> y su signo es negativo en la convención
          usual. El factor de potencia es puramente capacitivo:
        </p>
        <Formula tex={String.raw`$$ \cos\varphi = 0 $$`} />
      </section>

      <section className="formula-block">
        <div className="tag">|Q| en función de corriente o tensión</div>
        <p>El módulo (valor absoluto) de la potencia reactiva es:</p>
        <Formula
          tex={String.raw`$$ \lvert Q \rvert = I_\text{rms}^2 X_C = I_\text{rms}^2 \dfrac{1}{\omega C} $$`}
        />
        <Formula
          tex={String.raw`$$ \lvert Q \rvert = \dfrac{V_\text{rms}^2}{X_C} = V_\text{rms}^2 \,\omega C $$`}
        />
      </section>

      {/* 5. Unidades */}
      <h2>5. Unidades típicas</h2>
      <section className="formula-block">
        <ul>
          <li>{"$C$ : faradio (F)"}</li>
          <li>{"$f$ : hertz (Hz)"}</li>
          <li>{"$\\omega = 2\\pi f$ : radianes por segundo (rad/s)"}</li>
          <li>{"$X_C$ : ohm (Ω)"}</li>
          <li>{"$V_\\text{rms}$ : volt (V)"}</li>
          <li>{"$I_\\text{rms}$ : ampere (A)"}</li>
          <li>{"$P$ : watt (W)"}</li>
          <li>{"$Q$ : volt-ampere reactivo (var), negativo para capacitivo"}</li>
        </ul>
      </section>

      {/* 6. Calculadora práctica */}
      <h2>6. Calculadora de capacitor en AC</h2>
      <CapacitorCalculator />
    </main>
  );
};

export default CapacitorCheatSheet;

/* ============================
   CALCULADORA
   ============================ */

const CapacitorCalculator: React.FC = () => {
  // C en µF, f en Hz, V e I en RMS
  const [CuF, setCuF] = useState<string>("10");
  const [freq, setFreq] = useState<string>("50");
  const [Vrms, setVrms] = useState<string>("220");
  const [Irms, setIrms] = useState<string>("");

  const C = parseFloat(CuF) * 1e-6 || 0; // µF → F
  const f = parseFloat(freq) || 0;
  const V = parseFloat(Vrms) || 0;
  const I = parseFloat(Irms) || 0;

  const omega = f > 0 ? 2 * Math.PI * f : 0;
  const XC = omega > 0 && C > 0 ? 1 / (omega * C) : 0; // reactancia capacitiva
  const Zmod = XC;

  const I_from_V = V > 0 && XC > 0 ? V / XC : 0;
  const V_from_I = I > 0 && XC > 0 ? I * XC : 0;

  // |Q| (módulo de la potencia reactiva); en capacitivo el signo real sería negativo
  const Q_from_VI = V > 0 && I > 0 ? V * I : 0;
  const Q_from_V = V > 0 && XC > 0 ? (V * V) / XC : 0;
  const Q_from_I = I > 0 && XC > 0 ? I * I * XC : 0;

  return (
    <section className="calc">
      <p>
        {"Ingresá capacitancia $C$, frecuencia $f$ y opcionalmente $V_{rms}$ y/o $I_{rms}$. Se asume capacitor ideal (sin pérdidas)."}
      </p>

      <div className="calc-grid">
        <label>
          C (µF)
          <input
            type="number"
            value={CuF}
            onChange={(e) => setCuF(e.target.value)}
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
          <div>
            V<sub>rms</sub> (V)
          </div>
          <input
            type="number"
            value={Vrms}
            onChange={(e) => setVrms(e.target.value)}
            min={0}
            step={1}
          />
        </label>

        <label>
          <div>
            I<sub>rms</sub> (A)
          </div>
          <input
            type="number"
            value={Irms}
            onChange={(e) => setIrms(e.target.value)}
            min={0}
            step={0.01}
          />
        </label>
      </div>

      <div className="calc-results">
        <h3>Resultados</h3>
        <ul>
          <li>
            <span>ω (rad/s)</span>
            <span>{omega ? omega.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>
              X<sub>C</sub> = |Z<sub>C</sub>| (Ω)
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
            <span>|Q| = V · I (var)</span>
            <span>{Q_from_VI ? Q_from_VI.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>|Q| = V² / X<sub>C</sub> (var)</span>
            <span>{Q_from_V ? Q_from_V.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>|Q| = I² · X<sub>C</sub> (var)</span>
            <span>{Q_from_I ? Q_from_I.toFixed(2) : "—"}</span>
          </li>
        </ul>
        <p className="calc-note">
          El signo de Q en un capacitor ideal sería negativo (potencia reactiva
          capacitiva). Aquí se muestran los módulos para comparación rápida.
        </p>
      </div>
    </section>
  );
};
