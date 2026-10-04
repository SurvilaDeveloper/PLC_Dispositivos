import React, { useEffect } from "react";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const PotenciaMotorTrifasico: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="page-wrapper">
      <h1>Potencia en motores trifásicos</h1>

      <p>
        Resumen de relaciones útiles para un sistema trifásico equilibrado en
        régimen sinusoidal y para la potencia mecánica disponible en el eje.
      </p>

      <section className="formula-block">
        <div className="tag">Alcance</div>
        <p>
          Las expresiones con cos φ y el triángulo P–Q–S de esta hoja suponen
          tensión y corriente sinusoidales. Con armónicos, el factor de potencia
          total sigue siendo P/S, pero puede diferir del coseno del ángulo de la
          componente fundamental.
        </p>
      </section>

      <h2>1. Potencia activa eléctrica de entrada</h2>
      <section className="formula-block">
        <div className="tag">Sistema trifásico equilibrado</div>
        <Formula
          tex={String.raw`$$ P_{in} = \sqrt{3}\, V_L\, I_L\, \cos\varphi $$`}
        />
        <ul>
          <li>{"$P_{in}$ : potencia activa eléctrica absorbida (W o kW)"}</li>
          <li>{"$V_L$ : tensión eficaz de línea (V)"}</li>
          <li>{"$I_L$ : corriente eficaz de línea (A)"}</li>
          <li>{"$\\varphi$ : ángulo de desplazamiento entre tensión y corriente, en el caso sinusoidal"}</li>
        </ul>
      </section>

      <h2>2. Potencia aparente</h2>
      <section className="formula-block">
        <div className="tag">Potencia aparente</div>
        <Formula tex={String.raw`$$ S = \sqrt{3}\, V_L\, I_L $$`} />
        <ul>
          <li>{"$S$ : potencia aparente (VA o kVA)"}</li>
        </ul>
      </section>

      <h2>3. Potencia reactiva</h2>
      <section className="formula-block">
        <div className="tag">Régimen sinusoidal</div>
        <Formula
          tex={String.raw`$$ Q = \sqrt{3}\, V_L\, I_L\, \sin\varphi $$`}
        />
        <ul>
          <li>{"$Q$ : potencia reactiva (var o kvar)"}</li>
          <li>
            Esta relación simple corresponde al modelo sinusoidal equilibrado.
          </li>
        </ul>
      </section>

      <h2>4. Relación entre S, P y Q</h2>
      <section className="formula-block">
        <div className="tag">Triángulo de potencias</div>
        <Formula tex={String.raw`$$ S^2 = P^2 + Q^2 $$`} />
        <p>
          Esta representación es válida para el caso sinusoidal considerado en
          esta hoja. Con distorsión armónica, la potencia aparente total no queda
          descripta únicamente por ese triángulo.
        </p>
      </section>

      <h2>5. Factor de potencia</h2>
      <section className="formula-block">
        <div className="tag">Definición general y caso sinusoidal</div>
        <Formula tex={String.raw`$$ PF = \frac{P}{S} $$`} />
        <Formula
          tex={String.raw`$$ \text{si las ondas son sinusoidales:}\qquad PF = \cos\varphi $$`}
        />
        <p>
          El factor de potencia no es el rendimiento del motor: describe cuánto
          de la potencia aparente corresponde a potencia activa.
        </p>
      </section>

      <h2>6. Potencia mecánica de salida</h2>

      <h3>6.1. Potencia de eje</h3>
      <section className="formula-block">
        <div className="tag">Potencia mecánica</div>
        <Formula tex={String.raw`$$ P_{out} = T_{eje}\, \omega_m $$`} />
        <ul>
          <li>{"$P_{out}$ : potencia mecánica entregada en el eje (W)"}</li>
          <li>{"$T_{eje}$ : par mecánico de eje (N·m)"}</li>
          <li>{"$\\omega_m$ : velocidad angular mecánica del rotor (rad/s)"}</li>
        </ul>
      </section>

      <h3>6.2. Conversión rpm → rad/s</h3>
      <section className="formula-block">
        <div className="tag">Velocidad angular</div>
        <Formula tex={String.raw`$$ \omega_m = \frac{2\pi n}{60} $$`} />
        <ul>
          <li>{"$n$ : velocidad mecánica del eje (rpm)"}</li>
        </ul>
      </section>

      <h3>6.3. Fórmula práctica de potencia de eje</h3>
      <section className="formula-block">
        <div className="tag">kW, N·m y rpm</div>
        <Formula
          tex={String.raw`$$ P_{out}[\text{kW}] \approx \frac{T_{eje}[\text{N·m}]\, n[\text{rpm}]}{9550} $$`}
        />
        <p>
          El factor 9550 es una aproximación práctica derivada de la conversión
          entre rpm y rad/s.
        </p>
      </section>

      <h2>7. Rendimiento del motor</h2>
      <section className="formula-block">
        <div className="tag">Entrada eléctrica → salida mecánica</div>
        <Formula tex={String.raw`$$ \eta = \frac{P_{out}}{P_{in}} $$`} />
        <Formula
          tex={String.raw`$$ \eta[\%] = \frac{P_{out}}{P_{in}}\,100 $$`}
        />
        <ul>
          <li>
            {"$P_{in}$ es potencia activa eléctrica de entrada, no potencia aparente $S$."}
          </li>
          <li>
            {"$P_{out}$ es la potencia mecánica útil disponible en el eje."}
          </li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Relación útil</div>
        <Formula
          tex={String.raw`$$ P_{out} = \eta\,\sqrt{3}\,V_L\,I_L\,\cos\varphi $$`}
        />
        <p>
          Esta forma combina las relaciones anteriores para un motor trifásico
          equilibrado alimentado con ondas aproximadamente sinusoidales.
        </p>
      </section>
    </main>
  );
};

export default PotenciaMotorTrifasico;
