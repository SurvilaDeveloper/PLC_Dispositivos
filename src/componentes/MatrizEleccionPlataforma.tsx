// src/components/MatrizEleccionPlataforma.tsx
import React, { useState, useMemo } from "react";

type ProyectoId =
  | "aprendizaje"
  | "domotica"
  | "plc"
  | "robotica"
  | "vision"
  | "hmi";

type NivelCompatibilidad = "ideal" | "buena" | "posible" | "no";

interface TipoProyecto {
  id: ProyectoId;
  etiqueta: string;
  descripcionCorta: string;
}

interface Plataforma {
  id: string;
  nombre: string;
  familia: string;
  notas: string;
  compatibilidad: Record<ProyectoId, NivelCompatibilidad>;
}

const TIPOS_PROYECTO: TipoProyecto[] = [
  {
    id: "aprendizaje",
    etiqueta: "Aprendizaje / iniciación",
    descripcionCorta: "Primer contacto con microcontroladores y electrónica."
  },
  {
    id: "domotica",
    etiqueta: "IoT / Domótica",
    descripcionCorta: "Proyecto conectado: WiFi, nube, app, etc."
  },
  {
    id: "plc",
    etiqueta: "PLC casero / Automatización",
    descripcionCorta: "Control de entradas/salidas, relés, sensores, seguridad."
  },
  {
    id: "robotica",
    etiqueta: "Robótica / Motores",
    descripcionCorta: "Motores, servos, drivers, sensores múltiples."
  },
  {
    id: "vision",
    etiqueta: "Visión / IA",
    descripcionCorta: "Cámara, reconocimiento, modelos de IA en el borde."
  },
  {
    id: "hmi",
    etiqueta: "HMI / Dashboards",
    descripcionCorta: "Pantallas, dashboards, paneles de control tipo SCADA."
  }
];

const PLATAFORMAS: Plataforma[] = [
  {
    id: "arduino-uno",
    nombre: "Arduino Uno",
    familia: "Arduino AVR de 8 bits",
    notas: "Placa clásica para empezar y hacer automatización sencilla.",
    compatibilidad: {
      aprendizaje: "ideal",
      domotica: "posible",
      plc: "buena",
      robotica: "buena",
      vision: "no",
      hmi: "posible"
    }
  },
  {
    id: "arduino-mega",
    nombre: "Arduino Mega 2560",
    familia: "Arduino AVR de 8 bits (muchos pines)",
    notas: "Cuando necesitás muchos pines para paneles o maquetas grandes.",
    compatibilidad: {
      aprendizaje: "buena",
      domotica: "buena",
      plc: "ideal",
      robotica: "buena",
      vision: "no",
      hmi: "posible"
    }
  },
  {
    id: "uno-r4-wifi",
    nombre: "Arduino Uno R4 WiFi",
    familia: "Arduino 32 bits + WiFi/BLE",
    notas: "Experiencia tipo Uno pero con 32 bits y conectividad integrada.",
    compatibilidad: {
      aprendizaje: "buena",
      domotica: "ideal",
      plc: "buena",
      robotica: "buena",
      vision: "posible",
      hmi: "buena"
    }
  },
  {
    id: "esp32-devkit",
    nombre: "ESP32 DevKit",
    familia: "ESP32 (WiFi/BLE, 32 bits)",
    notas: "Muy buena relación potencia/precio para IoT y domótica.",
    compatibilidad: {
      aprendizaje: "buena",
      domotica: "ideal",
      plc: "buena",
      robotica: "buena",
      vision: "posible",
      hmi: "posible"
    }
  },
  {
    id: "pico",
    nombre: "Raspberry Pi Pico",
    familia: "RP2040 (32 bits económico)",
    notas: "Control y automatización económica con muchos GPIO.",
    compatibilidad: {
      aprendizaje: "ideal",
      domotica: "buena",
      plc: "buena",
      robotica: "buena",
      vision: "no",
      hmi: "posible"
    }
  },
  {
    id: "stm32-nucleo",
    nombre: "STM32 Nucleo",
    familia: "STM32 (ARM Cortex-M)",
    notas: "Buen punto de entrada a diseños más industriales.",
    compatibilidad: {
      aprendizaje: "posible",
      domotica: "buena",
      plc: "ideal",
      robotica: "ideal",
      vision: "posible",
      hmi: "buena"
    }
  },
  {
    id: "uno-q",
    nombre: "Arduino UNO Q",
    familia: "Híbrida Linux + STM32U5",
    notas: "Mini PC + microcontrolador en formato UNO.",
    compatibilidad: {
      aprendizaje: "posible",
      domotica: "ideal",
      plc: "buena",
      robotica: "buena",
      vision: "buena",
      hmi: "ideal"
    }
  },
  {
    id: "portenta-h7",
    nombre: "Arduino Portenta H7",
    familia: "STM32H7 dual-core (Pro)",
    notas: "Pensada para proyectos embebidos profesionales.",
    compatibilidad: {
      aprendizaje: "posible",
      domotica: "buena",
      plc: "ideal",
      robotica: "ideal",
      vision: "buena",
      hmi: "buena"
    }
  },
  {
    id: "giga-r1",
    nombre: "Arduino GIGA R1 WiFi",
    familia: "STM32H7 dual-core con muchos GPIO",
    notas: "Tableros grandes, robótica y proyectos interactivos.",
    compatibilidad: {
      aprendizaje: "posible",
      domotica: "buena",
      plc: "ideal",
      robotica: "ideal",
      vision: "buena",
      hmi: "buena"
    }
  },
  {
    id: "jetson",
    nombre: "NVIDIA Jetson Nano / Orin Nano",
    familia: "SBC para IA en el borde",
    notas: "Cuando el foco es visión/IA, no tanto tiempo real.",
    compatibilidad: {
      aprendizaje: "posible",
      domotica: "buena",
      plc: "posible",
      robotica: "buena",
      vision: "ideal",
      hmi: "buena"
    }
  },
  {
    id: "raspberry-pi",
    nombre: "Raspberry Pi 4 / 5",
    familia: "SBC Linux generalista",
    notas: "Mini PC para dashboards, HMI y servicios.",
    compatibilidad: {
      aprendizaje: "buena",
      domotica: "ideal",
      plc: "posible",
      robotica: "buena",
      vision: "buena",
      hmi: "ideal"
    }
  }
];

const simboloCompatibilidad: Record<NivelCompatibilidad, string> = {
  ideal: "✔",
  buena: "◎",
  posible: "△",
  no: "–"
};

const textoCompatibilidad: Record<NivelCompatibilidad, string> = {
  ideal: "Muy recomendable para este tipo de proyecto.",
  buena: "Funciona bien, opción sólida.",
  posible: "Se puede usar, pero quizá no es lo más cómodo.",
  no: "No es la opción adecuada para esto."
};

const pesoCompatibilidad: Record<NivelCompatibilidad, number> = {
  ideal: 3,
  buena: 2,
  posible: 1,
  no: 0
};

const MatrizEleccionPlataforma: React.FC = () => {
  const [tipoSeleccionado, setTipoSeleccionado] =
    useState<ProyectoId>("domotica");

  const proyectosOrdenados = TIPOS_PROYECTO;

  const plataformasOrdenadas = useMemo(() => {
    return [...PLATAFORMAS].sort((a, b) => {
      const pa = pesoCompatibilidad[a.compatibilidad[tipoSeleccionado]];
      const pb = pesoCompatibilidad[b.compatibilidad[tipoSeleccionado]];
      return pb - pa;
    });
  }, [tipoSeleccionado]);

  return (
    <div className="page-wrapper">
      <div className="page-panel sheet">
        {/* Cabecera */}
        <header className="sheet-header">
          <span className="sheet-pill">Matriz de decisión</span>
          <h1 className="page-title sheet-title">
            Matriz interactiva para elegir plataforma
          </h1>
          <p className="sheet-subtitle">
            Elegí el tipo de proyecto (IoT, PLC casero, robótica, visión, HMI, etc.)
            y mirá qué placas encajan mejor. No es una verdad absoluta, sino una guía
            práctica para decidir más rápido.
          </p>
        </header>

        {/* Selector de tipo de proyecto */}
        <section className="sheet-section">
          <h2 className="sheet-section-title">1. Elegí el tipo de proyecto</h2>
          <p className="sheet-text">
            Hacé clic en la categoría que más se parezca a tu idea. La tabla y la
            lista de recomendaciones se actualizarán automáticamente.
          </p>

          <div className="matrix-type-selector">
            {proyectosOrdenados.map((proyecto) => {
              const activo = proyecto.id === tipoSeleccionado;
              return (
                <button
                  key={proyecto.id}
                  type="button"
                  onClick={() => setTipoSeleccionado(proyecto.id)}
                  className={
                    "matrix-type-chip" +
                    (activo ? " matrix-type-chip--active" : "")
                  }
                >
                  <span className="matrix-type-chip-label">
                    {proyecto.etiqueta}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="matrix-type-description formula-block">
            <span className="formula-tag">Descripción del tipo seleccionado</span>
            <p className="sheet-text-small">
              {
                proyectosOrdenados.find((p) => p.id === tipoSeleccionado)
                  ?.descripcionCorta
              }
            </p>
          </div>
        </section>

        {/* Matriz de compatibilidad */}
        <section className="sheet-section">
          <h2 className="sheet-section-title">2. Matriz de compatibilidad</h2>
          <p className="sheet-text-small">
            Símbolos: <strong>✔</strong> ideal, <strong>◎</strong> buena opción,{" "}
            <strong>△</strong> posible pero no óptima, <strong>–</strong> no recomendada.
          </p>

          <div className="matrix-table-wrapper">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th className="matrix-table-th matrix-table-th--platform">
                    Plataforma
                  </th>
                  {proyectosOrdenados.map((proyecto) => {
                    const activo = proyecto.id === tipoSeleccionado;
                    return (
                      <th
                        key={proyecto.id}
                        className={
                          "matrix-table-th" +
                          (activo ? " matrix-table-th--active" : "")
                        }
                      >
                        {proyecto.etiqueta}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {PLATAFORMAS.map((plataforma) => (
                  <tr key={plataforma.id} className="matrix-table-row">
                    <td className="matrix-table-td matrix-table-td--platform">
                      <div className="matrix-platform-info">
                        <span className="matrix-platform-name">
                          {plataforma.nombre}
                        </span>
                        <span className="matrix-platform-family">
                          {plataforma.familia}
                        </span>
                      </div>
                    </td>
                    {proyectosOrdenados.map((proyecto) => {
                      const nivel =
                        plataforma.compatibilidad[proyecto.id] || "no";
                      const symbol = simboloCompatibilidad[nivel];
                      const activo = proyecto.id === tipoSeleccionado;
                      return (
                        <td
                          key={proyecto.id}
                          className={
                            "matrix-table-td" +
                            (activo ? " matrix-table-td--active" : "")
                          }
                        >
                          {symbol}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recomendaciones según tipo seleccionado */}
        <section className="sheet-section">
          <h2 className="sheet-section-title">
            3. Placas recomendadas para este tipo de proyecto
          </h2>
          <p className="sheet-text">
            Ordenadas desde las más recomendadas a las menos adecuadas para la
            categoría seleccionada.
          </p>

          <div className="matrix-reco-grid">
            {plataformasOrdenadas.map((plataforma) => {
              const nivel =
                plataforma.compatibilidad[tipoSeleccionado] || "no";
              if (nivel === "no") return null;

              const nivelClase =
                nivel === "ideal"
                  ? "matrix-reco-card--ideal"
                  : nivel === "buena"
                  ? "matrix-reco-card--buena"
                  : "matrix-reco-card--posible";

              return (
                <article
                  key={plataforma.id}
                  className={`sheet-card matrix-reco-card ${nivelClase}`}
                >
                  <h3 className="matrix-reco-title">
                    {plataforma.nombre}
                  </h3>
                  <p className="sheet-text-small">
                    <strong>Familia:</strong> {plataforma.familia}
                  </p>
                  <p className="sheet-text-small">
                    <strong>Compatibilidad:</strong>{" "}
                    {textoCompatibilidad[nivel]}
                  </p>
                  <p className="sheet-text-small">{plataforma.notas}</p>
                </article>
              );
            })}
          </div>

          <div className="formula-block matrix-tip-block">
            <span className="formula-tag">Tip</span>
            <p className="sheet-text-small">
              La matriz no impide combinar varias plataformas. Por ejemplo: una
              Raspberry Pi para la HMI o dashboard, uno o varios ESP32 para
              nodos IoT y un STM32/Arduino Mega para hacer de “PLC casero”
              robusto.
            </p>
          </div>
        </section>

        <footer className="sheet-footer">
          <p className="sheet-text-small">
            Podés ajustar los niveles de compatibilidad para adaptarlos a tus
            criterios personales, o agregar nuevas filas/columnas si sumás más
            tipos de proyecto o nuevas placas a tu sitio.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MatrizEleccionPlataforma;

