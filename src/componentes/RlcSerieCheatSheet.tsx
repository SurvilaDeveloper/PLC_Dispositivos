// src/componentes/RlcSerieCheatSheet.tsx
import React, { useEffect, useState } from "react";
import "./rlcSerieCheatSheet.css";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

// Helper para fórmulas en bloque (MathJax se encarga del render)
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const RlcSerieCheatSheet: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="rlc-body">
      <h1>R–L–C en serie: impedancia, fasores y potencias</h1>

      <p>
        Resumen de las ecuaciones básicas para un circuito R–L–C en serie en
        régimen sinusoidal (AC), junto con una calculadora práctica para
        combinar las tres impedancias.
      </p>

      {/* 1. Impedancias individuales */}
      <h2>1. Impedancias de cada elemento</h2>
      <section className="formula-block">
        <div className="tag">Resistencia</div>
        <Formula tex={String.raw`$$ Z_R = R $$`} />
        <ul>
          <li>{"$R$ : resistencia (\\Omega)"}</li>
          <li>{"$Z_R$ : impedancia puramente resistiva"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Inductor</div>
        <Formula tex={String.raw`$$ Z_L = j\,\omega L $$`} />
        <ul>
          <li>{"$L$ : inductancia (H)"}</li>
          <li>{"$\\omega = 2\\pi f$ : pulsación (rad/s)"}</li>
          <li>{"$Z_L$ : impedancia puramente inductiva"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Capacitor</div>
        <Formula
          tex={String.raw`$$ Z_C = \dfrac{1}{j\,\omega C} = -\,j\,\dfrac{1}{\omega C} $$`}
        />
        <ul>
          <li>{"$C$ : capacitancia (F)"}</li>
          <li>{"$Z_C$ : impedancia puramente capacitiva"}</li>
        </ul>
      </section>

      {/* 2. Impedancia total en serie */}
      <h2>2. Impedancia total del circuito R–L–C en serie</h2>
      <section className="formula-block">
        <div className="tag">Suma fasorial de impedancias</div>
        <Formula
          tex={String.raw`$$ Z_{tot} = Z_R + Z_L + Z_C = R + j\omega L + \dfrac{1}{j\,\omega C} $$`}
        />
        <Formula
          tex={String.raw`$$ Z_{tot} = R + j\left(\omega L - \dfrac{1}{\omega C}\right) $$`}
        />
        <p>
          Parte real: la resistencia. Parte imaginaria: la diferencia entre
          reactancia inductiva y capacitiva.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Módulo y ángulo de la impedancia</div>
        <Formula
          tex={String.raw`$$ X_L = \omega L,\qquad X_C = \dfrac{1}{\omega C} $$`}
        />
        <Formula
          tex={String.raw`$$ Z_{tot} = R + j(X_L - X_C) $$`}
        />
        <Formula
          tex={String.raw`$$ |Z_{tot}| = \sqrt{R^2 + (X_L - X_C)^2} $$`}
        />
        <Formula
          tex={String.raw`$$ \varphi = \arctan\left(\dfrac{X_L - X_C}{R}\right) $$`}
        />
        <ul>
          <li>{"$\\varphi > 0$ : circuito de comportamiento inductivo"}</li>
          <li>{"$\\varphi < 0$ : circuito de comportamiento capacitivo"}</li>
          <li>{"$\\varphi = 0$ : resonancia (reactancias se cancelan)"}</li>
        </ul>
      </section>

      {/* 3. Corriente y tensiones fasoriales */}
      <h2>3. Corriente y tensiones en R–L–C serie (fasores)</h2>
      <section className="formula-block">
        <div className="tag">Corriente del circuito</div>
        <Formula
          tex={String.raw`$$ \vec{I} = \dfrac{\vec{V}}{Z_{tot}} $$`}
        />
        <p>
          En un circuito serie, la corriente es la misma en los tres elementos y
          se toma como referencia en el diagrama fasorial.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Tensiones en cada rama</div>
        <Formula tex={String.raw`$$ \vec{V}_R = \vec{I}\,R $$`} />
        <Formula tex={String.raw`$$ \vec{V}_L = \vec{I}\,j X_L $$`} />
        <Formula tex={String.raw`$$ \vec{V}_C = \vec{I}\,(-j X_C) $$`} />
        <p>
          En el diagrama de fasores:
        </p>
        <ul>
          <li>
            {"$\\vec{V}_R$ está en fase con $\\vec{I}$ (eje horizontal)."}
          </li>
          <li>
            {"$\\vec{V}_L$ está $90^{\\circ}$ adelantada respecto de $\\vec{I}$ (hacia arriba)."}
          </li>
          <li>
            {"$\\vec{V}_C$ está $90^{\\circ}$ atrasada respecto de $\\vec{I}$ (hacia abajo)."}
          </li>
          <li>
            {
              "$\\vec{V}$ total es la suma fasorial de $\\vec{V}_R$, $\\vec{V}_L$ y $\\vec{V}_C$."
            }
          </li>
        </ul>
      </section>

      {/* 4. Potencias en R–L–C serie */}
      <h2>4. Potencias y factor de potencia</h2>
      <section className="formula-block">
        <div className="tag">Potencia aparente</div>
        <Formula
          tex={String.raw`$$ S = V_\text{rms} I_\text{rms} $$`}
        />
        <p>{"$S$ se mide en volt-ampere (VA)."}</p>
      </section>

      <section className="formula-block">
        <div className="tag">Potencia activa</div>
        <Formula
          tex={String.raw`$$ P = V_\text{rms} I_\text{rms} \cos\varphi = I_\text{rms}^2\,R $$`}
        />
        <p>{"$P$ se disipa solo en la resistencia y se mide en watt (W)."} </p>
      </section>

      <section className="formula-block">
        <div className="tag">Potencia reactiva</div>
        <Formula
          tex={String.raw`$$ Q = V_\text{rms} I_\text{rms} \sin\varphi $$`}
        />
        <Formula
          tex={String.raw`$$ Q = I_\text{rms}^2 (X_L - X_C) $$`}
        />
        <ul>
          <li>{"$Q > 0$ : potencia reactiva inductiva (circuito inductivo)"}</li>
          <li>{"$Q < 0$ : potencia reactiva capacitiva (circuito capacitivo)"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Factor de potencia</div>
        <Formula
          tex={String.raw`$$ \cos\varphi = \dfrac{P}{S} $$`}
        />
        <p>
          El factor de potencia indica cuán “cerca” está el circuito de ser
          puramente resistivo: $\\cos\\varphi = 1$ es el caso ideal sin potencia
          reactiva.
        </p>
      </section>

      {/* 5. Calculadora práctica */}
      <h2>5. Calculadora R–L–C serie (AC)</h2>
      <RlcSerieCalculator />
    </main>
  );
};

export default RlcSerieCheatSheet;

/* ============================
   CALCULADORA
   ============================ */

const RlcSerieCalculator: React.FC = () => {
  // R en ohm, L en mH, C en µF, f en Hz, V en RMS
  const [Rohm, setRohm] = useState<string>("10");
  const [LmH, setLmH] = useState<string>("10");
  const [CuF, setCuF] = useState<string>("10");
  const [freq, setFreq] = useState<string>("50");
  const [Vrms, setVrms] = useState<string>("220");

  const R = parseFloat(Rohm) || 0;
  const L = parseFloat(LmH) * 1e-3 || 0; // mH → H
  const C = parseFloat(CuF) * 1e-6 || 0; // µF → F
  const f = parseFloat(freq) || 0;
  const V = parseFloat(Vrms) || 0;

  const omega = f > 0 ? 2 * Math.PI * f : 0;
  const XL = omega * L;
  const XC = omega > 0 && C > 0 ? 1 / (omega * C) : 0;

  const X = XL - XC; // parte imaginaria total
  const Zmod = Math.sqrt(R * R + X * X); // |Z|
  const phi = Math.atan2(X, R); // radianes
  const phi_deg = (phi * 180) / Math.PI;

  const I = Zmod > 0 ? V / Zmod : 0;
  const S = V * I; // VA
  const P = I * I * R; // W
  const Q = I * I * X; // var (signo indica inductivo/capacitivo)
  const fp = Zmod > 0 ? R / Zmod : 0; // cos φ

  let tipoComportamiento = "Puro resistivo";
  if (X > 1e-9) tipoComportamiento = "Inductivo";
  else if (X < -1e-9) tipoComportamiento = "Capacitivo";

  return (
    <section className="rlc-calc">
      <p>
        Ingresá R, L, C, frecuencia y tensión RMS. La calculadora asume un
        circuito R–L–C en serie y calcula la impedancia total, la corriente y
        las potencias.
      </p>

      <div className="rlc-calc-grid">
        <label>
          R (Ω)
          <input
            type="number"
            value={Rohm}
            onChange={(e) => setRohm(e.target.value)}
            min={0}
            step={0.1}
          />
        </label>

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
      </div>

      <div className="rlc-calc-results">
        <h3>Resultados</h3>
        <ul>
          <li>
            <span>ω (rad/s)</span>
            <span>{omega ? omega.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>
              X<sub>L</sub> (Ω)
            </span>
            <span>{XL ? XL.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>
              X<sub>C</sub> (Ω)
            </span>
            <span>{XC ? XC.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>
              X<sub>L</sub> − X<sub>C</sub> (Ω)
            </span>
            <span>{X ? X.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>|Z| (Ω)</span>
            <span>{Zmod ? Zmod.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>φ (grados)</span>
            <span>{Zmod ? phi_deg.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>I<sub>rms</sub> (A)</span>
            <span>{I ? I.toFixed(3) : "—"}</span>
          </li>
          <li>
            <span>P (W)</span>
            <span>{P ? P.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>Q (var)</span>
            <span>{Q ? Q.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>S (VA)</span>
            <span>{S ? S.toFixed(2) : "—"}</span>
          </li>
          <li>
            <span>Factor de potencia cos φ</span>
            <span>{Zmod ? fp.toFixed(3) : "—"}</span>
          </li>
          <li>
            <span>Comportamiento</span>
            <span>{tipoComportamiento}</span>
          </li>
        </ul>
        <p className="rlc-calc-note">
          Q &gt; 0 indica predominio inductivo, Q &lt; 0 indica predominio
          capacitivo. En resonancia ideal se cumple X<sub>L</sub> = X<sub>C</sub>{" "}
          y el circuito se comporta como puramente resistivo.
        </p>
      </div>
    </section>
  );
};
