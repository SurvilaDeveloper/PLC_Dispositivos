// src/components/PlacasHibridasAvanzadas.tsx
import React from "react";

type CategoriaPlaca =
  | "linux_mcu_hybrid"
  | "dual_mcu"
  | "ai_sbc"
  | "sbc_general";

type PlacaAvanzada = {
  id: string;
  nombre: string;
  familia: string;
  categoria: CategoriaPlaca[];
  procesadorPrincipal: string;
  coprocesador?: string;
  descripcion: string;
  cuandoElegirla: string[];
  caracteristicas: string[];
  ventajas: string[];
  desventajas: string[];
  usosTipicos: string[];
};

const PLACAS_AVANZADAS: PlacaAvanzada[] = [
  {
    id: "uno-q",
    nombre: "Arduino UNO Q",
    familia: "Híbrida Linux + microcontrolador (formato UNO)",
    categoria: ["linux_mcu_hybrid"],
    procesadorPrincipal: "Qualcomm Dragonwing QRB2210 (quad-core Cortex-A53, Linux Debian)",
    coprocesador:
      "STM32U585 (Cortex-M33, hasta 160 MHz) para tiempo real y GPIO",
    descripcion:
      "Es una placa híbrida: por un lado tenés un SoC potente capaz de correr Linux, aplicaciones de IA ligera, visión y servicios; por otro, un STM32U5 que se comporta como un Arduino clásico para tareas de tiempo real y control de pines.",
    cuandoElegirla: [
      "Cuando querés Linux y tiempo real en la misma placa, sin usar dos equipos separados.",
      "Si tu proyecto combina cámara, audio, red, etc. con control preciso de motores, relés o sensores.",
      "Cuando apuntás a algo tipo ‘mini PLC + mini PC’ para domótica o automatización avanzada."
    ],
    caracteristicas: [
      "SoC Qualcomm Dragonwing QRB2210 con CPU quad-core Cortex-A53 y GPU integrada.",
      "2 GB o 4 GB de RAM LPDDR4 y 16/32 GB de eMMC (según modelo).",
      "Wi-Fi 5 de doble banda y Bluetooth 5.1 integrados.",
      "Microcontrolador STM32U585 para tareas de tiempo real y control de pines.",
      "Formato físico compatible con shields tipo UNO y conectores de alta velocidad para periféricos avanzados."
    ],
    ventajas: [
      "Permite separar muy bien ‘lógica gorda’ (Linux, IA, servicios) y ‘tiempo real’ (STM32).",
      "Ideal como cerebro avanzado de sistemas de automatización complejos.",
      "Formato UNO conocido, más fácil de integrar con shields existentes."
    ],
    desventajas: [
      "Mucho más compleja que un Arduino Uno o un ESP32 DevKit.",
      "Precio superior a placas clásicas de prototipado.",
      "Exceso de potencia si solo necesitás unas entradas/salidas básicas."
    ],
    usosTipicos: [
      "Domótica avanzada con cámara, reconocimiento, panel web local y control de cargas.",
      "Pasarelas (gateways) de IA en el borde que también manejan E/S industriales.",
      "Prototipos de equipos donde en producción podría separarse en PLC + PC industrial."
    ]
  },
  {
    id: "portenta-h7",
    nombre: "Arduino Portenta H7",
    familia: "Placa dual-core STM32H7 (cómputo embebido avanzado)",
    categoria: ["dual_mcu"],
    procesadorPrincipal:
      "STM32H747 (Cortex-M7 @ 480 MHz + Cortex-M4 @ 240 MHz, dual-core)",
    coprocesador:
      "M7 y M4 pueden correr tareas distintas (Arduino, MbedOS, MicroPython, etc.) en paralelo",
    descripcion:
      "Placa de la gama ‘Pro’ de Arduino, pensada para aplicaciones industriales, visión, IoT avanzado e incluso IA ligera. Los dos núcleos del STM32H7 permiten separar tareas de alto nivel y tiempo real dentro del mismo chip.",
    cuandoElegirla: [
      "Cuando querés un solo microcontrolador que maneje tanto tareas rápidas como lógica de más alto nivel.",
      "Si apuntás a un diseño profesional/industrial pero te gusta seguir en el ecosistema Arduino/Mbed.",
      "Cuando necesitás conectividad, alta potencia de cómputo y posibilidad de usar un shield de visión."
    ],
    caracteristicas: [
      "Dual-core STM32H747 con Cortex-M7 (hasta 480 MHz) y Cortex-M4 (hasta 240 MHz).",
      "Posibilidad de ejecutar Arduino, MbedOS, MicroPython, JavaScript o TensorFlow Lite.",
      "Conectividad Wi-Fi/Bluetooth integrada (en las variantes correspondientes).",
      "Formatos de módulos compatibles con shields de visión (cámara, micrófonos).",
      "Pensada para funcionar tanto como MCU clásica como “casi PC embebida”."
    ],
    ventajas: [
      "Dos núcleos permiten verdadera multitarea embebida (por ejemplo, UI + control de motores).",
      "Muy flexible a nivel de software y ecosistema profesional.",
      "Buena opción para productos finales de gama media-alta."
    ],
    desventajas: [
      "Curva de aprendizaje mayor que Arduino Uno/Mega.",
      "Precio bastante superior a placas hobby estándar.",
      "Sobredimensionada para proyectos muy simples."
    ],
    usosTipicos: [
      "Control de máquinas, robótica liviana, instrumentación avanzada.",
      "Sistemas con interfaz gráfica externa + control en tiempo real.",
      "Proyectos de visión y clasificación ligera con sensor de cámara."
    ]
  },
  {
    id: "giga-r1",
    nombre: "Arduino GIGA R1 WiFi",
    familia: "STM32H7 dual-core en formato Mega",
    categoria: ["dual_mcu"],
    procesadorPrincipal:
      "STM32H747XI (Cortex-M7 + Cortex-M4, 2 MB Flash, 1 MB RAM aprox.)",
    coprocesador:
      "Wi-Fi y Bluetooth integrados en la propia placa, conectores de cámara y display",
    descripcion:
      "Es como un ‘Mega esteroide’: muchísimos GPIO, un STM32H7 dual-core muy potente y conectividad Wi-Fi/BLE. Ideal para tableros complejos, proyectos interactivos grandes y robótica con muchos sensores.",
    cuandoElegirla: [
      "Si venís del mundo Arduino Mega y querés dar un salto grande de potencia.",
      "Cuando tu proyecto necesita muchos pines, conectividad y quizá cámara/display.",
      "Si te interesa probar programación en paralelo usando los dos núcleos del STM32H7."
    ],
    caracteristicas: [
      "Basada en STM32H747XI dual-core con M7 + M4.",
      "Hasta 76 GPIO accesibles, muchos con funciones avanzadas.",
      "Wi-Fi y Bluetooth integrados en la propia placa.",
      "Conectores dedicados para cámara y pantallas de alta resolución.",
      "USB-C, USB host tipo A y otros periféricos ricos para HMI."
    ],
    ventajas: [
      "Muchísimo I/O + mucha potencia de procesamiento.",
      "Ideal como “controlador central” de proyectos grandes.",
      "Permite arquitecturas complejas (UI, comunicaciones, control, etc.) en una sola placa."
    ],
    desventajas: [
      "Sigue siendo más compleja de configurar que un Arduino AVR.",
      "Mayor coste y tamaño físico.",
      "Puede ser “overkill” si el proyecto es chico."
    ],
    usosTipicos: [
      "Tableros de automatización grandes y dashboards embebidos.",
      "Robots medianos/grandes con muchos sensores y actuadores.",
      "Prototipos de máquinas con cámara y pantalla integradas."
    ]
  },
  {
    id: "jetson-nano",
    nombre: "NVIDIA Jetson Nano / Orin Nano",
    familia: "SBC para IA en el borde (Linux + GPU)",
    categoria: ["ai_sbc"],
    procesadorPrincipal:
      "SoC NVIDIA (CPU ARM + GPU con núcleos CUDA/Tensor según modelo)",
    coprocesador:
      "Módulo completo con RAM y almacenamiento, pensado para correr IA en Linux",
    descripcion:
      "Son mini-PCs orientadas a inteligencia artificial: pueden ejecutar modelos de visión, clasificación, detección de objetos, etc., en el borde. Son más parecidas a una Raspberry Pi “turbo para IA” que a un microcontrolador clásico.",
    cuandoElegirla: [
      "Cuando el foco del proyecto es la IA (visión, clasificación, detección) en tiempo casi real.",
      "Si necesitás entrenar o al menos ejecutar modelos pesados en el propio dispositivo.",
      "Para robots, vehículos o sistemas que tomen decisiones complejas con cámara y sensores."
    ],
    caracteristicas: [
      "CPU ARM multi-núcleo con una GPU potente integrada.",
      "Capaces de ejecutar múltiples redes neuronales en paralelo.",
      "Corren Linux con el stack JetPack de NVIDIA.",
      "Tienen headers tipo GPIO para control básico de E/S.",
      "Hay kits orientados a bajo consumo (5–15 W aprox., según configuración)."
    ],
    ventajas: [
      "Muchísima potencia de IA comparada con MCU o SBC genéricos.",
      "Herramientas de NVIDIA para visión, robótica y análisis de sensores.",
      "Ideales para prototipos de IA en robótica y edge computing."
    ],
    desventajas: [
      "Costo y complejidad mayores que una placa de microcontrolador.",
      "Requieren buena gestión de energía y refrigeración.",
      "No están pensadas para tiempo real estricto a nivel GPIO (conviene combinarlas con MCU)."
    ],
    usosTipicos: [
      "Robots móviles con visión, SLAM, detección de objetos.",
      "Cámaras inteligentes para seguridad, conteo de personas, etc.",
      "Pasarelas de IA que procesan video en el borde y envían resultados a la nube."
    ]
  },
  {
    id: "raspberry-pi",
    nombre: "Raspberry Pi 4 / 5",
    familia: "SBC Linux generalista",
    categoria: ["sbc_general"],
    procesadorPrincipal:
      "SoC Broadcom ARM multi-núcleo (Cortex-A72/A76 según modelo)",
    coprocesador:
      "GPU integrada para video y gráficos, distintos módulos extras según la versión",
    descripcion:
      "Son mini-PCs muy populares: corren Linux, permiten conectar pantallas HDMI, teclado, ratón, y ejecutar aplicaciones de alto nivel como servidores, dashboards, SCADA casero, etc.",
    cuandoElegirla: [
      "Cuando querés un sistema con escritorio, navegador, Python, Docker, bases de datos, etc.",
      "Si tu proyecto necesita una HMI completa con pantalla, mouse y teclado.",
      "Cuando vas a usarla como ‘cerebro superior’ hablando con microcontroladores por red o serie."
    ],
    caracteristicas: [
      "CPU ARM de 64 bits con varios núcleos y GPU integrada.",
      "Conectividad: Ethernet, Wi-Fi, Bluetooth (según modelo).",
      "Varios puertos USB, salidas de video HDMI, cámara CSI, etc.",
      "Header GPIO de 40 pines para E/S básica y buses estándar.",
      "Gran ecosistema de software, bibliotecas y proyectos de ejemplo."
    ],
    ventajas: [
      "Muy flexible: sirve como PC, servidor, gateway, HMI…",
      "Gran comunidad, documentación y soporte.",
      "Ideal para combinar con uno o varios microcontroladores externos."
    ],
    desventajas: [
      "No es tiempo real duro; el sistema operativo introduce latencias.",
      "Más sensible a cortes de energía (sistema de archivos, SD/eMMC).",
      "Mayor consumo que un microcontrolador típico."
    ],
    usosTipicos: [
      "Paneles HMI, dashboards gráficos, servidores caseros.",
      "Centros de control que se comunican con Arduino/ESP32/STM32.",
      "Nodos de automatización que corren software como Node-RED, Home Assistant, etc."
    ]
  }
];

const PlacasHibridasAvanzadas: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="page-panel sheet">
        {/* Cabecera */}
        <header className="sheet-header">
          <span className="sheet-pill">Placas avanzadas / híbridas</span>
          <h1 className="page-title sheet-title">
            Placas de desarrollo avanzadas e híbridas (Linux + MCU, dual-core, IA)
          </h1>
          <p className="sheet-subtitle">
            Resumen de placas pensadas para proyectos exigentes: desde híbridas
            Linux + microcontrolador, hasta SBC para IA y placas dual-core STM32.
          </p>
        </header>

        {/* Navegación interna */}
        <nav className="elec-nav">
          <a href="#intro-hibridas" className="elec-nav-item">
            ¿Qué es una placa avanzada / híbrida?
          </a>
          <a href="#resumen-hibridas" className="elec-nav-item">
            Resumen comparativo
          </a>
          {PLACAS_AVANZADAS.map((placa) => (
            <a key={placa.id} href={`#${placa.id}`} className="elec-nav-item">
              {placa.nombre}
            </a>
          ))}
          <a href="#guia-hibridas" className="elec-nav-item">
            Guía para elegir
          </a>
        </nav>

        {/* Intro */}
        <section id="intro-hibridas" className="sheet-section">
          <h2 className="sheet-section-title">
            ¿Qué entendemos por placa avanzada / híbrida?
          </h2>
          <p className="sheet-text">
            En este contexto llamamos <strong>placas avanzadas / híbridas</strong> a las que
            van más allá de un microcontrolador sencillo:
          </p>
          <ul className="sheet-list">
            <li>
              Placas que combinan <strong>Linux + microcontrolador</strong> en el mismo PCB.
            </li>
            <li>
              Placas con <strong>microcontroladores dual-core</strong> capaces de separar tareas
              de alto nivel y tiempo real.
            </li>
            <li>
              <strong>SBC orientadas a IA</strong> o computación pesada en el borde.
            </li>
            <li>
              Mini PCs (<strong>SBC generalistas</strong>) que suelen trabajar junto a uno o más
              microcontroladores clásicos.
            </li>
          </ul>
          <p className="sheet-text">
            Suelen ser la opción cuando un Arduino Uno o un ESP32 “pelado” ya no alcanzan por
            requerimientos de potencia, conectividad, visión, IA o integración de varios subsistemas.
          </p>
        </section>

        {/* Resumen comparativo */}
        <section id="resumen-hibridas" className="sheet-section">
          <h2 className="sheet-section-title">Resumen comparativo rápido</h2>
          <p className="sheet-text-small">
            Tabla orientativa para ubicar cada placa dentro del mapa general. No reemplaza las
            fichas detalladas, pero ayuda a decidir por dónde empezar a leer.
          </p>

          <div className="page-table-container">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "4px",
                      borderBottom: "1px solid #374151",
                      textAlign: "left"
                    }}
                  >
                    Placa
                  </th>
                  <th
                    style={{
                      padding: "4px",
                      borderBottom: "1px solid #374151",
                      textAlign: "left"
                    }}
                  >
                    Tipo
                  </th>
                  <th
                    style={{
                      padding: "4px",
                      borderBottom: "1px solid #374151",
                      textAlign: "left"
                    }}
                  >
                    Mejor para
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "4px" }}>Arduino UNO Q</td>
                  <td style={{ padding: "4px" }}>Linux + MCU</td>
                  <td style={{ padding: "4px" }}>
                    Sistemas mixtos: IA ligera + control en tiempo real.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>Portenta H7</td>
                  <td style={{ padding: "4px" }}>Dual-core MCU</td>
                  <td style={{ padding: "4px" }}>
                    Embebidos profesionales con tareas de alto nivel + tiempo real.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>GIGA R1 WiFi</td>
                  <td style={{ padding: "4px" }}>Dual-core MCU + muchos GPIO</td>
                  <td style={{ padding: "4px" }}>
                    Tableros grandes, proyectos interactivos, robótica con muchos I/O.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>Jetson Nano / Orin Nano</td>
                  <td style={{ padding: "4px" }}>SBC orientada a IA</td>
                  <td style={{ padding: "4px" }}>
                    Visión, IA en el borde, robótica con modelos pesados.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>Raspberry Pi 4 / 5</td>
                  <td style={{ padding: "4px" }}>SBC generalista</td>
                  <td style={{ padding: "4px" }}>
                    Dashboards, HMI, servicios y coordinación de otros MCUs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Fichas por placa */}
        {PLACAS_AVANZADAS.map((placa) => (
          <section key={placa.id} id={placa.id} className="sheet-section">
            <h2 className="sheet-section-title">{placa.nombre}</h2>
            <p className="sheet-text">
              <strong>Familia:</strong> {placa.familia}
            </p>
            <p className="sheet-text">
              <strong>Procesador / SoC principal:</strong> {placa.procesadorPrincipal}
            </p>
            {placa.coprocesador && (
              <p className="sheet-text">
                <strong>Arquitectura híbrida:</strong> {placa.coprocesador}
              </p>
            )}
            <p className="sheet-text">{placa.descripcion}</p>

            <div className="formula-block">
              <span className="formula-tag">¿Cuándo conviene elegirla?</span>
              <ul className="sheet-list">
                {placa.cuandoElegirla.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="formula-block">
              <span className="formula-tag">Características clave</span>
              <ul className="sheet-list">
                {placa.caracteristicas.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="formula-block">
              <span className="formula-tag">Ventajas</span>
              <ul className="sheet-list">
                {placa.ventajas.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="formula-block">
              <span className="formula-tag">Desventajas</span>
              <ul className="sheet-list">
                {placa.desventajas.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="formula-block">
              <span className="formula-tag">Usos típicos</span>
              <ul className="sheet-list">
                {placa.usosTipicos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* Guía para elegir */}
        <section id="guia-hibridas" className="sheet-section">
          <h2 className="sheet-section-title">
            Guía rápida: ¿placa avanzada, híbrida o SBC?
          </h2>

          <div className="formula-block">
            <span className="formula-tag">Reglas de dedo</span>
            <ul className="sheet-list">
              <li>
                <strong>Necesito IA/visión pesada:</strong> Jetson Nano / Orin Nano como
                cerebro principal + uno o varios MCUs para tiempo real.
              </li>
              <li>
                <strong>Quiero Linux + tiempo real en un solo PCB:</strong> Arduino UNO Q.
              </li>
              <li>
                <strong>Proyecto embebido profesional, sin Linux, pero potente:</strong>{" "}
                Portenta H7 o GIGA R1 WiFi, según la cantidad de GPIO y formato.
              </li>
              <li>
                <strong>Dashboard, SCADA casero, HMI con pantalla HDMI:</strong>{" "}
                Raspberry Pi 4/5 como “PC” + MCUs externos para control.
              </li>
            </ul>
          </div>

          <div className="formula-block">
            <span className="formula-tag">Combinaciones típicas</span>
            <ul className="sheet-list">
              <li>
                <strong>Raspberry Pi + Arduino/ESP32:</strong> la Raspberry corre la UI,
                el servidor y la lógica compleja; los MCUs manejan salidas y lecturas
                en tiempo real.
              </li>
              <li>
                <strong>Jetson + STM32/Portenta:</strong> Jetson procesa visión/IA y el
                MCU gobierna motores, ejes, relés y seguridad.
              </li>
              <li>
                <strong>UNO Q solo:</strong> cuando querés prototipar todo junto, sin
                separar físicamente “PC” y “PLC”.
              </li>
            </ul>
          </div>

          <p className="sheet-text-small">
            Podés usar este componente como apunte teórico, pero también como mapa mental
            a la hora de elegir qué plataforma conviene para cada proyecto de automatización,
            robótica o domótica que quieras encarar.
          </p>
        </section>

        <footer className="sheet-footer">
          <p className="sheet-text-small">
            Podés extender este listado con otras placas (BeagleBone, Jetson AGX, otras
            Portenta, etc.) o enlazar desde cada ficha a ejemplos concretos de tus propios
            proyectos en el sitio.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PlacasHibridasAvanzadas;
