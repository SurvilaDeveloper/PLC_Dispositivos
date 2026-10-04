import React, { useEffect } from "react";
import TrianguloPotenciasSVG from "./TrianguloPotenciaSVG";
import CosenoPhiInteractive from "./CosenoPhiInteractive";
import CalculadoraTrifasica from "./CalculadoraTrifasica";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const CosenoPhi: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="page-wrapper">
      <h1>Factor de potencia y cos&nbsp;φ</h1>

      <p>
        El factor de potencia relaciona la potencia activa con la potencia
        aparente. No es una medida de eficiencia de conversión de energía.
      </p>

      <section className="formula-block">
        <div className="tag">Distinción importante</div>
        <Formula tex={String.raw`$$ PF = \frac{P}{S} $$`} />
        <p>
          Si tensión y corriente son sinusoidales, el factor de potencia coincide
          con el factor de desplazamiento:
        </p>
        <Formula tex={String.raw`$$ PF = \cos\varphi $$`} />
        <p>
          Con cargas no lineales y armónicos, el factor de potencia total también
          incluye el efecto de la distorsión y puede ser menor que cos φ de la
          componente fundamental.
        </p>
      </section>

      <TrianguloPotenciasSVG />

      <h2>1. Triángulo de potencias</h2>
      <section className="formula-block">
        <div className="tag">Modelo sinusoidal</div>
        <Formula tex={String.raw`$$ S^2 = P^2 + Q^2 $$`} />
        <Formula
          tex={String.raw`$$
PF = \cos\varphi = \frac{P}{S},
\qquad
\sin\varphi = \frac{Q}{S},
\qquad
\tan\varphi = \frac{Q}{P}
$$`}
        />
        <ul>
          <li>{"$P$ : potencia activa (W o kW)"}</li>
          <li>{"$Q$ : potencia reactiva (var o kvar)"}</li>
          <li>{"$S$ : potencia aparente (VA o kVA)"}</li>
        </ul>
        <p>
          El triángulo P–Q–S de esta sección supone régimen sinusoidal. No debe
          utilizarse sin más para representar toda la potencia aparente de una
          carga fuertemente distorsionante.
        </p>
      </section>

      <h2>2. Interpretación física</h2>
      <section className="formula-block">
        <div className="tag">Corriente para una potencia activa dada</div>
        <p>
          En un sistema con tensión fija, un factor de potencia menor exige mayor
          corriente RMS para transferir la misma potencia activa. Esa mayor
          corriente puede aumentar pérdidas I²R y caída de tensión en la red.
        </p>
        <p>
          Un factor de potencia bajo no significa por sí mismo que la carga
          consuma más energía activa: describe cómo se relacionan potencia activa,
          potencia aparente y corriente.
        </p>
      </section>

      <h2>3. Potencias en un sistema trifásico equilibrado</h2>
      <section className="formula-block">
        <div className="tag">Régimen sinusoidal</div>
        <Formula
          tex={String.raw`$$ P = \sqrt{3}\,V_L\,I_L\,\cos\varphi $$`}
        />
        <Formula tex={String.raw`$$ S = \sqrt{3}\,V_L\,I_L $$`} />
        <Formula
          tex={String.raw`$$ Q = \sqrt{3}\,V_L\,I_L\,\sin\varphi $$`}
        />
        <ul>
          <li>{"$V_L$ : tensión eficaz de línea (V)"}</li>
          <li>{"$I_L$ : corriente eficaz de línea (A)"}</li>
        </ul>
      </section>

      <h2>4. Cargas inductivas y capacitivas</h2>
      <section className="formula-block">
        <div className="tag">Desplazamiento</div>
        <ul>
          <li>
            En una carga inductiva idealizada, la corriente fundamental se atrasa
            respecto de la tensión.
          </li>
          <li>
            En una carga capacitiva idealizada, la corriente fundamental se
            adelanta respecto de la tensión.
          </li>
          <li>
            El signo y la convención de Q deben mantenerse coherentes en todo el
            cálculo.
          </li>
        </ul>
      </section>

      <h2>5. Corrección del factor de desplazamiento</h2>
      <p>
        Los bancos de capacitores se utilizan habitualmente para compensar
        potencia reactiva inductiva. La relación simple siguiente supone régimen
        sinusoidal y una potencia activa aproximadamente constante.
      </p>

      <section className="formula-block">
        <div className="tag">Potencia reactiva a compensar</div>
        <Formula
          tex={String.raw`$$ Q_1 = P\tan\varphi_1,
\qquad
Q_2 = P\tan\varphi_2 $$`}
        />
        <Formula tex={String.raw`$$ Q_c = Q_1 - Q_2 $$`} />
        <ul>
          <li>{"$Q_c$ : potencia reactiva capacitiva requerida por el modelo"}</li>
          <li>
            En instalaciones con armónicos, la selección del banco debe considerar
            resonancia, corrientes armónicas y posible necesidad de reactores o
            filtrado; no basta con aplicar esta fórmula.
          </li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Capacitor monofásico ideal</div>
        <Formula tex={String.raw`$$ Q_c = \omega C V^2 $$`} />
        <ul>
          <li>{"$C$ : capacitancia (F)"}</li>
          <li>{"$V$ : tensión eficaz aplicada al capacitor (V)"}</li>
          <li>{"$\\omega = 2\\pi f$ : pulsación eléctrica (rad/s)"}</li>
        </ul>
      </section>

      <h2>6. Qué mirar en un motor</h2>
      <section className="formula-block">
        <div className="tag">Placa y punto de operación</div>
        <ul>
          <li>
            El factor de potencia de un motor depende de su diseño y del punto de
            carga; no conviene asumir un único “valor típico” para todos los motores.
          </li>
          <li>
            Para cálculos reales deben usarse los datos de placa, documentación del
            fabricante o mediciones correspondientes al punto de funcionamiento.
          </li>
          <li>
            El rendimiento η y el factor de potencia PF son magnitudes diferentes.
          </li>
        </ul>
      </section>

      <h2>Demo interactiva idealizada</h2>
      <CosenoPhiInteractive />

      <CalculadoraTrifasica />
    </main>
  );
};

export default CosenoPhi;
