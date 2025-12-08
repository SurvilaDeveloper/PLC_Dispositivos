import React, { useEffect } from "react";
import "./potenciaMotorTrifasico.css";

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

// Componente helper para fórmulas en bloque
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const PotenciaMotorTrifasico: React.FC = () => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <main className="pm-body">
      <h1>Fórmulas de Potencia en Motores Trifásicos</h1>

      <p>
        Resumen de las ecuaciones más usadas para el cálculo de potencia en
        motores trifásicos (sistema equilibrado).
      </p>

      {/* 1. Potencia activa */}
      <h2>1. Potencia activa trifásica</h2>
      <section className="formula-block">
        <div className="tag">Potencia activa</div>
        <Formula
          tex={String.raw`$$ P = \sqrt{3} \cdot V_L \cdot I_L \cdot \cos\varphi $$`}
        />
        <ul>
          <li>{"$P$ : potencia activa (W o kW)"}</li>
          <li>{"$V_L$ : tensión de línea (V)"}</li>
          <li>{"$I_L$ : corriente de línea (A)"}</li>
          <li>{"$\\cos\\varphi$ : factor de potencia"}</li>
        </ul>
      </section>

      {/* 2. Potencia aparente */}
      <h2>2. Potencia aparente trifásica</h2>
      <section className="formula-block">
        <div className="tag">Potencia aparente</div>
        <Formula tex={String.raw`$$ S = \sqrt{3} \cdot V_L \cdot I_L $$`} />
        <ul>
          <li>{"$S$ : potencia aparente (VA o kVA)"}</li>
        </ul>
      </section>

      {/* 3. Potencia reactiva */}
      <h2>3. Potencia reactiva trifásica</h2>
      <section className="formula-block">
        <div className="tag">Potencia reactiva</div>
        <Formula
          tex={String.raw`$$ Q = \sqrt{3} \cdot V_L \cdot I_L \cdot \sin\varphi $$`}
        />
        <ul>
          <li>{"$Q$ : potencia reactiva (VAr o kVAr)"}</li>
        </ul>
      </section>

      {/* 4. Relación entre S, P, Q */}
      <h2>4. Relación entre S, P y Q</h2>
      <section className="formula-block">
        <div className="tag">Triángulo de potencias</div>
        <Formula tex={String.raw`$$ S^2 = P^2 + Q^2 $$`} />
      </section>

      {/* 5. Factor de potencia */}
      <h2>5. Factor de potencia</h2>
      <section className="formula-block">
        <div className="tag">Relaciones trigonométricas</div>
        <Formula
          tex={String.raw`$$ \cos\varphi = \frac{P}{S} \qquad\qquad \sin\varphi = \frac{Q}{S} $$`}
        />
      </section>

      {/* 6. Potencia mecánica */}
      <h2>6. Potencia mecánica en el eje</h2>

      <h3>6.1. Definición general</h3>
      <section className="formula-block">
        <div className="tag">Potencia mecánica</div>
        <Formula tex={String.raw`$$ P_{mec} = T \cdot \omega_m $$`} />
        <ul>
          <li>{"$P_{mec}$ : potencia mecánica (W)"}</li>
          <li>{"$T$ : torque (N·m)"}</li>
          <li>{"$\\omega_m$ : velocidad angular (rad/s)"}</li>
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

      <h3>6.3. Fórmula práctica en kW</h3>
      <section className="formula-block">
        <div className="tag">Ingeniería práctica</div>
        <Formula
          tex={String.raw`$$ P_{mec}[\text{kW}] = \frac{T[\text{N·m}] \cdot n[\text{rpm}]}{9550} $$`}
        />
      </section>

      {/* 7. Rendimiento */}
      <h2>7. Rendimiento del motor</h2>

      <h3>7.1. Definición</h3>
      <section className="formula-block">
        <div className="tag">Rendimiento</div>
        <Formula
          tex={String.raw`$$ \eta = \frac{P_{mec}}{P_{electrica}} $$`}
        />
      </section>

      <h3>7.2. Rendimiento en porcentaje</h3>
      <section className="formula-block">
        <div className="tag">Porcentaje</div>
        <Formula
          tex={String.raw`$$ \eta[\%] = \frac{P_{mec}}{P_{electrica}} \cdot 100 $$`}
        />
      </section>
    </main>
  );
};

export default PotenciaMotorTrifasico;



