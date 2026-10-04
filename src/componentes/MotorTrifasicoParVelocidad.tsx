import React, { useEffect } from "react";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const MotorTrifasicoParVelocidad: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="page-wrapper">
      <h1>Motor de inducción trifásico: velocidad, deslizamiento y par</h1>

      <p>
        Relaciones básicas para comprender la velocidad del campo giratorio, el
        deslizamiento, la frecuencia de rotor y la diferencia entre par de eje y
        par electromagnético.
      </p>

      <h2>1. Velocidad síncrona</h2>
      <section className="formula-block">
        <div className="tag">Velocidad del campo giratorio</div>
        <Formula tex={String.raw`$$ n_s = \frac{120\,f}{N_p} $$`} />
        <ul>
          <li>{"$n_s$ : velocidad síncrona mecánica (rpm)"}</li>
          <li>{"$f$ : frecuencia eléctrica de alimentación (Hz)"}</li>
          <li>{"$N_p$ : número total de polos del motor"}</li>
        </ul>
        <p>
          Se usa Nₚ para el número de polos y así evitar confundirlo con el
          símbolo P de potencia.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Velocidad angular síncrona mecánica</div>
        <Formula tex={String.raw`$$ \omega_s = \frac{2\pi n_s}{60} $$`} />
        <ul>
          <li>{"$\\omega_s$ : velocidad angular mecánica del campo giratorio (rad/s)"}</li>
        </ul>
      </section>

      <h2>2. Deslizamiento</h2>
      <section className="formula-block">
        <div className="tag">Definición</div>
        <Formula tex={String.raw`$$ s = \frac{n_s - n}{n_s} $$`} />
        <ul>
          <li>{"$s$ : deslizamiento (adimensional)"}</li>
          <li>{"$n_s$ : velocidad síncrona (rpm)"}</li>
          <li>{"$n$ : velocidad mecánica del rotor (rpm)"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Interpretación del signo</div>
        <ul>
          <li>
            <strong>0 &lt; s &lt; 1:</strong> funcionamiento motor convencional,
            con el rotor por debajo de la velocidad síncrona.
          </li>
          <li>
            <strong>s = 1:</strong> rotor detenido.
          </li>
          <li>
            <strong>s = 0:</strong> rotor a velocidad síncrona; en el modelo
            ideal de inducción no hay frecuencia de rotor ni par electromagnético
            sostenido.
          </li>
          <li>
            <strong>s &lt; 0:</strong> la máquina puede operar en región
            generadora, con el rotor por encima de la velocidad síncrona.
          </li>
          <li>
            <strong>s &gt; 1:</strong> puede aparecer en ciertos regímenes de
            frenado o inversión; por eso 0 ≤ s ≤ 1 no es un rango universal de
            la máquina de inducción.
          </li>
        </ul>
      </section>

      <h2>3. Frecuencia eléctrica del rotor</h2>
      <section className="formula-block">
        <div className="tag">Funcionamiento motor convencional</div>
        <Formula tex={String.raw`$$ f_r = s\,f \qquad (s \ge 0) $$`} />
        <p>
          En forma general, la magnitud de la frecuencia de las corrientes de
          rotor es |s|·f. El signo del deslizamiento indica el régimen de
          operación, no una frecuencia física negativa.
        </p>
      </section>

      <h2>4. Par mecánico de eje a partir de la potencia de salida</h2>
      <section className="formula-block">
        <div className="tag">Par de eje</div>
        <Formula tex={String.raw`$$ T_{eje} = \frac{P_{out}}{\omega_m} $$`} />
        <ul>
          <li>{"$T_{eje}$ : par mecánico disponible en el eje (N·m)"}</li>
          <li>{"$P_{out}$ : potencia mecánica de salida (W)"}</li>
          <li>{"$\\omega_m$ : velocidad angular mecánica del rotor (rad/s)"}</li>
        </ul>
        <p>
          Esta relación no calcula directamente el par electromagnético interno
          si Pout representa la potencia útil de eje, porque entre la conversión
          electromagnética y el eje existen pérdidas mecánicas.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Velocidad angular del rotor</div>
        <Formula tex={String.raw`$$ \omega_m = \frac{2\pi n}{60} $$`} />
      </section>

      <section className="formula-block">
        <div className="tag">Fórmula práctica</div>
        <Formula
          tex={String.raw`$$ T_{eje}[\text{N·m}] \approx \frac{9550\,P_{out}[\text{kW}]}{n[\text{rpm}]} $$`}
        />
      </section>

      <h2>5. Par electromagnético mediante el equivalente de Thévenin</h2>
      <p>
        Para estudiar el par interno de una máquina de inducción puede reducirse
        la red del estator y la rama de magnetización a un equivalente de
        Thévenin visto desde el rotor. Los parámetros del rotor se consideran
        referidos al estator.
      </p>

      <section className="formula-block">
        <div className="tag">Par electromagnético</div>
        <Formula
          tex={String.raw`$$
T_e(s) =
\frac{
  3\,|V_{th}|^2\,\dfrac{R_2'}{s}
}{
  \omega_s
  \left[
    \left(R_{th}+\dfrac{R_2'}{s}\right)^2
    +\left(X_{th}+X_2'\right)^2
  \right]
}
$$`}
        />
        <ul>
          <li>{"$T_e(s)$ : par electromagnético (N·m)"}</li>
          <li>{"$V_{th}$ : tensión eficaz de Thévenin por fase (V)"}</li>
          <li>{"$R_{th}, X_{th}$ : parámetros de Thévenin del estator y rama magnetizante"}</li>
          <li>{"$R_2', X_2'$ : parámetros del rotor referidos al estator"}</li>
          <li>{"$\\omega_s$ : velocidad angular síncrona mecánica (rad/s)"}</li>
          <li>{"$s$ : deslizamiento; la expresión requiere tratar con cuidado el límite $s\\to0$"}</li>
        </ul>
      </section>

      <h2>6. Par máximo o de ruptura</h2>
      <p>
        En la región motora, la curva par–velocidad alcanza un máximo antes de
        la zona de bajo deslizamiento. Este valor sirve para evaluar el margen
        entre el punto de operación y la pérdida de estabilidad de velocidad
        ante un aumento de carga.
      </p>

      <section className="formula-block">
        <div className="tag">Deslizamiento del máximo en región motora</div>
        <Formula
          tex={String.raw`$$ s_{max} =
\frac{R_2'}{\sqrt{R_{th}^2+(X_{th}+X_2')^2}} $$`}
        />
      </section>

      <section className="formula-block">
        <div className="tag">Magnitud del par máximo</div>
        <Formula
          tex={String.raw`$$
T_{max} =
\frac{
  3\,|V_{th}|^2
}{
  2\,\omega_s
  \left[
    R_{th}
    +\sqrt{R_{th}^2+(X_{th}+X_2')^2}
  \right]
}
$$`}
        />
      </section>

      <section className="formula-block">
        <div className="tag">Nota de modelo</div>
        <p>
          Estas expresiones corresponden al circuito equivalente estacionario
          clásico. Saturación, variación de parámetros con frecuencia y
          temperatura, efecto pelicular, armónicos y control mediante variador
          pueden requerir modelos más detallados.
        </p>
      </section>
    </main>
  );
};

export default MotorTrifasicoParVelocidad;
