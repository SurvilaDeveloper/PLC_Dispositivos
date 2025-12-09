// src/componentes/MenuFormulas.tsx (o donde lo tengas)
import { useState } from "react";
import PotenciaMotorTrifasico from "../componentes/PotenciaMotorTrifasico";
import MotorTrifasicoParVelocidad from "../componentes/MotorTrifasicoParVelocidad";
import CosenoPhi from "../componentes/CosenoPhi";
import EnsayosMotorTrifasico from "../componentes/EnsayosMotorTrifasico";
import "./MenuFormulas.css";

const MenuFormulas: React.FC = () => {
  const [selectedFormula, setSelectedFormula] = useState<string | null>(null);

  return (
    <div className="formulas-wrapper">
      <div className="formulas-panel">
        <header className="formulas-header">
          <div className="formulas-pill">Motores trifásicos · Fórmulas</div>
          <h2 className="formulas-title">Calculadoras y fórmulas</h2>
          <p className="formulas-subtitle">
            Elegí una fórmula para ver su explicación y la calculadora interactiva.
          </p>
        </header>

        {/* Menú de fórmulas */}
        {selectedFormula === null && (
          <ul className="formulas-list">
            <li
              className="formulas-list-item"
              onClick={() => setSelectedFormula("potenciaMotorTrifasico")}
            >
              <span className="formulas-item-title">Potencia de motores trifásicos</span>
              <span className="formulas-item-desc">
                Relación entre tensión, corriente, cos φ y potencia.
              </span>
            </li>

            <li
              className="formulas-list-item"
              onClick={() => setSelectedFormula("motorTrifasicoParVelocidad")}
            >
              <span className="formulas-item-title">Motor trifásico: par y velocidad</span>
              <span className="formulas-item-desc">
                Vínculo entre velocidad sincrónica, resbalamiento y par.
              </span>
            </li>

            <li
              className="formulas-list-item"
              onClick={() => setSelectedFormula("cosenoPhi")}
            >
              <span className="formulas-item-title">Factor de potencia: cos φ</span>
              <span className="formulas-item-desc">
                Activa, reactiva y aparente para distintos cos φ.
              </span>
            </li>

            <li
              className="formulas-list-item"
              onClick={() => setSelectedFormula("ensayosMotorTrifasico")}
            >
              <span className="formulas-item-title">Ensayos de motor trifásico</span>
              <span className="formulas-item-desc">
                Ensayo en vacío y rotor bloqueado para obtener parámetros.
              </span>
            </li>
          </ul>
        )}

        {/* Botón de volver */}
        {selectedFormula !== null && (
          <div className="formulas-back-row">
            <button
              className="formulas-back-button"
              onClick={() => setSelectedFormula(null)}
            >
              ← Volver al menú de fórmulas
            </button>
          </div>
        )}

        {/* Secciones de fórmulas */}
        {selectedFormula === "potenciaMotorTrifasico" && (
          <section className="formulas-section">
            <h3 className="formulas-section-title">
              Fórmulas de potencia en motores trifásicos
            </h3>
            <p className="formulas-section-subtitle">
              Cálculo de P, Q y S según tensión de línea, corriente y cos φ.
            </p>
            <PotenciaMotorTrifasico />
          </section>
        )}

        {selectedFormula === "motorTrifasicoParVelocidad" && (
          <section className="formulas-section">
            <h3 className="formulas-section-title">Motor trifásico: par y velocidad</h3>
            <p className="formulas-section-subtitle">
              Relación entre velocidad sincrónica, resbalamiento y par desarrollado.
            </p>
            <MotorTrifasicoParVelocidad />
          </section>
        )}

        {selectedFormula === "cosenoPhi" && (
          <section className="formulas-section">
            <h3 className="formulas-section-title">Factor de potencia: cos φ</h3>
            <p className="formulas-section-subtitle">
              Comparación de corriente de línea y potencias para distintos cos φ.
            </p>
            <CosenoPhi />
          </section>
        )}

        {selectedFormula === "ensayosMotorTrifasico" && (
          <section className="formulas-section">
            <h3 className="formulas-section-title">Ensayos de motor trifásico</h3>
            <p className="formulas-section-subtitle">
              Ensayo en vacío y rotor bloqueado para determinar el circuito equivalente.
            </p>
            <EnsayosMotorTrifasico />
          </section>
        )}
      </div>
    </div>
  );
};

export default MenuFormulas;
