// src/components/TablaCorrienteCable.tsx
import React, { useState } from "react";

type TablaRow = {
  amps: string;
  seccion: string;
  maxMetros: string;
  uso: string;
};

// Tabla 230 V monofásico (orientativa)
const datosMono230: TablaRow[] = [
  {
    amps: "6 A",
    seccion: "1,5 mm²",
    maxMetros: "≈ 40 m",
    uso: "Circuitos de iluminación de baja carga",
  },
  {
    amps: "10 A",
    seccion: "1,5 mm²",
    maxMetros: "≈ 25 m",
    uso: "Iluminación y tomas de baja potencia",
  },
  {
    amps: "16 A",
    seccion: "2,5 mm²",
    maxMetros: "≈ 30 m",
    uso: "Tomas generales, pequeñas cargas",
  },
  {
    amps: "20 A",
    seccion: "2,5 mm²",
    maxMetros: "≈ 20 m",
    uso: "Líneas de tomas con mayor carga",
  },
  {
    amps: "25 A",
    seccion: "4 mm²",
    maxMetros: "≈ 35 m",
    uso: "Pequeños equipos fijos, aire pequeño",
  },
  {
    amps: "32 A",
    seccion: "6 mm²",
    maxMetros: "≈ 30 m",
    uso: "Cocina eléctrica, aire mediano, subtableros chicos",
  },
  {
    amps: "40 A",
    seccion: "10 mm²",
    maxMetros: "≈ 35 m",
    uso: "Alimentación de subtablero o carga fija importante",
  },
  {
    amps: "50 A",
    seccion: "16 mm²",
    maxMetros: "≈ 35 m",
    uso: "Alimentación principal de tableros pequeños",
  },
];

// Tabla 400 V trifásico (orientativa)
const datosTri400: TablaRow[] = [
  {
    amps: "10 A",
    seccion: "1,5 mm²",
    maxMetros: "≈ 60 m",
    uso: "Pequeños motores trifásicos, servicios auxiliares",
  },
  {
    amps: "16 A",
    seccion: "2,5 mm²",
    maxMetros: "≈ 60 m",
    uso: "Motores pequeños/medianos, bombas",
  },
  {
    amps: "25 A",
    seccion: "4 mm²",
    maxMetros: "≈ 60 m",
    uso: "Motores medianos, líneas de servicio",
  },
  {
    amps: "32 A",
    seccion: "4 mm²",
    maxMetros: "≈ 45 m",
    uso: "Motores de mayor potencia, líneas cortas",
  },
  {
    amps: "40 A",
    seccion: "6 mm²",
    maxMetros: "≈ 55 m",
    uso: "Alimentación de motores y subtableros trifásicos",
  },
  {
    amps: "50 A",
    seccion: "10 mm²",
    maxMetros: "≈ 55 m",
    uso: "Subtableros, cargas trifásicas importantes",
  },
  {
    amps: "63 A",
    seccion: "16 mm²",
    maxMetros: "≈ 55 m",
    uso: "Alimentación de TDP / tableros de fuerza",
  },
];

type TipoSistema = "mono" | "tri";

const TablaCorrienteCable: React.FC = () => {
  // --- estado calculadora ---
  const [voltaje, setVoltaje] = useState<string>("230");
  const [corriente, setCorriente] = useState<string>("16");
  const [longitud, setLongitud] = useState<string>("20");
  const [tipoSistema, setTipoSistema] = useState<TipoSistema>("mono");
  const [resultado, setResultado] = useState<string>("");

  const calcularSeccion = () => {
    const V = parseFloat(voltaje);
    const I = parseFloat(corriente);
    const L = parseFloat(longitud);

    if (!V || !I || !L || V <= 0 || I <= 0 || L <= 0) {
      setResultado("Completá todos los campos con valores mayores que cero.");
      return;
    }

    // modelo simplificado
    const rho = 0.0175; // Ω·mm²/m (cobre)
    const Jmax = 6; // A/mm² (densidad de corriente aproximada)
    const dropMax = 0.03 * V; // caída máx ≈ 3 % de V

    const secciones = [1.5, 2.5, 4, 6, 10, 16, 25, 35];

    let seccionElegida: number | null = null;

    for (const S of secciones) {
      const J = I / S; // A/mm²
      if (J > Jmax) continue;

      let deltaV: number;
      if (tipoSistema === "mono") {
        // monofásico: ida y vuelta (fase + neutro)
        deltaV = (2 * rho * L * I) / S;
      } else {
        // trifásico equilibrado
        deltaV = (Math.sqrt(3) * rho * L * I) / S;
      }

      if (deltaV <= dropMax) {
        seccionElegida = S;
        break;
      }
    }

    if (seccionElegida === null) {
      setResultado(
        "Con este voltaje, corriente y longitud, sería recomendable usar una sección mayor a 35 mm² o revisar el diseño con un cálculo más detallado."
      );
    } else {
      setResultado(
        `Sección sugerida (orientativa): ${seccionElegida.toFixed(
          1
        )} mm² de cobre.`
      );
    }
  };

  return (
    <div className="page-wrapper">
      <header className="sheet-header">
        <div className="sheet-pill">Cables de cobre · Baja tensión</div>
        <h1 className="sheet-title">
          Corriente, sección de cable de cobre y longitud
        </h1>
        <p className="sheet-subtitle">
          Tablas orientativas para cables de cobre en 230 V monofásico y 400 V
          trifásico, más una calculadora simplificada que sugiere sección de
          cable en función de voltaje, corriente y longitud. No reemplaza las
          tablas ni los métodos de la reglamentación AEA/IRAM.
        </p>
      </header>

      <main className="page-wrapper">
        {/* Suposiciones */}
        <section className="sheet-section">
          <h2 className="sheet-title">Suposiciones simplificadas</h2>
          <ul className="formula-block">
            <li>Conductores de cobre.</li>
            <li>
              Instalación estándar en cañería / bandeja, sin considerar todos
              los factores de corrección térmica.
            </li>
            <li>
              Caída de tensión admisible de referencia ≈ 3 % de la tensión de
              alimentación.
            </li>
            <li>
              Valores orientativos; para diseño real de instalaciones se deben
              usar las tablas y fórmulas de la reglamentación oficial y el
              cálculo de corto circuito, agrupamiento, temperatura, etc.
            </li>
          </ul>
        </section>

        {/* Tabla 230 V monofásico */}
        <section className="sheet-section">
          <h2 className="sheet-title">
            Tabla 1 – 230 V monofásico (orientativa)
          </h2>

          <div className="page-table-container">
            <table>
              <thead>
                <tr>
                  <th>Corriente</th>
                  <th>Sección de cobre</th>
                  <th>Longitud máx. orientativa</th>
                  <th>Uso típico (ejemplo)</th>
                </tr>
              </thead>
              <tbody>
                {datosMono230.map((fila, idx) => (
                  <tr key={`mono-${idx}`}>
                    <td>{fila.amps}</td>
                    <td>{fila.seccion}</td>
                    <td>{fila.maxMetros}</td>
                    <td>{fila.uso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tabla 400 V trifásico */}
        <section className="sheet-section">
          <h2 className="sheet-title">
            Tabla 2 – 400 V trifásico (orientativa)
          </h2>

          <div className="page-table-container">
            <table>
              <thead>
                <tr>
                  <th>Corriente</th>
                  <th>Sección de cobre</th>
                  <th>Longitud máx. orientativa</th>
                  <th>Uso típico (ejemplo)</th>
                </tr>
              </thead>
              <tbody>
                {datosTri400.map((fila, idx) => (
                  <tr key={`tri-${idx}`}>
                    <td>{fila.amps}</td>
                    <td>{fila.seccion}</td>
                    <td>{fila.maxMetros}</td>
                    <td>{fila.uso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Calculadora de sección */}
        <section className="sheet-section">
          <h2 className="sheet-title">
            Calculadora orientativa de sección de cable
          </h2>
          <p className="calc-note">
            Modelo simplificado: usa densidad de corriente máxima aproximada (6
            A/mm²) y límite de caída de tensión del 3 %. El resultado es una
            **sugerencia orientativa**, no un valor normativo.
          </p>

          <div className="calc-grid">
            <label>
              Tipo de sistema
              <select
                value={tipoSistema}
                onChange={(e) =>
                  setTipoSistema(e.target.value as TipoSistema)
                }
              >
                <option value="mono">Monofásico</option>
                <option value="tri">Trifásico</option>
              </select>
            </label>

            <label>
              Voltaje (V)
              <input
                type="number"
                value={voltaje}
                onChange={(e) => setVoltaje(e.target.value)}
                min={1}
                step={1}
              />
            </label>

            <label>
              Corriente (A)
              <input
                type="number"
                value={corriente}
                onChange={(e) => setCorriente(e.target.value)}
                min={0}
                step={0.1}
              />
            </label>

            <label>
              Longitud del cable (m)
              <input
                type="number"
                value={longitud}
                onChange={(e) => setLongitud(e.target.value)}
                min={0}
                step={1}
              />
            </label>
          </div>

          <button className="btn" onClick={calcularSeccion}>
            Calcular sección orientativa
          </button>

          {resultado && <p className="calc-results">{resultado}</p>}
        </section>
      </main>

      <footer className="page-footer">
        Apunte de referencia rápida. Para proyectos reales deben utilizarse las
        tablas y métodos de la reglamentación AEA/IRAM y contar con la
        intervención de profesionales habilitados.
      </footer>
    </div>
  );
};

export default TablaCorrienteCable;
