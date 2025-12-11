// src/components/DispositivosIndustrialesCheatSheet.tsx

const DispositivosIndustrialesCheatSheet: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Encabezado */}
      <header className="sheet-header">
        <div className="sheet-pill">Instalaciones eléctricas · Industria</div>
        <h1 className="sheet-title">
          Apuntes de dispositivos eléctricos típicos en instalaciones industriales
        </h1>
        <p className="sheet-subtitle">
          Resumen de los principales equipos que aparecen en tableros, líneas de producción
          y sistemas de fuerza y control en entornos industriales. Contenido de carácter
          didáctico, no sustituye normas ni proyectos de ingeniería.
        </p>
      </header>

      {/* Navegación rápida */}
      <nav className="nav-buttons">
        <a href="#alimentacion" className="btn">Alimentación y subestaciones</a>
        <a href="#proteccion" className="btn">Protección</a>
        <a href="#maniobra" className="btn">Maniobra y seccionamiento</a>
        <a href="#motores" className="btn">Motores y arranques</a>
        <a href="#control" className="btn">Automatización y control</a>
        <a href="#sensores" className="btn">Sensores y actuadores</a>
        <a href="#iluminacion" className="btn">Iluminación industrial</a>
        <a href="#calidad" className="btn">Calidad de energía</a>
        <a href="#bajatension" className="btn">Baja tensión y datos</a>
        <a href="#tierra" className="btn">Puesta a tierra</a>
        <a href="#accesorios" className="btn">Tableros y accesorios</a>
      </nav>

      {/* Contenido */}
      <main className="page-wrapper">
        {/* 1. Alimentación y subestaciones */}
        <section id="alimentacion" className="elec-section">
          <h2 className="elec-section-title">
            1. Alimentación, subestaciones y distribución principal
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Transformadores de potencia y distribución</strong> — Reducción de media tensión
              (por ejemplo 13,2 kV) a baja tensión (400/230 V u otros niveles) para uso interno.
            </li>
            <li>
              <strong>Celdas de media tensión</strong> — Equipos encapsulados para maniobra y protección
              en media tensión: interruptores, seccionadores, fusibles, transformadores de medida.
            </li>
            <li>
              <strong>Barras principales y barras de distribución</strong> — Sistemas de barras de cobre
              o aluminio en tableros generales de baja tensión (TGBT).
            </li>
            <li>
              <strong>Tablero General de Baja Tensión (TGBT)</strong> — Punto central de distribución
              en baja tensión, donde se ubican interruptores generales, seccionadores, medidores
              internos y salidas hacia tableros secundarios.
            </li>
            <li>
              <strong>Tableros de distribución y de piso</strong> — Reparten la energía a distintos
              sectores (líneas de producción, servicios auxiliares, oficinas, etc.).
            </li>
          </ul>
        </section>

        {/* 2. Protección */}
        <section id="proteccion" className="elec-section">
          <h2 className="elec-section-title">
            2. Dispositivos de protección
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Interruptores automáticos de caja moldeada (MCCB)</strong> — Protección contra
              sobrecargas y cortocircuitos en corrientes medias/altas, con ajustes regulables.
            </li>
            <li>
              <strong>Interruptores de potencia (ACB/VCB)</strong> — Usados en tableros principales
              para grandes corrientes y altos poderes de corte.
            </li>
            <li>
              <strong>Interruptores termomagnéticos modulares (MCB)</strong> — Protección de circuitos
              de menor potencia, similares a los usados en instalaciones domiciliarias pero dimensionados
              para entornos industriales.
            </li>
            <li>
              <strong>Relés de protección</strong> — Dispositivos electrónicos que detectan fallas
              (sobrecorriente, falta de fase, desbalance, sobre/baaja tensión, etc.) y actúan sobre
              interruptores o contactores.
            </li>
            <li>
              <strong>Interruptores diferenciales (RCD/RCCB/RCBO)</strong> — Protección contra
              corrientes de fuga a tierra, en alimentación de tableros secundarios, tomas de servicio, etc.
            </li>
            <li>
              <strong>Fusibles tipo NH, gG, aM, etc.</strong> — Protecciones de respaldo en celdas,
              arranques de motores, bancos de capacitores y circuitos específicos.
            </li>
          </ul>
        </section>

        {/* 3. Maniobra y seccionamiento */}
        <section id="maniobra" className="elec-section">
          <h2 className="elec-section-title">
            3. Dispositivos de maniobra y seccionamiento
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Seccionadores bajo carga</strong> — Permiten abrir y cerrar circuitos en carga
              de manera segura (en media y baja tensión).
            </li>
            <li>
              <strong>Contactores</strong> — Relés de potencia para maniobra frecuente de motores,
              calefactores y otras cargas. Pueden combinarse con relés térmicos para formar arrancadores.
            </li>
            <li>
              <strong>Relés térmicos de sobrecarga</strong> — Protegen motores contra sobrecargas
              prolongadas, actuando sobre el contactor.
            </li>
            <li>
              <strong>Seccionadores de mantenimiento / enclavamientos mecánicos</strong> — Separan
              físicamente un equipo de la red para permitir trabajos seguros.
            </li>
            <li>
              <strong>Interruptores de proximidad para enclavamiento de puertas</strong> — Evitan
              la apertura de tableros energizados o la puesta en marcha con puertas abiertas.
            </li>
          </ul>
        </section>

        {/* 4. Motores y arranques */}
        <section id="motores" className="elec-section">
          <h2 className="elec-section-title">
            4. Motores, arranques y control de velocidad
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Motores trifásicos de inducción</strong> — Carga más común en la industria
              (bombas, ventiladores, cintas transportadoras, compresores).
            </li>
            <li>
              <strong>Arrancadores directos (DOL)</strong> — Arranque en línea; simplicidad, pero
              con alta corriente de arranque.
            </li>
            <li>
              <strong>Arrancadores estrella-triángulo</strong> — Reducen la corriente de arranque
              cambiando la conexión del motor tras un tiempo determinado.
            </li>
            <li>
              <strong>Soft-starters</strong> — Dispositivos electrónicos que limitan la corriente
              y el par de arranque mediante control del ángulo de disparo.
            </li>
            <li>
              <strong>Variadores de velocidad (VFD / VSD)</strong> — Controlan frecuencia y tensión
              para regular la velocidad de motores AC.
            </li>
            <li>
              <strong>Arranques para motores DC y servomotores</strong> — Drivers específicos para
              servos, motores paso a paso y motores de corriente continua.
            </li>
          </ul>
        </section>

        {/* 5. Automatización y control */}
        <section id="control" className="elec-section">
          <h2 className="elec-section-title">
            5. Automatización, control y supervisión
          </h2>
          <ul className="elec-list">
            <li>
              <strong>PLC (Controladores Lógicos Programables)</strong> — Núcleo de muchos sistemas
              de automatización industrial; ejecutan lógica de control secuencial y regulaciones.
            </li>
            <li>
              <strong>HMI (Interfaces Hombre-Máquina)</strong> — Pantallas táctiles o paneles que
              permiten al operador visualizar estados, alarmas y ajustar consignas.
            </li>
            <li>
              <strong>Controladores dedicados (PID, reguladores de temperatura, etc.)</strong> —
              Equipos para lazos de control específicos, independientes o integrados a PLC/DCS.
            </li>
            <li>
              <strong>DCS / SCADA</strong> — Sistemas de control distribuido y supervisión para
              plantas grandes, con múltiples PLCs y estaciones de operación.
            </li>
            <li>
              <strong>Relés lógicos, temporizadores y contadores electrónicos</strong> — Elementos
              de automatización de baja complejidad, a veces complementarios al PLC.
            </li>
          </ul>
        </section>

        {/* 6. Sensores y actuadores */}
        <section id="sensores" className="elec-section">
          <h2 className="elec-section-title">
            6. Sensores, actuadores y elementos de campo
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Sensores de proximidad inductivos, capacitivos y fotoeléctricos</strong> —
              Detección sin contacto de presencia, posición o paso de piezas.
            </li>
            <li>
              <strong>Finales de carrera (limit switches)</strong> — Detectan posiciones límite
              de mecanismos y máquinas.
            </li>
            <li>
              <strong>Encoders y tacogeneradores</strong> — Sensor de velocidad y posición para
              ejes de motores, transportadores, etc.
            </li>
            <li>
              <strong>Transmisores de proceso (presión, temperatura, nivel, caudal)</strong> —
              Proveen señal analógica (4–20 mA, 0–10 V) o digital (fieldbus) al sistema de control.
            </li>
            <li>
              <strong>Válvulas solenoides</strong> — Accionan actuadores neumáticos o hidráulicos
              mediante señales eléctricas.
            </li>
            <li>
              <strong>Actuadores eléctricos (motores de válvula, servos de compuerta, etc.)</strong> —
              Ejecutan movimientos controlados a partir de órdenes del sistema de control.
            </li>
            <li>
              <strong>Contactores y relés de potencia</strong> — Actúan como interfaz entre salidas
              de control (PLC, relés) y cargas de campo.
            </li>
          </ul>
        </section>

        {/* 7. Iluminación industrial */}
        <section id="iluminacion" className="elec-section">
          <h2 className="elec-section-title">
            7. Luminarias y sistemas de iluminación industrial
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Luminarias LED de nave / campanas industriales</strong> — Iluminan áreas
              de producción, depósitos y talleres.
            </li>
            <li>
              <strong>Luminarias estancas o a prueba de explosión (Ex)</strong> — Para zonas con
              atmósferas potencialmente explosivas, según normativa específica.
            </li>
            <li>
              <strong>Balizamiento y luminarias de seguridad</strong> — Señalización de salidas,
              zonas de riesgo y recorridos de evacuación.
            </li>
            <li>
              <strong>Iluminación de emergencia</strong> — Luces que se encienden ante falla de
              la alimentación normal para garantizar seguridad en caso de evacuación.
            </li>
          </ul>
        </section>

        {/* 8. Calidad de energía */}
        <section id="calidad" className="elec-section">
          <h2 className="elec-section-title">
            8. Calidad de energía y compensación
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Bancos de capacitores y reactores</strong> — Compensan energía reactiva y
              corrigen factor de potencia. Pueden ser fijos o automáticos.
            </li>
            <li>
              <strong>Filtros de armónicos (pasivos o activos)</strong> — Reducen distorsión
              armónica causada por variadores, rectificadores y otras cargas no lineales.
            </li>
            <li>
              <strong>Sistemas de UPS / SAIs</strong> — Proveen alimentación ininterrumpida para
              cargas críticas (control, informática, equipos sensibles).
            </li>
            <li>
              <strong>Estabilizadores y reguladores de tensión</strong> — Mantienen la tensión
              dentro de rangos aceptables para determinadas cargas.
            </li>
            <li>
              <strong>Analizadores de redes / medidores de calidad de energía</strong> — Registran
              tensiones, corrientes, potencias, armónicos, eventos de red, etc.
            </li>
          </ul>
        </section>

        {/* 9. Baja tensión, comunicaciones y redes */}
        <section id="bajatension" className="elec-section">
          <h2 className="elec-section-title">
            9. Baja tensión auxiliar, comunicaciones y redes de datos
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Fuentes de alimentación DC</strong> — Por ejemplo 24 Vdc para PLC, relés,
              sensores y dispositivos de campo.
            </li>
            <li>
              <strong>Conversores DC/DC y DC/AC</strong> — Adaptan niveles de tensión para distintos
              equipos auxiliares.
            </li>
            <li>
              <strong>Switches industriales Ethernet</strong> — Conectan PLC, HMI, PCs y otros
              equipos en red, a menudo con características rugerizadas.
            </li>
            <li>
              <strong>Gateways y conversores de protocolo</strong> — Integran redes Modbus, Profibus,
              Profinet, Ethernet/IP, CAN, etc.
            </li>
            <li>
              <strong>Sistemas de telefonía interna, intercomunicadores, CCTV</strong> — Parte de
              las comunicaciones y seguridad de planta.
            </li>
          </ul>
        </section>

        {/* 10. Puesta a tierra y protección contra descargas */}
        <section id="tierra" className="elec-section">
          <h2 className="elec-section-title">
            10. Puesta a tierra y protección contra descargas
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Red de puesta a tierra de protección (PE)</strong> — Conjunto de conductores,
              barras y jabalinas que garantizan la equipotencialidad y el desvío de corrientes de
              falla a tierra.
            </li>
            <li>
              <strong>Jabalinas, mallas y anillos de tierra</strong> — Elementos enterrados que
              proporcionan baja resistencia de puesta a tierra.
            </li>
            <li>
              <strong>Pararrayos y bajantes</strong> — Sistemas de protección contra descargas
              atmosféricas (SPDA).
            </li>
            <li>
              <strong>Barras de tierra y barras equipotenciales</strong> — Puntos de conexión
              para unir estructuras metálicas, tableros y masas de equipos.
            </li>
          </ul>
        </section>

        {/* 11. Tableros, envolventes y accesorios */}
        <section id="accesorios" className="elec-section">
          <h2 className="elec-section-title">
            11. Tableros, envolventes y accesorios de instalación
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Tableros metálicos o plásticos (IP, IK, EX, etc.)</strong> — Envolventes para
              equipos de maniobra, protección y control, con grados de protección adaptados al ambiente.
            </li>
            <li>
              <strong>Cajas de derivación y cajas de conexiones de campo</strong> — Permiten
              interconexión y derivación de cables cerca de máquinas o sensores.
            </li>
            <li>
              <strong>Borneras y regletas</strong> — Elementos de conexión ordenada dentro de
              tableros y cajas.
            </li>
            <li>
              <strong>Cableado de potencia y control</strong> — Cables apantallados, resistentes
              al aceite, alta flexibilidad para cadenas portacables, etc.
            </li>
            <li>
              <strong>Bandejas portacables, escalerillas, ductos y mangueras</strong> — Sistemas
              mecánicos de soporte y conducción de cables en planta.
            </li>
            <li>
              <strong>Prensasestopas, pasacables, conectores industriales</strong> — Aseguran
              entrada de cables con estanqueidad, alivio de tracción y protección mecánica.
            </li>
            <li>
              <strong>Etiquetas, marcadores y señalización</strong> — Identificación de cables,
              borneras, tableros, rutas de evacuación y zonas de riesgo.
            </li>
          </ul>
        </section>
      </main>

      <footer className="elec-footer">
        Apuntes generales de dispositivos eléctricos para instalaciones industriales.
        Para proyectos reales se deben seguir normas, reglamentos y criterios de ingeniería,
        con intervención de profesionales habilitados.
      </footer>
    </div>
  );
};

export default DispositivosIndustrialesCheatSheet;
