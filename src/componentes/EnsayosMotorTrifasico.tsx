import React, { useEffect } from "react";
import CalculadoraParametrosMotor from "./CalculadoraParametrosMotor";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const EnsayosMotorTrifasico: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="page-wrapper">
      <h1>Ensayos de motor de inducción trifásico</h1>

      <p>
        Resumen didáctico de un procedimiento simplificado para estimar
        parámetros del circuito equivalente a partir de mediciones de resistencia,
        ensayo en vacío y ensayo de rotor bloqueado.
      </p>

      <section className="formula-block-warning">
        <div className="tag">Seguridad</div>
        <p>
          El ensayo de rotor bloqueado implica inmovilizar el rotor y hacer
          circular una corriente importante. Debe realizarse únicamente con
          equipamiento, protecciones, instrumentación y procedimientos de
          laboratorio apropiados por personal competente. Esta página no es un
          procedimiento de ensayo de campo.
        </p>
      </section>

      <h2>1. Resistencia del estator R₁</h2>
      <section className="formula-block">
        <div className="tag">Qué se mide</div>
        <p>
          La resistencia de los devanados puede medirse con corriente continua.
          En un motor equilibrado, los valores equivalentes entre pares de bornes
          deben ser coherentes entre sí.
        </p>
        <p>
          La resistencia medida entre líneas no siempre es igual a la resistencia
          por fase del circuito equivalente. La conversión depende de cómo estén
          conectados los devanados durante la medición.
        </p>
        <ul>
          <li>
            <strong>Estrella equilibrada, neutro inaccesible:</strong>{" "}
            {"$R_{LL} \\approx 2R_1$"}, por lo que{" "}
            {"$R_1 \\approx R_{LL}/2$"}.
          </li>
          <li>
            <strong>Triángulo equilibrado:</strong> la resistencia vista entre
            dos líneas es la rama directa en paralelo con las otras dos ramas en
            serie, de modo que{" "}
            {"$R_{LL} \\approx 2R_1/3$"} y{" "}
            {"$R_1 \\approx 3R_{LL}/2$"}.
          </li>
          <li>
            Si cada devanado se mide de forma individual y aislada de la
            conexión, el valor medido puede utilizarse directamente como
            resistencia de fase, con las correcciones que requiera el método.
          </li>
        </ul>
        <p>
          Para ensayos de precisión también debe considerarse la temperatura del
          devanado, porque la resistencia del cobre cambia con la temperatura.
        </p>
      </section>

      <h2>2. Ensayo en vacío</h2>
      <section className="formula-block">
        <div className="tag">Datos medidos</div>
        <ul>
          <li>{"Tensión de línea: $V_L$"}</li>
          <li>{"Corriente de línea: $I_0$"}</li>
          <li>{"Potencia activa total trifásica: $P_0$"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Modelo usado por esta calculadora: estrella equilibrada</div>
        <Formula tex={String.raw`$$ V_\phi = \frac{V_L}{\sqrt{3}} $$`} />
        <Formula tex={String.raw`$$ I_\phi = I_0 $$`} />
        <p>
          Estas conversiones corresponden a conexión estrella. La calculadora
          incluida al final de la página utiliza explícitamente este supuesto y
          no debe emplearse directamente para una conexión triángulo sin adaptar
          las relaciones de fase.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Factor de potencia en vacío</div>
        <Formula
          tex={String.raw`$$ P_0 = 3\,V_\phi\,I_\phi\,\cos\varphi_0 $$`}
        />
        <Formula
          tex={String.raw`$$ \cos\varphi_0 =
\frac{P_0}{3\,V_\phi\,I_\phi} $$`}
        />
        <p>
          Los datos medidos deben cumplir P₀ ≤ √3·Vₗ·I₀. La calculadora ahora
          rechaza combinaciones que impliquen un factor de potencia físicamente
          imposible en este modelo.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Descomposición simplificada de corriente</div>
        <Formula tex={String.raw`$$ I_w = I_\phi\cos\varphi_0 $$`} />
        <Formula tex={String.raw`$$ I_m = I_\phi\sin\varphi_0 $$`} />
        <ul>
          <li>{"$I_w$ : componente activa del modelo simplificado"}</li>
          <li>{"$I_m$ : componente magnetizante del modelo simplificado"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Rama equivalente usada por la herramienta</div>
        <Formula
          tex={String.raw`$$
G_0 = \frac{I_w}{V_\phi},
\qquad
B_m = \frac{I_m}{V_\phi}
$$`}
        />
        <Formula
          tex={String.raw`$$
R_c = \frac{1}{G_0},
\qquad
X_m = \frac{1}{B_m}
$$`}
        />
        <p>
          En la calculadora de este proyecto, R<sub>c</sub> es un equivalente
          simplificado que absorbe la componente activa observada en vacío. No
          debe interpretarse como una medición pura y separada de pérdidas en el
          hierro: P₀ también incluye pérdidas mecánicas y pérdidas de cobre del
          estator.
        </p>
        <p>
          Una separación más rigurosa de pérdidas requiere ensayos y correcciones
          adicionales; por eso esta herramienta se presenta como estimación del
          circuito equivalente.
        </p>
      </section>

      <h2>3. Ensayo de rotor bloqueado</h2>
      <section className="formula-block">
        <div className="tag">Condición de ensayo</div>
        <ul>
          <li>Rotor inmovilizado.</li>
          <li>Se aplica tensión reducida.</li>
          <li>
            La tensión suele ajustarse para alcanzar la corriente objetivo del
            ensayo, frecuentemente próxima a la corriente nominal cuando el
            procedimiento así lo establece.
          </li>
          <li>{"Se miden $V_{L,LR}$, $I_{LR}$ y la potencia activa total $P_{LR}$."}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Conversión por fase: estrella equilibrada</div>
        <Formula
          tex={String.raw`$$ V_{\phi,LR} =
\frac{V_{L,LR}}{\sqrt{3}} $$`}
        />
        <Formula tex={String.raw`$$ I_{\phi,LR} = I_{LR} $$`} />
      </section>

      <section className="formula-block">
        <div className="tag">Factor de potencia</div>
        <Formula
          tex={String.raw`$$ P_{LR} =
3\,V_{\phi,LR}\,I_{\phi,LR}\,\cos\varphi_{LR} $$`}
        />
        <Formula
          tex={String.raw`$$ \cos\varphi_{LR} =
\frac{P_{LR}}
{3\,V_{\phi,LR}\,I_{\phi,LR}} $$`}
        />
      </section>

      <section className="formula-block">
        <div className="tag">Impedancia serie equivalente</div>
        <Formula
          tex={String.raw`$$ Z_{eq} =
\frac{V_{\phi,LR}}{I_{\phi,LR}} $$`}
        />
        <Formula
          tex={String.raw`$$
R_{eq} = Z_{eq}\cos\varphi_{LR},
\qquad
X_{eq} = Z_{eq}\sin\varphi_{LR}
$$`}
        />
        <p>
          Este tratamiento supone que, bajo la condición de rotor bloqueado y
          tensión reducida utilizada, la rama magnetizante puede despreciarse
          para obtener una aproximación de la impedancia serie.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Relación con parámetros referidos al estator</div>
        <Formula tex={String.raw`$$ R_{eq} \approx R_1 + R_2' $$`} />
        <Formula tex={String.raw`$$ X_{eq} \approx X_1 + X_2' $$`} />
      </section>

      <section className="formula-block">
        <div className="tag">Aproximaciones usadas por la calculadora</div>
        <Formula tex={String.raw`$$ R_2' \approx R_{eq} - R_1 $$`} />
        <Formula
          tex={String.raw`$$ X_1 \approx X_2' \approx \frac{X_{eq}}{2} $$`}
        />
        <p>
          Si no se ingresa R₁ medida, la herramienta reparte también R
          <sub>eq</sub> por mitades como aproximación inicial. Este reparto no es
          una identidad física universal.
        </p>
      </section>

      <CalculadoraParametrosMotor />
    </main>
  );
};

export default EnsayosMotorTrifasico;
