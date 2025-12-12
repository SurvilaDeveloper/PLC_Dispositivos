// src/components/MatrizArquitecturaPlataformas.tsx
import React, { useMemo, useState } from "react";

type ProyectoId =
  | "aprendizaje"
  | "domotica"
  | "plc"
  | "robotica"
  | "vision"
  | "hmi";

type TipoProyecto = {
  id: ProyectoId;
  etiqueta: string;
  descripcionCorta: string;
};

type ArquitecturaId =
  | "mcu_unico_simple"
  | "mcu_wifi_unico"
  | "sbc_mcu_plc"
  | "sbc_multi_mcu"
  | "ai_sbc_mcu"
  | "dual_core_mcu";

type ArquitecturaReco = {
  id: ArquitecturaId;
  nombre: string;
  proyectos: ProyectoId[];
  resumen: string;
  rolUno: string;
  rolDos?: string;
  estrategia: string[];
  microcontroladores: string[]; // nombres de familias/chips
  placas: string[]; // ejemplos de placas
  casosDeUso: string[];
  notas?: string;
};

const TIPOS_PROYECTO: TipoProyecto[] = [
  {
    id: "aprendizaje",
    etiqueta: "Aprendizaje / iniciación",
    descripcionCorta:
      "Primer contacto con microcontroladores, electrónica básica y automatización simple."
  },
  {
    id: "domotica",
    etiqueta: "IoT / Domótica",
    descripcionCorta:
      "Proyectos conectados por WiFi/BLE, dashboards simples, integración con nube o app."
  },
  {
    id: "plc",
    etiqueta: "PLC casero / Automatización",
    descripcionCorta:
      "Control de entradas/salidas, relés, sensores, seguridad y lógica tipo PLC."
  },
  {
    id: "robotica",
    etiqueta: "Robótica / Motores",
    descripcionCorta:
      "Robots móviles, brazos, drivers de motores, encoders, sensores múltiples."
  },
  {
    id: "vision",
    etiqueta: "Visión / IA",
    descripcionCorta:
      "Cámaras, detección de objetos, reconocimiento, inferencia de modelos en el borde."
  },
  {
    id: "hmi",
    etiqueta: "HMI / Dashboards",
    descripcionCorta:
      "Interfaces con pantalla, paneles tipo SCADA, dashboards web locales."
  }
];

const ARQUITECTURAS: ArquitecturaReco[] = [
  {
    id: "mcu_unico_simple",
    nombre: "MCU único simple",
    proyectos: ["aprendizaje", "plc", "robotica"],
    resumen: "Un solo microcontrolador hace de cerebro y controlador de entradas/salidas.",
    rolUno: "MCU central",
    estrategia: [
      "Todo el programa corre en un único microcontrolador.",
      "El MCU lee sensores, maneja salidas (relés, LEDs, motores) y ejecuta la lógica.",
      "La comunicación externa (si existe) suele ser mínima: USB para debug o serie simple.",
      "Ideal para empezar y para proyectos que no necesitan conectividad compleja ni HMI pesada."
    ],
    microcontroladores: ["ATmega328P", "ATmega2560", "RP2040", "STM32 (baja/media gama)", "PIC16/PIC18"],
    placas: ["Arduino Uno", "Arduino Mega 2560", "Arduino Nano", "Raspberry Pi Pico", "STM32 Nucleo básicas"],
    casosDeUso: [
      "Tablero pequeño con algunos pulsadores, LEDs y relés.",
      "Control simple de motor o ventilador.",
      "Ejercicios de laboratorio y maquetas educativas."
    ],
    notas: "Es la arquitectura más fácil de entender y depurar al principio."
  },
  {
    id: "mcu_wifi_unico",
    nombre: "MCU único con WiFi/BLE",
    proyectos: ["domotica", "hmi", "aprendizaje"],
    resumen: "Un solo microcontrolador con conectividad integrada hace control + red.",
    rolUno: "MCU con conectividad",
    estrategia: [
      "El MCU se encarga tanto del control de E/S como de la lógica de red (HTTP, MQTT, WebSocket).",
      "Puede alojar una pequeña página web para configuración o monitoreo.",
      "Ideal para nodos IoT individuales: sensor o actuador con acceso por WiFi.",
      "La HMI suele ser web simple o app móvil que habla con el dispositivo."
    ],
    microcontroladores: ["ESP32", "ESP8266", "RA4M1 + ESP32-S3 (Uno R4 WiFi)", "RP2040 Pico W"],
    placas: ["ESP32 DevKit", "NodeMCU", "Arduino Uno R4 WiFi", "Raspberry Pi Pico W"],
    casosDeUso: [
      "Control de luces, persianas y enchufes inteligentes.",
      "Sensores de temperatura/humedad con dashboard web básico.",
      "Dispositivos configurables desde el celular."
    ],
    notas: "Muy buen equilibrio entre simplicidad y potencia para domótica doméstica."
  },
  {
    id: "sbc_mcu_plc",
    nombre: "SBC + MCU tipo PLC casero",
    proyectos: ["plc", "hmi", "domotica", "robotica"],
    resumen: "Una SBC (mini PC) para la lógica y HMI; un MCU robusto como ‘PLC casero’.",
    rolUno: "SBC (Linux: lógica, HMI, red)",
    rolDos: "MCU/PLC (tiempo real, entradas/salidas)",
    estrategia: [
      "La SBC corre Linux (Raspberry Pi, UNO Q en modo ‘Linux’): dashboards, base de datos, lógica de alto nivel.",
      "El MCU (Mega, STM32, etc.) se encarga de leer entradas, manejar salidas y cumplir tiempos estrictos.",
      "Se comunican por serie (UART), USB, Modbus, TCP, MQTT o similar.",
      "Es una arquitectura muy cercana a ‘PC industrial + PLC’ clásica."
    ],
    microcontroladores: ["ATmega2560", "STM32 (gama F/G)", "ESP32 como esclavo de I/O"],
    placas: [
      "Raspberry Pi 4 / 5",
      "Arduino UNO Q",
      "Arduino Mega 2560",
      "STM32 Nucleo",
      "ESP32 DevKit como módulo de I/O"
    ],
    casosDeUso: [
      "PLC casero con panel HMI en pantalla HDMI.",
      "Sistema de supervisión + registro de datos + control local.",
      "Instalaciones con varias entradas/salidas y lógica compleja."
    ],
    notas: "Muy interesante para tus proyectos de automatización y tableros tipo SCADA caseros."
  },
  {
    id: "sbc_multi_mcu",
    nombre: "SBC coordinadora + múltiples MCUs nodos",
    proyectos: ["domotica", "plc", "robotica", "hmi"],
    resumen: "Un cerebro central con Linux y varios nodos MCU distribuidos.",
    rolUno: "SBC central",
    rolDos: "Nodos MCU",
    estrategia: [
      "La SBC central (Raspberry Pi, UNO Q, etc.) corre el sistema de supervisión, UI y lógica global.",
      "Cada nodo MCU (ESP32, Arduino, STM32) controla una parte física: una habitación, una máquina, un módulo.",
      "Se comunican por WiFi, Ethernet, RS-485/Modbus, MQTT, etc.",
      "Escala bien: es fácil agregar nuevos nodos a la red."
    ],
    microcontroladores: ["ESP32", "RP2040", "STM32", "ATmega328P/2560"],
    placas: [
      "Raspberry Pi 4 / 5",
      "Arduino UNO Q (como central)",
      "ESP32 DevKit",
      "Raspberry Pi Pico",
      "Arduino Uno/Mega/Nano como nodos de zona"
    ],
    casosDeUso: [
      "Domótica de una vivienda completa con varios ambientes.",
      "Pequeña planta industrial con celdas o estaciones distribuidas.",
      "Robots modulares o sistemas con varias cajas de control conectadas."
    ],
    notas: "Encaja perfecto con la idea de ‘nodos’ distribuidos, que a vos te gusta para domótica/PLC."
  },
  {
    id: "ai_sbc_mcu",
    nombre: "SBC de IA + MCUs de tiempo real",
    proyectos: ["vision", "robotica", "domotica"],
    resumen: "Una SBC potente para IA/visión y MCUs para motores y seguridad.",
    rolUno: "SBC de IA (Jetson, Pi + NPU)",
    rolDos: "MCU(s) de control",
    estrategia: [
      "La SBC con GPU/NPU procesa imágenes y ejecuta modelos de IA (detección, clasificación, SLAM).",
      "Los MCUs se encargan de motores, control de potencia, sensores críticos y seguridad.",
      "La comunicación suele ser serie, CAN, Ethernet o algún bus robusto.",
      "Permite tener IA bastante pesada sin comprometer el tiempo real de los actuadores."
    ],
    microcontroladores: ["STM32 (gamas F4/F7/H7)", "ESP32", "Arduino Portenta H7", "Arduino GIGA R1 WiFi"],
    placas: [
      "NVIDIA Jetson Nano / Orin Nano",
      "Raspberry Pi 4 / 5 con acelerador externo",
      "STM32 Nucleo",
      "Arduino Portenta H7",
      "Arduino GIGA R1 WiFi",
      "ESP32 DevKit como controlador de motores"
    ],
    casosDeUso: [
      "Robot móvil con cámara que esquiva obstáculos y sigue rutas.",
      "Sistema de vigilancia con detección de personas/objetos.",
      "Puertas o accesos que combinan reconocimiento + control de cerraduras."
    ],
    notas: "Es la arquitectura típica de robótica avanzada e IA en el borde."
  },
  {
    id: "dual_core_mcu",
    nombre: "MCU dual-core potente ‘todo en uno’",
    proyectos: ["plc", "robotica", "hmi", "vision"],
    resumen: "Un solo microcontrolador dual-core reparte tareas pesadas y de tiempo real.",
    rolUno: "Núcleo ‘alto nivel’ (M7, M4, etc.)",
    rolDos: "Núcleo ‘tiempo real’",
    estrategia: [
      "El núcleo principal se ocupa de comunicaciones, UI, cálculos pesados.",
      "El núcleo secundario se dedica a tiempo real: control de motores, PWM, lectura de sensores.",
      "Ambos núcleos comparten memoria y periféricos, coordinándose internamente.",
      "Reduce la cantidad de chips, pero complica un poco la programación."
    ],
    microcontroladores: ["STM32H747 (Portenta H7, GIGA R1)", "ESP32 (dos núcleos)", "Otros Cortex-M dual-core"],
    placas: ["Arduino Portenta H7", "Arduino GIGA R1 WiFi", "ESP32 DevKit", "otras placas STM32H7 dual-core"],
    casosDeUso: [
      "Maquinas donde querés UI / comunicación y control de motores fuertes en un solo PCB.",
      "Robots medianos con varios ejes y comunicación de red.",
      "Equipos embebidos avanzados pero sin una SBC aparte."
    ],
    notas: "Un término medio entre ‘solo MCU’ y ‘SBC + MCU’, muy interesante para producto final."
  }
];

const MatrizArquitecturaPlataformas: React.FC = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState<ProyectoId>("domotica");

  const proyectoActual = useMemo(
    () => TIPOS_PROYECTO.find((p) => p.id === tipoSeleccionado),
    [tipoSeleccionado]
  );

  const arquitecturasFiltradas = useMemo(
    () =>
      ARQUITECTURAS.filter((a) => a.proyectos.includes(tipoSeleccionado)),
    [tipoSeleccionado]
  );

  // Listas agregadas de micros y placas sugeridas para el tipo actual
  const microsSugeridos = useMemo(() => {
    const set = new Set<string>();
    arquitecturasFiltradas.forEach((a) =>
      a.microcontroladores.forEach((m) => set.add(m))
    );
    return Array.from(set);
  }, [arquitecturasFiltradas]);

  const placasSugeridas = useMemo(() => {
    const set = new Set<string>();
    arquitecturasFiltradas.forEach((a) =>
      a.placas.forEach((p) => set.add(p))
    );
    return Array.from(set);
  }, [arquitecturasFiltradas]);

  return (
    <div className="page-wrapper">
      <div className="page-panel sheet">
        {/* Cabecera */}
        <header className="sheet-header">
          <span className="sheet-pill">Arquitecturas recomendadas</span>
          <h1 className="page-title sheet-title">
            Microcontrolador + placa + estrategia de arquitectura
          </h1>
          <p className="sheet-subtitle">
            Elegí un tipo de proyecto y obtené sugerencias concretas de
            arquitectura: patrón general, familias de microcontroladores y
            placas de desarrollo que encajan bien con esa idea.
          </p>
        </header>

        {/* Selector de tipo de proyecto */}
        <section className="sheet-section">
          <h2 className="sheet-section-title">
            1. Elegí el tipo de proyecto
          </h2>
          <p className="sheet-text">
            Empezamos por el nivel “qué quiero hacer”. A partir de eso te
            propongo combinaciones de microcontroladores, placas y
            arquitectura global.
          </p>

          <div className="arch-type-selector">
            {TIPOS_PROYECTO.map((tipo) => {
              const isActive = tipo.id === tipoSeleccionado;
              return (
                <button
                  key={tipo.id}
                  type="button"
                  onClick={() => setTipoSeleccionado(tipo.id)}
                  className={
                    "arch-type-chip" + (isActive ? " arch-type-chip--active" : "")
                  }
                >
                  <span className="arch-type-chip-label">{tipo.etiqueta}</span>
                </button>
              );
            })}
          </div>

          {proyectoActual && (
            <p className="sheet-text-small arch-type-description">
              {proyectoActual.descripcionCorta}
            </p>
          )}
        </section>

        {/* Arquitecturas recomendadas */}
        <section className="sheet-section">
          <h2 className="sheet-section-title">
            2. Arquitecturas recomendadas para este tipo de proyecto
          </h2>
          <p className="sheet-text">
            Cada tarjeta describe un patrón de arquitectura, qué rol cumple cada
            parte, qué micros y placas encajan bien, y en qué casos tiene más
            sentido usarla.
          </p>

          <div className="arch-grid">
            {arquitecturasFiltradas.map((arch) => (
              <article key={arch.id} className="arch-card">
                <header className="arch-card-header">
                  <h3 className="arch-card-title">{arch.nombre}</h3>
                  <p className="arch-card-subtitle">{arch.resumen}</p>
                </header>

                <div className="arch-card-body">
                  {/* Diagrama textual simple */}
                  <div className="arch-diagram">
                    <div className="arch-diagram-box arch-diagram-box--primary">
                      <span className="arch-diagram-label">
                        {arch.rolUno}
                      </span>
                    </div>
                    {arch.rolDos && (
                      <>
                        <span className="arch-diagram-arrow">⇄</span>
                        <div className="arch-diagram-box arch-diagram-box--secondary">
                          <span className="arch-diagram-label">
                            {arch.rolDos}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Estrategia */}
                  <div className="arch-block">
                    <div className="arch-block-tag">Estrategia</div>
                    <ul className="arch-block-list">
                      {arch.estrategia.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Micros sugeridos */}
                  <div className="arch-block">
                    <div className="arch-block-tag">Familias de microcontroladores sugeridas</div>
                    <div className="arch-tag-row">
                      {arch.microcontroladores.map((m) => (
                        <span key={m} className="arch-chip">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Placas sugeridas */}
                  <div className="arch-block">
                    <div className="arch-block-tag">Placas de desarrollo típicas</div>
                    <div className="arch-tag-row">
                      {arch.placas.map((p) => (
                        <span key={p} className="arch-chip arch-chip--board">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Casos de uso */}
                  <div className="arch-block">
                    <div className="arch-block-tag">Casos de uso</div>
                    <ul className="arch-block-list">
                      {arch.casosDeUso.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {arch.notas && (
                    <p className="sheet-text-small arch-notes">
                      {arch.notas}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Resumen: micros y placas sugeridos */}
        <section className="sheet-section">
          <h2 className="sheet-section-title">
            3. Microcontroladores y placas recomendadas (resumen)
          </h2>
          <p className="sheet-text">
            Este resumen condensa los micros y placas que aparecen en las
            arquitecturas recomendadas para el tipo de proyecto que elegiste.
          </p>

          <div className="arch-summary-grid">
            <div className="arch-summary-column">
              <h3 className="arch-summary-title">Familias de microcontroladores</h3>
              <ul className="arch-summary-list">
                {microsSugeridos.map((m) => (
                  <li key={m} className="arch-summary-item">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="arch-summary-column">
              <h3 className="arch-summary-title">Placas de desarrollo</h3>
              <ul className="arch-summary-list">
                {placasSugeridas.map((p) => (
                  <li key={p} className="arch-summary-item">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="arch-tip-block">
            <p className="sheet-text-small">
              Podés combinar estas ideas como más te convenga. Por ejemplo:
              usar una Raspberry Pi o Arduino UNO Q como cerebro de alto nivel
              con dashboard, y varios ESP32 / Arduino / STM32 distribuidos como
              módulos de I/O o control de motores.
            </p>
          </div>
        </section>

        <footer className="sheet-footer">
          <p className="sheet-text-small">
            Si más adelante sumás nuevas placas a tu sitio, solo tenés que
            agregarlas a alguna arquitectura o crear una nueva con el patrón
            que te parezca adecuado.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MatrizArquitecturaPlataformas;
