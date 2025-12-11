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

// Helper para fórmulas en bloque
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const CosenoPhi: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="page-wrapper">
      <h1>Factor de Potencia: cos&nbsp;φ</h1>

      <p>
        {
          "En sistemas de corriente alterna (AC), el factor de potencia es una medida de qué tan eficientemente se transforma la potencia eléctrica en potencia útil. Se lo representa como $\\cos\\varphi$."
        }
      </p>

      <TrianguloPotenciasSVG />

      {/* 1. Definición básica */}
      <h2>1. Definición de factor de potencia</h2>
      <section className="formula-block">
        <div className="tag">Definición</div>
        <Formula
          tex={String.raw`$$ \cos\varphi = \frac{P}{S} $$`}
        />
        <ul>
          <li>{"$P$ : potencia activa (W o kW)"}</li>
          <li>{"$S$ : potencia aparente (VA o kVA)"}</li>
          <li>{"$\\cos\\varphi$ : factor de potencia (adimensional, entre 0 y 1)"}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Triángulo de potencias</div>
        <Formula
          tex={String.raw`$$ S^2 = P^2 + Q^2 $$`}
        />
        <ul>
          <li>{"$Q$ : potencia reactiva (VAr o kVAr)"}</li>
          <li>{"$S$ : hipotenusa del triángulo, $P$ : cateto adyacente, $Q$ : cateto opuesto"}</li>
          <li>{"En el triángulo, $\\cos\\varphi = \\dfrac{P}{S}$ y $\\sin\\varphi = \\dfrac{Q}{S}$."}</li>
        </ul>
      </section>

      {/* 2. Interpretación física */}
      <h2>2. Interpretación física</h2>
      <section className="formula-block">
        <div className="tag">Rango típico</div>
        <Formula
          tex={String.raw`$$ 0 \leq \cos\varphi \leq 1 $$`}
        />
        <ul>
          <li>{"$\\cos\\varphi \\approx 1$ : casi toda la potencia es activa (muy buen factor de potencia)."} </li>
          <li>{"$\\cos\\varphi$ bajo (por ejemplo 0,6–0,7) : mucha potencia reactiva circulando, más corriente para la misma $P$."}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Relación con P, Q y S</div>
        <Formula
          tex={String.raw`$$
\cos\varphi = \frac{P}{S}, 
\qquad
\sin\varphi = \frac{Q}{S},
\qquad
\tan\varphi = \frac{Q}{P}
$$`}
        />
        <ul>
          <li>{"$\\varphi$ : ángulo de desfase entre tensión y corriente."}</li>
          <li>{"Si la carga es inductiva (motores, transformadores), la corriente se atrasa: $\\varphi > 0$ y el factor de potencia es inductivo."}</li>
          <li>{"Si la carga es capacitiva, la corriente se adelanta: factor de potencia capacitivo."}</li>
        </ul>
      </section>

      {/* 3. Cálculo a partir de V, I y φ */}
      <h2>3. Cálculo de potencias con cos&nbsp;φ</h2>
      <section className="formula-block">
        <div className="tag">Sistema trifásico equilibrado</div>
        <Formula
          tex={String.raw`$$ P = \sqrt{3} \cdot V_L \cdot I_L \cdot \cos\varphi $$`}
        />
        <Formula
          tex={String.raw`$$ S = \sqrt{3} \cdot V_L \cdot I_L $$`}
        />
        <Formula
          tex={String.raw`$$ Q = \sqrt{3} \cdot V_L \cdot I_L \cdot \sin\varphi $$`}
        />
        <ul>
          <li>{"$V_L$ : tensión de línea (V)"}</li>
          <li>{"$I_L$ : corriente de línea (A)"}</li>
          <li>{"$\\cos\\varphi$ permite pasar de $S$ a $P$ y de $S$ a $Q$."}</li>
        </ul>
      </section>

      {/* 4. Corrección del factor de potencia */}
      <h2>4. Corrección del factor de potencia</h2>
      <p>
        {
          "En instalaciones industriales se suele instalar bancos de capacitores para corregir el factor de potencia de un valor inicial $\\cos\\varphi_1$ a un valor deseado $\\cos\\varphi_2$ más cercano a 1."
        }
      </p>

      <section className="formula-block">
        <div className="tag">Potencia reactiva a compensar</div>
        <Formula
          tex={String.raw`$$ Q_1 = P \tan\varphi_1, \qquad Q_2 = P \tan\varphi_2 $$`}
        />
        <Formula
          tex={String.raw`$$ Q_c = Q_1 - Q_2 $$`}
        />
        <ul>
          <li>{"$Q_1$ : potencia reactiva antes de la corrección."}</li>
          <li>{"$Q_2$ : potencia reactiva después de la corrección."}</li>
          <li>{"$Q_c$ : potencia reactiva que debe suministrar el banco de capacitores."}</li>
        </ul>
      </section>

      <section className="formula-block">
        <div className="tag">Capacitancia equivalente (monofásico)</div>
        <Formula
          tex={String.raw`$$ Q_c = \omega \, C \, V^2 $$`}
        />
        <ul>
          <li>{"$C$ : capacitancia equivalente (F)"}</li>
          <li>{"$V$ : tensión (V)"}</li>
          <li>{"$\\omega = 2\\pi f$ : pulsación (rad/s)"}</li>
        </ul>
      </section>

      {/* 5. Resumen práctico */}
      <h2>5. Resumen práctico</h2>
      <section className="formula-block">
        <div className="tag">Puntos clave</div>
        <ul>
          <li>{"$\\cos\\varphi$ cercano a 1 implica menor corriente para la misma potencia activa."}</li>
          <li>{"Un factor de potencia bajo implica mayores pérdidas en líneas y transformadores."}</li>
          <li>{"La corrección con capacitores reduce la potencia reactiva que debe suministrar la red."}</li>
          <li>{"En motores trifásicos, el coseno de phi típico varía aproximadamente entre 0,8 y 0,9 a plena carga."}</li>
        </ul>
      </section>
        <h2>Demo interactiva</h2>
        <CosenoPhiInteractive />
        <CalculadoraTrifasica />
    </main>
  );
};

export default CosenoPhi;
