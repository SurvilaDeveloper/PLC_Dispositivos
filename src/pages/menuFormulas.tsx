// src/componentes/MenuFormulas.tsx (o donde lo tengas)
import { useState } from "react";
import PotenciaMotorTrifasico from "../componentes/PotenciaMotorTrifasico";
import MotorTrifasicoParVelocidad from "../componentes/MotorTrifasicoParVelocidad";
import CosenoPhi from "../componentes/CosenoPhi";
import EnsayosMotorTrifasico from "../componentes/EnsayosMotorTrifasico";
import InductorCheatSheet from "../componentes/InductorCheatSheet";
import CapacitorCheatSheet from "../componentes/CapacitorCheatSheet";
import RlcSerieCheatSheet from "../componentes/RlcSerieCheatSheet";
import CablePotenciaCobre from "../componentes/CablePotenciaCobre";
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
            <li
              className="formulas-list-item"
              onClick={() => setSelectedFormula("inductorCheatSheet")}
            >
              <span className="formulas-item-title">Inductor ideal: fórmulas clave</span>
              <span className="formulas-item-desc">
                Resumen de fórmulas esenciales para el análisis de inductores ideales.
                </span>
            </li>
            <li
              className="formulas-list-item"
              onClick={() => setSelectedFormula("capacitorCheatSheet")}
            >
              <span className="formulas-item-title">Capacitor ideal: fórmulas clave</span>
              <span className="formulas-item-desc">
                Resumen de fórmulas esenciales para el análisis de capacitores ideales.
                </span>
            </li>
            <li
              className="formulas-list-item"
              onClick={() => setSelectedFormula("rlcSerieCheatSheet")}
            >
              <span className="formulas-item-title">Circuito RLC serie: fórmulas clave</span>
              <span className="formulas-item-desc">
                Resumen de fórmulas esenciales para el análisis de circuitos RLC serie.
                </span>
            </li>
            <li
              className="formulas-list-item"
              onClick={() => setSelectedFormula("cablePotenciaCobre")}
            >
              <span className="formulas-item-title">Cable de potencia de cobre</span>
              <span className="formulas-item-desc">
                Cálculo simplificado de sección de cable según potencia e intensidad.
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

        {selectedFormula === "inductorCheatSheet" && (
          <section className="formulas-section">
            <h3 className="formulas-section-title">Inductor ideal: fórmulas clave</h3>
            <p className="formulas-section-subtitle">
              Resumen de fórmulas esenciales para el análisis de inductores ideales.
            </p>
            <InductorCheatSheet />
          </section>
        )}

        {selectedFormula === "capacitorCheatSheet" && (
          <section className="formulas-section">
            <h3 className="formulas-section-title">Capacitor ideal: fórmulas clave</h3>
            <p className="formulas-section-subtitle">
              Resumen de fórmulas esenciales para el análisis de capacitores ideales.
            </p>
            <CapacitorCheatSheet />
          </section>
        )}

        {selectedFormula === "rlcSerieCheatSheet" && (
          <section className="formulas-section">
            <h3 className="formulas-section-title">Circuito RLC serie: fórmulas clave</h3>
            <p className="formulas-section-subtitle">
              Resumen de fórmulas esenciales para el análisis de circuitos RLC serie.
            </p>
            <RlcSerieCheatSheet />
          </section>
        )}

        {selectedFormula === "cablePotenciaCobre" && (
          <section className="formulas-section">
            <h3 className="formulas-section-title">Cable de potencia de cobre</h3>
            <p className="formulas-section-subtitle">
              Cálculo simplificado de sección de cable según potencia e intensidad.
            </p>
            <CablePotenciaCobre />
          </section>
        )}
      </div>
    </div>
  );
};

export default MenuFormulas;
