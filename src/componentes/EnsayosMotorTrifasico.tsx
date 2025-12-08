import React, { useEffect } from "react";
import "./potenciaMotorTrifasico.css";
import CalculadoraParametrosMotor from "./CalculadoraParametrosMotor";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

// Helper para fórmulas en bloque
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const EnsayosMotorTrifasico: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="pm-body">
      <h1>Chuleta de ensayos de motor de inducción trifásico</h1>

      <p>
        {
          "Resumen de fórmulas típicas para obtener los parámetros del circuito equivalente de un motor de inducción trifásico a partir de ensayos de laboratorio."
        }
      </p>

      {/* 1. Medición de resistencia de estator */}
      <h2>1. Medición de resistencia de estator (R₁)</h2>
      <section className="formula-block">
        <div className="tag">Resistencia de bobinados</div>
        <p>
          {
            "Se mide con ohmímetro o con corriente continua entre bornes de fase. Suponiendo motor equilibrado, las tres resistencias entre fases deben ser similares."
          }
        </p>
        <ul>
          <li>
            {
              "Si se mide resistencia por fase directamente, se toma esa resistencia como aproximación de $R_1$ (resistencia de estator por fase)."
            }
          </li>
        </ul>
      </section>

      {/* 2. Ensayo en vacío */}
      <h2>2. Ensayo en vacío (no–load test)</h2>
      <section className="formula-block">
        <div className="tag">Datos medidos</div>
        <ul>
          <li>{"Tensión de línea en vacío: $V_L$"}</li>
          <li>{"Corriente de línea en vacío: $I_0$"}</li>
          <li>{"Potencia total en vacío (tres fases): $P_0$"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Tensión y corriente de fase</div>
        <Formula
          tex={String.raw`$$ V_\phi = \frac{V_L}{\sqrt{3}} $$`}
        />
        <Formula
          tex={String.raw`$$ I_\phi = I_0 $$`}
        />
        <ul>
          <li>{"Ensayo en sistema trifásico equilibrado, conexión en estrella."}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Factor de potencia en vacío</div>
        <Formula
          tex={String.raw`$$ P_0 = 3 \, V_\phi \, I_\phi \, \cos\varphi_0 $$`}
        />
        <Formula
          tex={String.raw`$$ \cos\varphi_0 = \frac{P_0}{3 \, V_\phi \, I_\phi} $$`}
        />
        <ul>
          <li>{"$\\varphi_0$ : ángulo de desfase en el ensayo en vacío."}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Descomposición de la corriente</div>
        <Formula
          tex={String.raw`$$ I_w = I_\phi \cos\varphi_0 $$`}
        />
        <Formula
          tex={String.raw`$$ I_m = I_\phi \sin\varphi_0 $$`}
        />
        <ul>
          <li>{"$I_w$ : componente activa (pérdidas en hierro, mecánicas)."} </li>
          <li>{"$I_m$ : componente magnetizante (flujo principal)."} </li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Rama de magnetización</div>
        <Formula
          tex={String.raw`$$ G_0 = \frac{I_w}{V_\phi}, \qquad B_m = \frac{I_m}{V_\phi} $$`}
        />
        <Formula
          tex={String.raw`$$ R_c = \frac{1}{G_0}, \qquad X_m = \frac{1}{B_m} $$`}
        />
        <ul>
          <li>{"$R_c$ : resistencia equivalente de pérdidas en el núcleo (pérdidas en hierro + mecánicas)."} </li>
          <li>{"$X_m$ : reactancia de magnetización."}</li>
        </ul>
      </section>

      {/* 3. Ensayo de rotor bloqueado */}
      <h2>3. Ensayo de rotor bloqueado (locked–rotor test)</h2>
      <section className="formula-block">
        <div className="tag">Datos medidos</div>
        <ul>
          <li>{"Rotor inmovilizado, tensión reducida."}</li>
          <li>{"Tensión de línea en el ensayo: $V_{L,LR}$"}</li>
          <li>{"Corriente de línea: $I_{LR}$ (ajustada igual a la nominal)."} </li>
          <li>{"Potencia total medida: $P_{LR}$"} </li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Tensión y corriente de fase</div>
        <Formula
          tex={String.raw`$$ V_{\phi,LR} = \frac{V_{L,LR}}{\sqrt{3}} $$`}
        />
        <Formula
          tex={String.raw`$$ I_{\phi,LR} = I_{LR} $$`}
        />
      </section>

      <section className="formula-block">
        <div className="tag">Factor de potencia en rotor bloqueado</div>
        <Formula
          tex={String.raw`$$ P_{LR} = 3 \, V_{\phi,LR} \, I_{\phi,LR} \, \cos\varphi_{LR} $$`}
        />
        <Formula
          tex={String.raw`$$ \cos\varphi_{LR} = \frac{P_{LR}}{3 \, V_{\phi,LR} \, I_{\phi,LR}} $$`}
        />
      </section>

      <section className="formula-block">
        <div className="tag">Impedancia equivalente por fase</div>
        <Formula
          tex={String.raw`$$ Z_{eq} = \frac{V_{\phi,LR}}{I_{\phi,LR}} $$`}
        />
        <Formula
          tex={String.raw`$$ R_{eq} = Z_{eq} \cos\varphi_{LR}, \qquad X_{eq} = Z_{eq} \sin\varphi_{LR} $$`}
        />
        <ul>
          <li>{"$Z_{eq}$ : impedancia equivalente por fase en rotor bloqueado."}</li>
          <li>{"$R_{eq}$ : parte resistiva equivalente."}</li>
          <li>{"$X_{eq}$ : parte reactiva equivalente."}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Relación con parámetros del circuito equivalente</div>
        <Formula
          tex={String.raw`$$ R_{eq} \approx R_1 + R_2' $$`}
        />
        <Formula
          tex={String.raw`$$ X_{eq} \approx X_1 + X_2' $$`}
        />
        <ul>
          <li>{"$R_1$ : resistencia de estator por fase."}</li>
          <li>{"$R_2'$ : resistencia de rotor referida al estator."}</li>
          <li>{"$X_1$ : reactancia de dispersión de estator."}</li>
          <li>{"$X_2'$ : reactancia de dispersión de rotor referida al estator."}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Aproximaciones prácticas</div>
        <Formula
          tex={String.raw`$$ R_2' \approx R_{eq} - R_1 $$`}
        />
        <Formula
          tex={String.raw`$$ X_1 \approx X_2' \approx \frac{X_{eq}}{2} $$`}
        />
        <ul>
          <li>{"Se asume reparto aproximadamente simétrico de la reactancia de dispersión entre estator y rotor."}</li>
        </ul>
      </section>
        <CalculadoraParametrosMotor />
    </main>
  );
};

export default EnsayosMotorTrifasico;
