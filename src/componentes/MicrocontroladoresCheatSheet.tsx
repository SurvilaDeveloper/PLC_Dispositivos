// src/components/MicrocontroladoresCheatSheet.tsx
import React from "react";

type CategoriaUso = "inicio" | "iot" | "industria" | "alto_rendimiento" | "educacion";

type Microcontrolador = {
  id: string;
  nombre: string;
  familia: string;
  arquitectura: string;
  categoria: CategoriaUso[];
  descripcion: string;
  cuandoElegirlo: string[];
  caracteristicas: string[];
  ventajas: string[];
  desventajas: string[];
  usosTipicos: string[];
};

const MICROCONTROLADORES: Microcontrolador[] = [
  {
    id: "arduino-uno",
    nombre: "Arduino Uno (ATmega328P)",
    familia: "Arduino / AVR de 8 bits",
    arquitectura: "AVR de 8 bits @ 16 MHz",
    categoria: ["inicio", "educacion"],
    descripcion:
      "Es la placa clásica de Arduino y uno de los mejores puntos de partida. Muy documentada, comunidad enorme y entorno de desarrollo extremadamente sencillo.",
    cuandoElegirlo: [
      "Cuando estás empezando y querés aprender entradas/salidas digitales y analógicas.",
      "Cuando el proyecto no necesita demasiada memoria ni gran potencia de cálculo.",
      "Para prototipos rápidos con sensores simples, relés y pequeños actuadores."
    ],
    caracteristicas: [
      "Microcontrolador ATmega328P de 8 bits a 16 MHz.",
      "14 pines digitales (6 con PWM) y 6 entradas analógicas.",
      "Memoria Flash: 32 KB, SRAM: 2 KB, EEPROM: 1 KB.",
      "Alimentación fácil por USB o fuente externa.",
      "Se programa con el IDE de Arduino o PlatformIO."
    ],
    ventajas: [
      "Súper popular: muchísimos ejemplos, librerías y tutoriales.",
      "Muy tolerante a errores típicos de principiante (dentro de lo razonable).",
      "Ecosistema de shields para agregar WiFi, motores, pantallas, etc.",
      "Ideal para enseñanza, pruebas rápidas y proyectos pequeños."
    ],
    desventajas: [
      "Memoria y potencia limitadas para proyectos complejos.",
      "Sin conectividad integrada (WiFi/Bluetooth requiere módulos externos).",
      "Convertidor ADC relativamente básico (10 bits)."
    ],
    usosTipicos: [
      "Proyectos educativos de electrónica y programación.",
      "Control de relés, luces, pequeños motores DC y servos.",
      "Lectura de sensores de temperatura, luz, humedad, etc.",
      "Paneles de control simples y maquetas didácticas."
    ]
  },
  {
    id: "arduino-mega",
    nombre: "Arduino Mega 2560",
    familia: "Arduino / AVR de 8 bits",
    arquitectura: "AVR de 8 bits @ 16 MHz",
    categoria: ["inicio", "educacion"],
    descripcion:
      "Similar al Arduino Uno pero con mucha más memoria y muchos más pines de entrada/salida. Ideal cuando el Uno se te queda corto.",
    cuandoElegirlo: [
      "Cuando necesitás muchos pines para leer botones, sensores o controlar actuadores.",
      "Cuando tu código en Arduino Uno ya no entra o te quedás sin SRAM.",
      "En paneles de automatización caseros con muchos dispositivos conectados."
    ],
    caracteristicas: [
      "Microcontrolador ATmega2560 de 8 bits a 16 MHz.",
      "54 pines digitales (15 con PWM) y 16 entradas analógicas.",
      "Memoria Flash: 256 KB, SRAM: 8 KB, EEPROM: 4 KB.",
      "Totalmente compatible con el ecosistema Arduino.",
      "Ideal para proyectos grandes pero aún sencillos a nivel cálculo."
    ],
    ventajas: [
      "Mucha más E/S que Arduino Uno.",
      "Más memoria de programa y de datos.",
      "Mis librerías y código de Arduino Uno suelen funcionar casi sin cambios."
    ],
    desventajas: [
      "Más grande físicamente que un Uno o Nano.",
      "Sigue siendo una arquitectura de 8 bits (limitada en potencia).",
      "Mayor consumo y costo que un Uno para proyectos muy simples."
    ],
    usosTipicos: [
      "Paneles de automatización doméstica con muchas entradas y salidas.",
      "Simuladores, tableros con muchos indicadores y botones.",
      "Control de maquetas de trenes, domótica casera, etc."
    ]
  },
  {
    id: "arduino-nano",
    nombre: "Arduino Nano / Nano Every",
    familia: "Arduino / AVR de 8 bits",
    arquitectura: "AVR de 8 bits (similar a Uno)",
    categoria: ["inicio", "educacion"],
    descripcion:
      "Versión compacta de Arduino, pensada para montarla en protoboards o en PCBs propias. Muy útil cuando el proyecto ya está definido y querés reducir tamaño.",
    cuandoElegirlo: [
      "Cuando tu proyecto con Arduino Uno ya funciona y querés hacerlo más compacto.",
      "Cuando necesitás la misma lógica que un Uno pero en un espacio reducido.",
      "Para módulos o placas propias donde integrás el Nano directo."
    ],
    caracteristicas: [
      "Factor de forma pequeño tipo DIP para protoboard.",
      "Entradas/salidas muy similares al Arduino Uno.",
      "Se alimenta por USB o por pines de alimentación.",
      "Algunas variantes traen microcontroladores más modernos (Nano Every)."
    ],
    ventajas: [
      "Tamaño reducido, ideal para montajes finales.",
      "Muy económico y fácil de conseguir.",
      "Compatible con muchas librerías de Arduino Uno."
    ],
    desventajas: [
      "Acceso a los pines algo más incómodo que en un Uno.",
      "Menos espacio para conectores grandes o shields.",
      "La serigrafía puede ser pequeña y poco legible."
    ],
    usosTipicos: [
      "Módulos de automatización integrados en cajas pequeñas.",
      "Proyectos portátiles con batería.",
      "Productos caseros derivados de prototipos con Arduino Uno."
    ]
  },
  {
    id: "esp32",
    nombre: "ESP32",
    familia: "Espressif / 32 bits",
    arquitectura: "Xtensa LX6 (doble núcleo) @ hasta ~240 MHz",
    categoria: ["iot", "alto_rendimiento"],
    descripcion:
      "Microcontrolador muy potente con WiFi y Bluetooth integrados. Muy buena relación costo/rendimiento, perfecto para IoT y domótica avanzada.",
    cuandoElegirlo: [
      "Cuando necesitás conectividad WiFi o Bluetooth integrada.",
      "Cuando tu aplicación requiere más potencia que un Arduino de 8 bits.",
      "Para proyectos IoT que envían datos a la nube o se configuran desde el celular."
    ],
    caracteristicas: [
      "Doble núcleo a hasta ~240 MHz según modelo.",
      "Muchos GPIO con ADC, PWM, DAC, I2C, SPI, UART, etc.",
      "Memoria RAM y Flash muy superiores a un Uno.",
      "WiFi 2.4 GHz y Bluetooth/BLE integrados.",
      "Se puede programar con Arduino IDE, ESP-IDF o MicroPython."
    ],
    ventajas: [
      "Muy potente para el precio que tiene.",
      "Ideal para proyectos conectados (web server embebido, MQTT, etc.).",
      "Soporta aplicaciones más complejas, incluso con varias tareas concurrentes."
    ],
    desventajas: [
      "Algo más complejo de configurar que un Arduino Uno.",
      "Más sensible al ruido y al layout de la placa (requiere buen diseño de hardware).",
      "Consumo mayor que un micro de 8 bits si no se usan modos de bajo consumo."
    ],
    usosTipicos: [
      "Domótica (control de luces, persianas, climatización) por WiFi.",
      "Sensores inalámbricos conectados a un servidor o plataforma IoT.",
      "Interfaces web embebidas para configurar equipos.",
      "Aplicaciones que combinan lectura de sensores y comunicación por red."
    ]
  },
  {
    id: "stm32",
    nombre: "STM32 (familia ARM Cortex-M)",
    familia: "STMicroelectronics / 32 bits",
    arquitectura: "ARM Cortex-M0/M3/M4/M7 (según familia)",
    categoria: ["industria", "alto_rendimiento"],
    descripcion:
      "Amplia familia de microcontroladores de 32 bits muy usados en la industria. Hay modelos muy simples y otros muy potentes, con periféricos avanzados.",
    cuandoElegirlo: [
      "Cuando pensás en un producto más profesional o industrial.",
      "Si necesitás periféricos avanzados (CAN, USB, Ethernet, timers especiales…).",
      "Cuando el costo por unidad y la potencia importan mucho en un diseño final."
    ],
    caracteristicas: [
      "Gran variedad de líneas (F0, F1, F4, G4, H7, etc.).",
      "Relojes desde decenas hasta cientos de MHz.",
      "ADC y DAC de alta resolución, timers avanzados, interfaces de comunicación múltiples.",
      "Herramientas como STM32CubeMX para configurar pines y periféricos.",
      "Se programan normalmente en C/C++ con HAL/LL o CMSIS."
    ],
    ventajas: [
      "Muy flexibles: hay un STM32 para casi cualquier necesidad.",
      "Muy extendidos en el mundo industrial y de productos comerciales.",
      "Documentación y herramientas oficiales bastante completas."
    ],
    desventajas: [
      "Curva de aprendizaje más alta que Arduino clásico.",
      "Configuración de reloj, periféricos y pines más compleja.",
      "Menos “plug & play” para principiantes."
    ],
    usosTipicos: [
      "Control de motores (trifásicos, BLDC) y sistemas de potencia.",
      "Equipos de medición industrial, PLCs pequeños, data loggers avanzados.",
      "Instrumentación, adquisición de datos de alta velocidad.",
      "Productos comerciales donde se cuida mucho el costo por unidad."
    ]
  },
  {
    id: "pic",
    nombre: "Microcontroladores PIC",
    familia: "Microchip / 8, 16 y 32 bits",
    arquitectura: "PIC16/PIC18 (8 bits), dsPIC (16 bits), PIC32 (MIPS/ARM-like)",
    categoria: ["industria"],
    descripcion:
      "Clásicos en la industria y en la enseñanza. Hoy conviven con AVR y ARM, pero siguen presentes por robustez y disponibilidad en catálogos industriales.",
    cuandoElegirlo: [
      "Cuando en una empresa ya existe toda una línea de productos con PIC.",
      "Si necesitás microcontroladores económicos y robustos para tareas dedicadas.",
      "Cuando usás herramientas de Microchip (MPLAB X, compiladores XC)."
    ],
    caracteristicas: [
      "Familias de 8, 16 y 32 bits según la gama.",
      "Periféricos integrados para control: ADC, PWM, comparadores, timers, UART, etc.",
      "Muchos encapsulados y rangos de temperatura industrial.",
      "Ecosistema de herramientas y programadores propios (MPLAB, Pickit, etc.)."
    ],
    ventajas: [
      "Muy robustos y probados en ambiente industrial.",
      "Gran variedad de modelos pequeños y económicos.",
      "Documentación y notas de aplicación para muchísimos casos."
    ],
    desventajas: [
      "Entorno algo más “duro” para principiantes comparado con Arduino.",
      "Menor cantidad de ejemplos comunitarios modernos que ESP32/STM32.",
      "Diferencias de arquitectura entre familias pueden requerir reaprender cosas."
    ],
    usosTipicos: [
      "Controladores embebidos en placas industriales.",
      "Pequeños módulos dedicados (control de bombas, ventiladores, electroválvulas).",
      "Productos que se fabrican hace años y ya fueron diseñados con PIC."
    ]
  },
  {
    id: "rp2040",
    nombre: "Raspberry Pi Pico (RP2040)",
    familia: "Raspberry Pi / 32 bits",
    arquitectura: "ARM Cortex-M0+ doble núcleo @ 133 MHz",
    categoria: ["inicio", "educacion", "alto_rendimiento"],
    descripcion:
      "El microcontrolador de Raspberry Pi. Combina potencia, bajo precio y buena documentación. Ideal para aprender 32 bits y para proyectos donde el costo es clave.",
    cuandoElegirlo: [
      "Cuando querés algo más potente que un Arduino de 8 bits sin gastar mucho.",
      "Para aprender a programar microcontroladores de 32 bits con buen soporte.",
      "Cuando necesitás muchos GPIO y periféricos en un proyecto económico."
    ],
    caracteristicas: [
      "Doble núcleo ARM Cortex-M0+ a 133 MHz.",
      "26 GPIO con funciones múltiples (ADC, PWM, I2C, SPI, UART…).",
      "Precio muy bajo para la potencia que ofrece.",
      "Se programa en C/C++ o MicroPython; arranca como si fuera un pendrive USB.",
      "Buena documentación oficial de la fundación Raspberry Pi."
    ],
    ventajas: [
      "Excelente relación costo/rendimiento.",
      "Buen entorno para educación y prototipado.",
      "Permite proyectos bastante complejos con bajo costo de hardware."
    ],
    desventajas: [
      "No trae WiFi/Bluetooth integrado en la versión básica (sí en la Pico W).",
      "Menos “ecosistema de shields” comparado con Arduino.",
      "Requiere entender bien la documentación del RP2040 para exprimirlo al máximo."
    ],
    usosTipicos: [
      "Proyectos de control y automatización económicos.",
      "Instrumentos de medición y pequeños osciloscopios/analizadores lógicos DIY.",
      "Sistemas de registro de datos (dataloggers) y controladores de bajo costo."
    ]
  }
];

const MicrocontroladoresCheatSheet: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="page-panel sheet">
        {/* Cabecera */}
        <header className="sheet-header">
          <span className="sheet-pill">Microcontroladores</span>
          <h1 className="page-title sheet-title">
            Apunte de microcontroladores para electrónica y automatización
          </h1>
          <p className="sheet-subtitle">
            Qué es un microcontrolador, diferencias entre familias típicas
            (Arduino, ESP32, STM32, PIC, RP2040) y una guía rápida para elegir
            el más adecuado según el proyecto.
          </p>
        </header>

        {/* Navegación interna */}
        <nav className="elec-nav">
          <a href="#que-es" className="elec-nav-item">
            ¿Qué es un microcontrolador?
          </a>
          <a href="#resumen-rapido" className="elec-nav-item">
            Resumen comparativo
          </a>
          {MICROCONTROLADORES.map((mcu) => (
            <a key={mcu.id} href={`#${mcu.id}`} className="elec-nav-item">
              {mcu.nombre}
            </a>
          ))}
          <a href="#guia-eleccion" className="elec-nav-item">
            Guía para elegir
          </a>
        </nav>

        {/* Sección: qué es un microcontrolador */}
        <section id="que-es" className="sheet-section">
          <h2 className="sheet-section-title">¿Qué es un microcontrolador?</h2>
          <p className="sheet-text">
            Un <strong>microcontrolador</strong> es un circuito integrado que
            contiene en un mismo chip:
          </p>
          <ul className="sheet-list">
            <li>Un microprocesador (la “CPU”).</li>
            <li>Memoria de programa (Flash) y de datos (RAM, a veces EEPROM).</li>
            <li>
              Periféricos de entrada/salida: pines digitales, conversores
              analógico/digital (ADC), temporizadores, PWM, interfaces serie
              (UART, I²C, SPI, CAN, USB, etc.).
            </li>
          </ul>
          <p className="sheet-text">
            La idea es tener un “pequeño computador” dedicado, pensado para
            controlar dispositivos físicos: motores, relés, sensores, pantallas,
            etc. A diferencia de una PC, suele ejecutar un solo programa muy
            específico y optimizado para la tarea.
          </p>
        </section>

        {/* Resumen comparativo en tabla */}
        <section id="resumen-rapido" className="sheet-section">
          <h2 className="sheet-section-title">Resumen rápido de familias</h2>
          <p className="sheet-text-small">
            Tabla orientativa para elegir rápido según el tipo de proyecto. No
            reemplaza leer cada sección, pero te da un panorama general.
          </p>

          <div className="page-table-container">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ padding: "4px", borderBottom: "1px solid #374151", textAlign: "left" }}>
                    Familia / Placa
                  </th>
                  <th style={{ padding: "4px", borderBottom: "1px solid #374151", textAlign: "left" }}>
                    Mejor para
                  </th>
                  <th style={{ padding: "4px", borderBottom: "1px solid #374151", textAlign: "left" }}>
                    Comentario
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "4px" }}>Arduino Uno / Nano</td>
                  <td style={{ padding: "4px" }}>Inicio, educación, proyectos simples</td>
                  <td style={{ padding: "4px" }}>
                    Excelentes para aprender entradas/salidas y comenzar con
                    automatización básica.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>Arduino Mega</td>
                  <td style={{ padding: "4px" }}>Muchos pines, paneles con muchos I/O</td>
                  <td style={{ padding: "4px" }}>
                    Cuando un Uno se queda corto en pines o memoria.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>ESP32</td>
                  <td style={{ padding: "4px" }}>IoT, domótica conectada, WiFi/Bluetooth</td>
                  <td style={{ padding: "4px" }}>
                    Ideal para proyectos que se configuran o se monitorizan por
                    red.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>STM32</td>
                  <td style={{ padding: "4px" }}>Industrial, alta precisión, motores</td>
                  <td style={{ padding: "4px" }}>
                    Orientado a diseños más profesionales y productos finales.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>PIC</td>
                  <td style={{ padding: "4px" }}>Sistemas embebidos clásicos, industria</td>
                  <td style={{ padding: "4px" }}>
                    Muy usados donde ya existe una base instalada con Microchip.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "4px" }}>Raspberry Pi Pico (RP2040)</td>
                  <td style={{ padding: "4px" }}>32 bits económicos, educación, control</td>
                  <td style={{ padding: "4px" }}>
                    Muy buena potencia a bajo costo, ideal para aprender 32 bits.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Secciones por microcontrolador */}
        {MICROCONTROLADORES.map((mcu) => (
          <section key={mcu.id} id={mcu.id} className="sheet-section">
            <h2 className="sheet-section-title">{mcu.nombre}</h2>
            <p className="sheet-text">
              <strong>Familia:</strong> {mcu.familia}
            </p>
            <p className="sheet-text">
              <strong>Arquitectura:</strong> {mcu.arquitectura}
            </p>
            <p className="sheet-text">{mcu.descripcion}</p>

            <div className="formula-block">
              <span className="formula-tag">¿Cuándo conviene elegirlo?</span>
              <ul className="sheet-list">
                {mcu.cuandoElegirlo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="formula-block">
              <span className="formula-tag">Características típicas</span>
              <ul className="sheet-list">
                {mcu.caracteristicas.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="formula-block">
              <span className="formula-tag">Ventajas</span>
              <ul className="sheet-list">
                {mcu.ventajas.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="formula-block">
              <span className="formula-tag">Desventajas</span>
              <ul className="sheet-list">
                {mcu.desventajas.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="formula-block">
              <span className="formula-tag">Usos típicos</span>
              <ul className="sheet-list">
                {mcu.usosTipicos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* Guía general para elegir */}
        <section id="guia-eleccion" className="sheet-section">
          <h2 className="sheet-section-title">Guía práctica para elegir microcontrolador</h2>

          <div className="formula-block">
            <span className="formula-tag">Pasos recomendados</span>
            <ul className="sheet-list">
              <li>
                <strong>1. Definir el proyecto:</strong> ¿qué debe hacer? ¿Qué
                va a medir? ¿Qué va a controlar?
              </li>
              <li>
                <strong>2. Contar entradas y salidas:</strong> cuántos sensores,
                cuántos actuadores, cuántos botones, LEDs, relés, etc.
              </li>
              <li>
                <strong>3. Ver necesidades de comunicación:</strong> ¿necesitás
                WiFi, Bluetooth, USB, RS-485, CAN?
              </li>
              <li>
                <strong>4. Estimar la complejidad del software:</strong> ¿es un
                programa simple o tiene muchas funciones, menús, registros,
                cálculos?
              </li>
              <li>
                <strong>5. Pensar en el entorno:</strong> ¿es un prototipo de
                escritorio, domótica hogareña o industria pesada?
              </li>
              <li>
                <strong>6. Costo y disponibilidad:</strong> ¿se consigue fácil
                en tu país? ¿el precio es razonable para producir varias
                unidades?
              </li>
            </ul>
          </div>

          <div className="formula-block">
            <span className="formula-tag">Reglas rápidas</span>
            <ul className="sheet-list">
              <li>
                <strong>Para aprender y prototipos sencillos:</strong> Arduino
                Uno / Nano, Mega si necesitás muchos pines.
              </li>
              <li>
                <strong>Para proyectos conectados (WiFi/Bluetooth):</strong>{" "}
                ESP32 o alguna variante con WiFi integrada (ESP8266, ESP32-C3,
                etc.).
              </li>
              <li>
                <strong>Para industria y productos más serios:</strong> STM32 o
                PIC, según ecosistema y experiencia previa.
              </li>
              <li>
                <strong>Para 32 bits económicos con buena documentación:</strong>{" "}
                Raspberry Pi Pico (RP2040).
              </li>
            </ul>
          </div>

          <p className="sheet-text-small">
            Tip: muchas veces es mejor empezar el prototipo con algo cómodo
            (Arduino, ESP32 con Arduino IDE) y luego, si el proyecto escala,{" "}
            migrar a un microcontrolador más específico para una versión
            “industrial” o de producto.
          </p>
        </section>

        <footer className="sheet-footer">
          <p className="sheet-text-small">
            Este apunte está pensado como referencia rápida para tus proyectos
            de electrónica, automatización y domótica. Podés extenderlo con más
            familias (MSP430, NRF52, etc.) o agregar tablas con consumos,
            encapsulados, precios, etc.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MicrocontroladoresCheatSheet;
