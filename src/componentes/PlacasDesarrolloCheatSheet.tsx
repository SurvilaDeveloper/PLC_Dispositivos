// src/components/PlacasDesarrolloCheatSheet.tsx
import React from "react";

type TipoProyecto = "inicio" | "iot" | "industria" | "alto_rendimiento" | "linux";

type PlacaDesarrollo = {
  id: string;
  nombre: string;
  familia: string;
  tipoProyecto: TipoProyecto[];
  microPrincipal: string;
  descripcion: string;
  cuandoElegirla: string[];
  caracteristicas: string[];
  ventajas: string[];
  desventajas: string[];
  usosTipicos: string[];
};

const PLACAS: PlacaDesarrollo[] = [
  {
    id: "arduino-uno",
    nombre: "Arduino Uno (clásico)",
    familia: "Arduino AVR de 8 bits",
    tipoProyecto: ["inicio"],
    microPrincipal: "ATmega328P a 16 MHz",
    descripcion:
      "La placa clásica de Arduino. Ideal para aprender y para proyectos sencillos de automatización, lectura de sensores y manejo de salidas digitales.",
    cuandoElegirla: [
      "Cuando estás empezando con Arduino y microcontroladores.",
      "Si tu proyecto tiene pocos sensores y actuadores y no requiere mucha memoria.",
      "Cuando querés algo con enorme cantidad de ejemplos y documentación."
    ],
    caracteristicas: [
      "Microcontrolador ATmega328P de 8 bits a 16 MHz.",
      "14 pines digitales (6 con PWM) y 6 entradas analógicas.",
      "32 KB de Flash, 2 KB de SRAM, 1 KB de EEPROM.",
      "Conector USB para alimentación y programación.",
      "Factor de forma estándar Arduino Uno (compatible con shields)."
    ],
    ventajas: [
      "Comunidad gigantesca y toneladas de tutoriales.",
      "Muy buena para educación y prototipado rápido.",
      "Robusta y fácil de usar con el IDE de Arduino."
    ],
    desventajas: [
      "Potencia de cálculo limitada (8 bits, 16 MHz).",
      "Sin WiFi/Bluetooth integrados.",
      "Memoria escasa para proyectos grandes."
    ],
    usosTipicos: [
      "Control de relés, luces, servomotores, pequeños motores DC.",
      "Lectura de sensores de temperatura, humedad, luz, etc.",
      "Maquetas, automatización básica, proyectos educativos."
    ]
  },
  {
    id: "arduino-uno-r4-wifi",
    nombre: "Arduino Uno R4 WiFi",
    familia: "Arduino 32 bits + WiFi/Bluetooth",
    tipoProyecto: ["inicio", "iot"],
    microPrincipal: "Renesas RA4M1 (Cortex-M4, 48 MHz) + módulo ESP32-S3 para WiFi/BLE",
    descripcion:
      "Evolución del Uno clásico con microcontrolador de 32 bits, más memoria y conectividad WiFi/Bluetooth integrada gracias a un ESP32-S3 en la misma placa.",
    cuandoElegirla: [
      "Si querés la experiencia “tipo Uno” pero con más potencia y memoria.",
      "Cuando tu proyecto necesita conectividad WiFi/BLE integrada sin cables extra.",
      "Si planeás usar Arduino IoT Cloud de forma cómoda."
    ],
    caracteristicas: [
      "Micro Renesas RA4M1 de 32 bits a 48 MHz.",
      "Módulo ESP32-S3-MINI-1-N8 para WiFi y Bluetooth.",
      "Más memoria Flash y SRAM que el Uno clásico.",
      "Matriz de LEDs 12×8 integrada para debug visual.",
      "Conector Qwiic para sensores/actuadores I²C enchufar-y-usar."
    ],
    ventajas: [
      "Mantiene el formato Uno, pero con 32 bits y conectividad.",
      "Ideal para proyectos IoT de pequeña/media escala.",
      "Gran integración con el ecosistema Arduino y su nube."
    ],
    desventajas: [
      "Más cara que un Uno clásico o un ESP32 pelado.",
      "Algo más compleja de entender por la doble arquitectura (RA4M1 + ESP32-S3).",
      "Exceso de placa si solo querés algo muy simple sin WiFi."
    ],
    usosTipicos: [
      "Domótica conectada (control de luces, sensores, persianas).",
      "Dispositivos que se configuran desde una web o app.",
      "Prototipos IoT donde se quiere trabajar en “modo Arduino Uno” pero con red."
    ]
  },
  {
    id: "arduino-mega",
    nombre: "Arduino Mega 2560",
    familia: "Arduino AVR de 8 bits (muchos pines)",
    tipoProyecto: ["inicio"],
    microPrincipal: "ATmega2560 a 16 MHz",
    descripcion:
      "Placa Arduino con muchísimos pines de entrada/salida y más memoria. Ideal para tableros, maquetas y sistemas con muchos sensores y actuadores.",
    cuandoElegirla: [
      "Cuando el Uno se te queda corto de pines.",
      "Si necesitás manejar muchos relés, botones, displays, etc.",
      "Cuando tu programa en Uno ya no entra en memoria."
    ],
    caracteristicas: [
      "54 pines digitales (15 PWM) y 16 entradas analógicas.",
      "256 KB de Flash, 8 KB de SRAM, 4 KB de EEPROM.",
      "Varios puertos serie hardware (UART).",
      "Formato más grande, pero compatible con algunos shields."
    ],
    ventajas: [
      "Muchísimos pines disponibles.",
      "Más memoria que el Uno clásico.",
      "Perfecta para paneles de automatización casera con muchos I/O."
    ],
    desventajas: [
      "Sigue siendo 8 bits a 16 MHz (no gana mucha potencia de cálculo).",
      "Placa grande, no ideal para proyectos muy compactos.",
      "Consumo mayor que otras opciones pequeñas."
    ],
    usosTipicos: [
      "Paneles de control con muchos LEDs, pulsadores, selectores.",
      "Maquetas complejas, domótica casera “todo en una placa”.",
      "Control de múltiples drivers de motor, servos, etc."
    ]
  },
  {
    id: "esp32-devkit",
    nombre: "ESP32 DevKit",
    familia: "Placa de desarrollo ESP32",
    tipoProyecto: ["iot", "alto_rendimiento"],
    microPrincipal: "ESP32 (dual-core 32 bits, hasta 240 MHz, WiFi/Bluetooth)",
    descripcion:
      "Una de las placas de desarrollo más usadas para proyectos IoT. Combina un microcontrolador muy potente de 32 bits con WiFi y Bluetooth integrados en formato económico.",
    cuandoElegirla: [
      "Cuando querés WiFi/Bluetooth integrado al menor costo posible.",
      "Si tu aplicación necesita más potencia que un Arduino de 8 bits.",
      "Cuando tu proyecto es un sensor o actuador conectado a la nube."
    ],
    caracteristicas: [
      "Procesador dual-core Xtensa LX6 hasta 240 MHz.",
      "Cientos de KB de RAM y varios MB de Flash (según módulo).",
      "Decenas de pines GPIO con ADC, PWM, DAC, I²C, SPI, UART.",
      "WiFi 2.4 GHz y Bluetooth/BLE integrados.",
      "Formato preparado para protoboard, con USB para programar."
    ],
    ventajas: [
      "Excelente relación potencia/precio.",
      "Perfecta para servidores web embebidos y MQTT.",
      "Soporte en Arduino, ESP-IDF, MicroPython, etc."
    ],
    desventajas: [
      "Requiere algo más de cuidado en alimentación (3.3 V) y diseño.",
      "Documentación más dispersa que la de Arduino clásico, aunque hay muchos tutoriales.",
      "Puede ser “demasiado” para proyectos ultra simples."
    ],
    usosTipicos: [
      "Sensores WiFi, nodos de domótica, automatización residencial.",
      "Control de dispositivos desde el celular o una web.",
      "Prototipos de productos IoT comerciales."
    ]
  },
  {
    id: "raspberry-pi-pico",
    nombre: "Raspberry Pi Pico",
    familia: "Placa RP2040 (Raspberry Pi)",
    tipoProyecto: ["inicio", "alto_rendimiento"],
    microPrincipal: "RP2040 (dual-core Cortex-M0+ hasta 133 MHz)",
    descripcion:
      "Placa de bajo costo y alto rendimiento con el microcontrolador RP2040. Muy buena para aprender 32 bits y para proyectos de control con muchos GPIO.",
    cuandoElegirla: [
      "Cuando querés un micro de 32 bits económico con buena documentación.",
      "Si necesitás muchos GPIO en un formato compacto.",
      "Cuando te interesa programar en C/C++ o MicroPython con buen soporte."
    ],
    caracteristicas: [
      "Dual-core Cortex-M0+ hasta 133 MHz.",
      "264 KB de SRAM y 2 MB de Flash en la placa.",
      "26 pines GPIO con funciones múltiples.",
      "USB integrado para programación (modo pendrive UF2).",
      "Soporte oficial en C/C++ y MicroPython."
    ],
    ventajas: [
      "Muy económico y potente para su precio.",
      "Buena documentación y comunidad en crecimiento.",
      "Ideal para formar parte de productos finales muy baratos."
    ],
    desventajas: [
      "La versión básica no tiene WiFi (para eso, Pico W).",
      "Menos ecosistema de “shields” listo-para-usar comparado con Arduino.",
      "Requiere leer más documentación si querés sacar provecho al máximo."
    ],
    usosTipicos: [
      "Control de motores, servos y sistemas de automatización simples.",
      "Instrumentos de medición DIY y dataloggers.",
      "Proyectos de enseñanza de 32 bits y sistemas embebidos."
    ]
  },
  {
    id: "stm32-nucleo",
    nombre: "STM32 Nucleo",
    familia: "Placas Nucleo (STMicroelectronics)",
    tipoProyecto: ["industria", "alto_rendimiento"],
    microPrincipal: "STM32 (ARM Cortex-M, varios modelos)",
    descripcion:
      "Placas de desarrollo oficiales para la familia STM32. Permiten probar distintos microcontroladores de 32 bits con periféricos avanzados a bajo costo.",
    cuandoElegirla: [
      "Si apuntás a un diseño más industrial o profesional con STM32.",
      "Cuando querés acceso a timers avanzados, ADC/DAC de alta calidad, CAN, etc.",
      "Si ya estás cómodo con C/C++ y entornos más “bajos” que Arduino."
    ],
    caracteristicas: [
      "Versiones Nucleo-32, Nucleo-64, Nucleo-144, etc.",
      "Compatibilidad con conectores tipo Arduino y ST Morpho.",
      "Integran depurador ST-LINK en la propia placa.",
      "Soporte con STM32CubeMX/CubeIDE y HAL/LL.",
      "Permiten cambiar de microcontrolador dentro de la misma familia STM32."
    ],
    ventajas: [
      "Muy buenos para aprender y desarrollar con STM32.",
      "Pensados para pasar de prototipo a producto final.",
      "Integran herramientas de debug profesionales."
    ],
    desventajas: [
      "Curva de aprendizaje más alta que Arduino.",
      "Menos cosas “listas para copiar y pegar” que en ESP32/Arduino Uno.",
      "Ecosistema más orientado a ingeniería que a hobby."
    ],
    usosTipicos: [
      "Control industrial, motores trifásicos, variadores.",
      "Equipos de medición de precisión, instrumentación.",
      "Prototipos de productos que luego se llevan a una PCB propia con STM32."
    ]
  },
  {
    id: "raspberry-pi-4",
    nombre: "Raspberry Pi 4 (como placa de desarrollo Linux)",
    familia: "Single Board Computer (SBC)",
    tipoProyecto: ["linux"],
    microPrincipal: "BCM2711 (quad-core Cortex-A72, hasta 1.5 GHz)",
    descripcion:
      "No es un microcontrolador, sino una mini PC de placa única. Se usa mucho como “cerebro” de sistemas donde se corren servicios en Linux: servidores, dashboards, HMI, etc.",
    cuandoElegirla: [
      "Cuando necesitás correr un sistema operativo completo (Linux).",
      "Si tu aplicación requiere navegador, Python, bases de datos, etc.",
      "Cuando querés hacer una HMI con pantalla HDMI, teclado, ratón, etc."
    ],
    caracteristicas: [
      "Procesador ARM Cortex-A72 de 64 bits, varios núcleos.",
      "Salidas de video (HDMI), USB, Ethernet, WiFi/Bluetooth.",
      "Corre sistemas como Raspberry Pi OS (Debian) u otras distros.",
      "Puede correr servidores web, bases de datos, aplicaciones gráficas."
    ],
    ventajas: [
      "Potencia de PC en tamaño reducido.",
      "Gran comunidad, muchas guías y ejemplos.",
      "Ideal para capas superiores: dashboard, SCADA casero, etc."
    ],
    desventajas: [
      "No está pensada para tiempo real estricto.",
      "Más cara y más compleja que un microcontrolador.",
      "Consumo y arranque más similares a un ordenador que a una MCU."
    ],
    usosTipicos: [
      "Servidores domésticos de domótica, Home Assistant, Node-RED.",
      "Dashboards, paneles HMI con pantalla HDMI.",
      "Puerta de enlace (gateway) entre red y microcontroladores (Arduino, ESP32, etc.)."
    ]
  }
];

const PlacasDesarrolloCheatSheet: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="page-panel sheet">
        {/* Cabecera */}
        <header className="sheet-header">
          <span className="sheet-pill">Placas de desarrollo</span>
          <h1 className="page-title sheet-title">
            Apunte de placas de desarrollo para proyectos de electrónica y automatización
          </h1>
          <p className="sheet-subtitle">
            Diferencia entre microcontrolador y placa de desarrollo, ejemplos de placas típicas
            (Arduino, ESP32, RP2040, STM32, Raspberry Pi) y guía rápida para elegir según el proyecto.
          </p>
        </header>

        {/* Navegación interna */}
        <nav className="elec-nav">
          <a href="#que-es-placa" className="elec-nav-item">
            ¿Qué es una placa de desarrollo?
          </a>
          <a href="#tabla-resumen" className="elec-nav-item">
            Resumen comparativo
          </a>
          {PLACAS.map((placa) => (
            <a key={placa.id} href={`#${placa.id}`} className="elec-nav-item">
              {placa.nombre}
            </a>
          ))}
          <a href="#guia-eleccion-placa" className="elec-nav-item">
            Guía para elegir
          </a>
        </nav>

        {/* Qué es una placa de desarrollo */}
        <section id="que-es-placa" className="sheet-section">
          <h2 className="sheet-section-title">¿Qué es una placa de desarrollo?</h2>
          <p className="sheet-text">
            Una <strong>placa de desarrollo</strong> es una placa ya armada que trae un microcontrolador
            o microprocesador, más todos los componentes básicos para poder programarlo y usarlo sin
            diseñar hardware desde cero:
          </p>
          <ul className="sheet-list">
            <li>Reguladores de tensión y circuito de alimentación.</li>
            <li>Conector USB o similar para cargar el programa y depurar.</li>
            <li>Pines o headers para acceder a los GPIO del chip.</li>
            <li>A veces, extras como LEDs, botones, sensores, WiFi, etc.</li>
          </ul>
          <p className="sheet-text">
            La idea es **probar ideas rápido**: hacés el prototipo en una placa de desarrollo y, si el
            diseño funciona, después podés pasar a una **placa propia** con solo el microcontrolador y
            el hardware estrictamente necesario.
          </p>
        </section>

        {/* Tabla resumen */}
        <section id="tabla-resumen" className="sheet-section">
          <h2 className="sheet-section-title">Resumen comparativo rápido</h2>
          <p className="sheet-text-small">
            Este cuadro no reemplaza leer cada ficha, pero sirve para tener una primera impresión
            de qué conviene usar según el tipo de proyecto.
          </p>

          <div className="page-table-container">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ padding: "4px", borderBottom: "1px solid #374151", textAlign: "left" }}>
                    Placa
                  </th>
                  <th style={{ padding: "4px", borderBottom: "1px solid #374151", textAlign: "left" }}>
                    Mejor para
                  </th>
                  <th style={{ padding: "4px", borderBottom: "1px solid #374151", textAlign: "left" }}>
                    Comentario rápido
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "4px" }}>Arduino Uno</td>
                  <td style={{ padding: "4px" }}>Iniciación y automatización básica</td>
                  <td style={{ padding: "4px" }}>Ideal para aprender y prototipos sencillos.</td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>Arduino Uno R4 WiFi</td>
                  <td style={{ padding: "4px" }}>Proyectos tipo Uno + WiFi/BLE</td>
                  <td style={{ padding: "4px" }}>“Uno moderno” con 32 bits y conectividad.</td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>Arduino Mega</td>
                  <td style={{ padding: "4px" }}>Muchos pines de E/S</td>
                  <td style={{ padding: "4px" }}>Tableros con muchos sensores/actuadores.</td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>ESP32 DevKit</td>
                  <td style={{ padding: "4px" }}>IoT, domótica conectada</td>
                  <td style={{ padding: "4px" }}>WiFi/BLE barato y muy potente.</td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>Raspberry Pi Pico</td>
                  <td style={{ padding: "4px" }}>32 bits económicos</td>
                  <td style={{ padding: "4px" }}>Control y educación con bajo costo.</td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>STM32 Nucleo</td>
                  <td style={{ padding: "4px" }}>Industrial / profesional</td>
                  <td style={{ padding: "4px" }}>Prototipos serios con STM32.</td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>Raspberry Pi 4</td>
                  <td style={{ padding: "4px" }}>Aplicaciones Linux</td>
                  <td style={{ padding: "4px" }}>Mini PC para dashboards y servicios.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Fichas de cada placa */}
        {PLACAS.map((placa) => (
          <section key={placa.id} id={placa.id} className="sheet-section">
            <h2 className="sheet-section-title">{placa.nombre}</h2>
            <p className="sheet-text">
              <strong>Familia:</strong> {placa.familia}
            </p>
            <p className="sheet-text">
              <strong>Micro / SoC principal:</strong> {placa.microPrincipal}
            </p>
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
              <span className="formula-tag">Características típicas</span>
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

        {/* Guía práctica para elegir */}
        <section id="guia-eleccion-placa" className="sheet-section">
          <h2 className="sheet-section-title">Guía práctica para elegir placa de desarrollo</h2>

          <div className="formula-block">
            <span className="formula-tag">Preguntas clave</span>
            <ul className="sheet-list">
              <li>
                <strong>¿Necesito tiempo real o puedo usar Linux?</strong>{" "}
                Si necesitás tiempos muy precisos, suele convenir usar microcontrolador
                (Arduino, ESP32, STM32, RP2040). Para dashboards, servidores y cosas “de PC”,
                una Raspberry Pi con Linux es mejor.
              </li>
              <li>
                <strong>¿Necesito WiFi/Bluetooth integrado?</strong>{" "}
                Si la respuesta es sí, mirá ESP32, Arduino Uno R4 WiFi o Raspberry Pi Pico W.
              </li>
              <li>
                <strong>¿Cuántos pines necesito?</strong> Tableros grandes y maquetas con muchos
                dispositivos → Arduino Mega o alguna placa con muchos GPIO (ESP32, STM32, etc.).
              </li>
              <li>
                <strong>¿Cuál es mi nivel actual?</strong> Para empezar, Arduino Uno / Mega o
                Pico con MicroPython son opciones muy amigables.
              </li>
              <li>
                <strong>¿Es un prototipo o un producto casi final?</strong> Para producto final,
                pensá en STM32, RP2040, ESP32 o un AVR “pelado” en tu propia PCB.
              </li>
            </ul>
          </div>

          <div className="formula-block">
            <span className="formula-tag">Reglas rápidas</span>
            <ul className="sheet-list">
              <li>
                <strong>Aprendizaje + proyectos simples:</strong> Arduino Uno / Mega, Raspberry Pi Pico.
              </li>
              <li>
                <strong>IoT y domótica conectada:</strong> ESP32 DevKit, Arduino Uno R4 WiFi.
              </li>
              <li>
                <strong>Industrial / motores / medición “seria”:</strong> STM32 Nucleo (u otras STM32).
              </li>
              <li>
                <strong>Dashboards, HMI, servicios en red complejos:</strong> Raspberry Pi 4 u otra SBC.
              </li>
            </ul>
          </div>

          <p className="sheet-text-small">
            Nada impide combinar varias: por ejemplo, una Raspberry Pi corriendo Linux y hablando por
            serie, I²C o red con varios ESP32/Arduino/STM32 que hacen el trabajo de tiempo real.
          </p>
        </section>

        <footer className="sheet-footer">
          <p className="sheet-text-small">
            Podés extender este componente agregando nuevas placas (Nano ESP32, Portenta, BeagleBone,
            etc.) o enlazando cada ficha con documentación oficial y ejemplos de código.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PlacasDesarrolloCheatSheet;
