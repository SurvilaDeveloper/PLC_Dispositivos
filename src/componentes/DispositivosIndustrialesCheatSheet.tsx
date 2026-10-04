// src/components/DispositivosIndustrialesCheatSheet.tsx

const DispositivosIndustrialesCheatSheet: React.FC = () => {
  return (
    <div className="page-wrapper">
      <header className="sheet-header">
        <div className="sheet-pill">Instalaciones eléctricas · Industria</div>
        <h1 className="sheet-title">
          Apuntes de dispositivos eléctricos típicos en instalaciones industriales
        </h1>
        <p className="sheet-subtitle">
          Resumen de equipos de distribución, protección, maniobra, automatización
          y puesta a tierra. Las funciones se describen de forma general: la selección,
          coordinación y aplicación concreta dependen de la instalación y de las normas vigentes.
        </p>
      </header>

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
        <a href="#referencias" className="btn">Referencias técnicas</a>
      </nav>

      <main className="page-wrapper">
        <section id="alimentacion" className="elec-section">
          <h2 className="elec-section-title">
            1. Alimentación, subestaciones y distribución principal
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Transformadores de potencia y distribución</strong> — Adaptan niveles de
              tensión entre redes o sectores de la instalación. Los niveles concretos dependen
              del suministro y del proyecto.
            </li>
            <li>
              <strong>Celdas de media tensión</strong> — Conjuntos de aparamenta para maniobra,
              seccionamiento, protección y medida en redes de media tensión.
            </li>
            <li>
              <strong>Barras principales y barras de distribución</strong> — Sistemas de
              conductores rígidos de cobre o aluminio utilizados para distribuir energía dentro
              de tableros y conjuntos de aparamenta.
            </li>
            <li>
              <strong>Tablero General de Baja Tensión (TGBT)</strong> — Conjunto principal de
              distribución en baja tensión, con dispositivos de maniobra, protección, medida
              y salidas hacia otros tableros o cargas.
            </li>
            <li>
              <strong>Tableros de distribución</strong> — Distribuyen circuitos hacia sectores,
              máquinas o servicios específicos.
            </li>
          </ul>
        </section>

        <section id="proteccion" className="elec-section">
          <h2 className="elec-section-title">
            2. Dispositivos de protección
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Interruptores automáticos de caja moldeada (MCCB)</strong> — Interruptores
              automáticos de baja tensión empleados para protección y maniobra de circuitos.
              Muchos modelos permiten ajustar funciones de disparo, pero las prestaciones dependen
              del aparato concreto.
            </li>
            <li>
              <strong>Interruptores de aire (ACB)</strong> — Interruptores automáticos de baja
              tensión usados habitualmente en distribución principal y aplicaciones de elevada
              corriente, dentro del campo de la aparamenta de baja tensión.
            </li>
            <li>
              <strong>Interruptores en vacío (VCB)</strong> — Tecnología habitual en interruptores
              de media/alta tensión. No conviene agruparlos con los ACB como si fueran la misma
              categoría de baja tensión.
            </li>
            <li>
              <strong>Interruptores automáticos modulares (MCB)</strong> — Protegen contra
              sobrecorrientes en circuitos compatibles con sus valores nominales, curva y poder
              de corte. No incorporan necesariamente protección diferencial.
            </li>
            <li>
              <strong>Relés de protección</strong> — Miden magnitudes eléctricas o estados y,
              cuando detectan una condición definida como falla, ordenan la apertura u otra acción
              a un dispositivo de interrupción.
            </li>
            <li>
              <strong>RCD / RCCB / RCBO</strong> — Los dispositivos diferenciales detectan
              corrientes residuales. Un RCCB no incorpora protección contra sobrecorriente; un
              RCBO combina protección residual y de sobrecorriente. La sensibilidad, tipo y
              coordinación se seleccionan según el circuito y la función de protección requerida.
            </li>
            <li>
              <strong>Fusibles</strong> — Protegen contra sobrecorrientes según su categoría y
              características tiempo-corriente. No todas las categorías cubren del mismo modo
              sobrecargas y cortocircuitos; su coordinación con la carga y otros dispositivos
              forma parte del diseño.
            </li>
          </ul>
        </section>

        <section id="maniobra" className="elec-section">
          <h2 className="elec-section-title">
            3. Dispositivos de maniobra y seccionamiento
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Interruptores, seccionadores y switch-disconnectors</strong> — No son
              términos intercambiables. Un seccionador tiene como función esencial proporcionar
              aislamiento; la capacidad de establecer o interrumpir corriente en carga depende de
              la categoría y del dispositivo. Un switch-disconnector combina funciones de
              maniobra y seccionamiento conforme a sus características nominales.
            </li>
            <li>
              <strong>Contactores</strong> — Dispositivos para maniobra frecuente de motores y
              otras cargas. Por sí solos no deben presentarse como protección de cortocircuito:
              el circuito requiere coordinación con un dispositivo de protección adecuado.
            </li>
            <li>
              <strong>Relés de sobrecarga</strong> — Detectan condiciones de sobrecarga del motor
              y actúan sobre el circuito de mando o el arrancador. No sustituyen la protección
              contra cortocircuitos.
            </li>
            <li>
              <strong>Seccionamiento para mantenimiento</strong> — Proporciona una función de
              aislamiento cuando el dispositivo y la instalación están previstos para ello. La
              seguridad del trabajo requiere además el procedimiento de consignación/bloqueo,
              verificación de ausencia de tensión y las medidas aplicables.
            </li>
            <li>
              <strong>Enclavamientos de puertas y resguardos</strong> — Pueden impedir determinadas
              maniobras o detectar la posición de un resguardo. Cuando forman parte de una función
              de seguridad, deben seleccionarse y diseñarse dentro de la arquitectura de seguridad
              correspondiente; un sensor de proximidad común no es automáticamente un dispositivo
              de seguridad.
            </li>
          </ul>
        </section>

        <section id="motores" className="elec-section">
          <h2 className="elec-section-title">
            4. Motores, arranques y control de velocidad
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Motores trifásicos de inducción</strong> — Muy frecuentes en bombas,
              ventiladores, transportadores, compresores y otras cargas industriales.
            </li>
            <li>
              <strong>Arranque directo (DOL)</strong> — Conecta el motor directamente a la red
              mediante el equipo de maniobra previsto; es simple, pero produce una corriente y un
              par de arranque elevados respecto del régimen nominal.
            </li>
            <li>
              <strong>Arranque estrella-triángulo</strong> — Reduce la tensión por fase durante
              el arranque y con ello reduce tanto la corriente como el par de arranque. Sólo es
              aplicable cuando el motor y su conexión de bornes son compatibles con este método.
            </li>
            <li>
              <strong>Soft-starters</strong> — Regulan progresivamente la tensión aplicada al
              motor mediante electrónica de potencia para limitar esfuerzos eléctricos y
              mecánicos durante arranque y, según el equipo, parada.
            </li>
            <li>
              <strong>Variadores de velocidad (VFD / VSD)</strong> — Alimentan el motor con
              frecuencia y tensión controladas para regular velocidad y par. Su aplicación exige
              considerar protecciones, compatibilidad electromagnética, cableado y características
              del motor.
            </li>
            <li>
              <strong>Servodrives y accionamientos específicos</strong> — Controladores diseñados
              para servomotores, motores paso a paso, motores DC u otras tecnologías según la aplicación.
            </li>
          </ul>
        </section>

        <section id="control" className="elec-section">
          <h2 className="elec-section-title">
            5. Automatización, control y supervisión
          </h2>
          <ul className="elec-list">
            <li>
              <strong>PLC</strong> — Controladores programables para lógica secuencial,
              automatización, regulación y coordinación de equipos.
            </li>
            <li>
              <strong>HMI</strong> — Interfaces que permiten visualizar estados, alarmas,
              tendencias y consignas según el sistema.
            </li>
            <li>
              <strong>Controladores dedicados</strong> — Equipos para lazos o funciones
              específicas, como control PID o temperatura.
            </li>
            <li>
              <strong>DCS / SCADA</strong> — Arquitecturas de control y supervisión para
              procesos distribuidos y sistemas de mayor escala.
            </li>
            <li>
              <strong>Relés lógicos, temporizadores y contadores</strong> — Elementos de
              automatización para funciones discretas o de complejidad acotada.
            </li>
          </ul>
        </section>

        <section id="sensores" className="elec-section">
          <h2 className="elec-section-title">
            6. Sensores, actuadores y elementos de campo
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Sensores de proximidad inductivos, capacitivos y fotoeléctricos</strong> —
              Detectan objetos o condiciones sin contacto físico, según su principio de funcionamiento.
            </li>
            <li>
              <strong>Finales de carrera</strong> — Detectan posiciones mecánicas mediante accionamiento.
            </li>
            <li>
              <strong>Encoders y tacogeneradores</strong> — Proporcionan información de posición,
              velocidad o movimiento según el dispositivo.
            </li>
            <li>
              <strong>Transmisores de proceso</strong> — Convierten variables como presión,
              temperatura, nivel o caudal en señales normalizadas o comunicaciones digitales.
            </li>
            <li>
              <strong>Válvulas solenoides</strong> — Conmutan o pilotan circuitos de fluidos mediante
              accionamiento electromagnético.
            </li>
            <li>
              <strong>Actuadores eléctricos</strong> — Ejecutan movimientos sobre válvulas,
              compuertas u otros mecanismos.
            </li>
            <li>
              <strong>Contactores y relés de interfaz</strong> — Adaptan señales de control a
              cargas o circuitos de mando con las características apropiadas.
            </li>
          </ul>
        </section>

        <section id="iluminacion" className="elec-section">
          <h2 className="elec-section-title">
            7. Luminarias y sistemas de iluminación industrial
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Luminarias de nave / campanas industriales</strong> — Diseñadas para
              iluminar áreas de producción, depósitos y talleres según el ambiente.
            </li>
            <li>
              <strong>Luminarias para áreas clasificadas</strong> — Cuando existe una atmósfera
              potencialmente explosiva, deben utilizarse equipos con la certificación y modo de
              protección adecuados a la clasificación de la zona. “Estanca” y “Ex” no son sinónimos.
            </li>
            <li>
              <strong>Balizamiento y señalización luminosa</strong> — Ayudan a identificar
              recorridos, salidas y condiciones de seguridad.
            </li>
            <li>
              <strong>Iluminación de emergencia</strong> — Proporciona iluminación cuando falla
              la alimentación normal conforme al sistema y autonomía previstos.
            </li>
          </ul>
        </section>

        <section id="calidad" className="elec-section">
          <h2 className="elec-section-title">
            8. Calidad de energía y compensación
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Bancos de capacitores y reactores</strong> — Se emplean para compensación
              de potencia reactiva y, según el diseño, para controlar efectos de resonancia o armónicos.
            </li>
            <li>
              <strong>Filtros de armónicos</strong> — Atenúan determinadas componentes armónicas
              mediante soluciones pasivas, activas o híbridas.
            </li>
            <li>
              <strong>UPS / sistemas de alimentación ininterrumpida</strong> — Mantienen
              alimentación a cargas críticas durante perturbaciones o interrupciones dentro de
              sus límites de diseño.
            </li>
            <li>
              <strong>Reguladores de tensión</strong> — Mantienen o corrigen la tensión para
              aplicaciones específicas dentro de sus prestaciones.
            </li>
            <li>
              <strong>Analizadores de redes</strong> — Miden y registran magnitudes eléctricas,
              energía, armónicos y eventos según el instrumento.
            </li>
          </ul>
        </section>

        <section id="bajatension" className="elec-section">
          <h2 className="elec-section-title">
            9. Baja tensión auxiliar, comunicaciones y redes de datos
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Fuentes de alimentación DC</strong> — Alimentan PLC, relés, sensores,
              actuadores y otros equipos, frecuentemente a 24 Vdc.
            </li>
            <li>
              <strong>Conversores DC/DC y DC/AC</strong> — Adaptan niveles o tipos de alimentación.
            </li>
            <li>
              <strong>Switches industriales Ethernet</strong> — Interconectan equipos de red con
              prestaciones seleccionadas para el ambiente industrial.
            </li>
            <li>
              <strong>Gateways y conversores de protocolo</strong> — Integran redes y protocolos
              diferentes cuando la arquitectura lo requiere.
            </li>
            <li>
              <strong>Sistemas de comunicaciones y seguridad</strong> — Pueden incluir telefonía,
              intercomunicación, CCTV y otros subsistemas.
            </li>
          </ul>
        </section>

        <section id="tierra" className="elec-section">
          <h2 className="elec-section-title">
            10. Puesta a tierra, protección y equipotencialidad
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Conductores de protección (PE)</strong> — Vinculan las masas y otros puntos
              que corresponda con la red de protección y el borne principal de tierra según el
              esquema de la instalación. Su función no puede reducirse a “llevar la falla a una jabalina”.
            </li>
            <li>
              <strong>Electrodos, jabalinas, mallas y anillos de tierra</strong> — Forman parte
              del sistema de puesta a tierra cuando corresponde. El valor de resistencia obtenido
              depende del terreno, geometría, instalación y finalidad; ningún tipo de electrodo
              garantiza por sí solo una “baja resistencia”.
            </li>
            <li>
              <strong>Barras y conductores equipotenciales</strong> — Vinculan las partes
              conductoras previstas para limitar diferencias de potencial peligrosas y coordinar
              la protección contra choque eléctrico.
            </li>
            <li>
              <strong>Sistema de protección contra el rayo (SPCR/LPS)</strong> — Conjunto
              específico de captación, bajadas, puesta a tierra y medidas internas cuando el
              análisis de riesgo y la normativa lo requieren. Debe coordinarse con equipotencialidad
              y protección contra sobretensiones.
            </li>
          </ul>
        </section>

        <section id="accesorios" className="elec-section">
          <h2 className="elec-section-title">
            11. Tableros, envolventes y accesorios de instalación
          </h2>
          <ul className="elec-list">
            <li>
              <strong>Tableros y envolventes</strong> — Se seleccionan, entre otros criterios,
              por material, dimensiones, disipación térmica y grados de protección como IP e IK.
              Para áreas clasificadas, la aptitud Ex corresponde a requisitos y certificaciones
              específicos; no es otro “grado IP”.
            </li>
            <li>
              <strong>Cajas de derivación y cajas de campo</strong> — Alojan conexiones y
              derivaciones manteniendo las condiciones ambientales y mecánicas requeridas.
            </li>
            <li>
              <strong>Borneras y regletas</strong> — Proporcionan puntos de conexión ordenados
              y adecuados a la corriente, tensión y tipo de conductor.
            </li>
            <li>
              <strong>Cableado de potencia y control</strong> — Se selecciona según corriente,
              tensión, ambiente, movimiento, compatibilidad electromagnética y demás condiciones
              de servicio.
            </li>
            <li>
              <strong>Bandejas, escalerillas y ductos</strong> — Soportan y conducen cables,
              con dimensionado y ocupación acordes al proyecto.
            </li>
            <li>
              <strong>Prensasestopas, pasacables y conectores industriales</strong> — Proporcionan
              entrada, fijación, estanqueidad o alivio de tracción según el producto.
            </li>
            <li>
              <strong>Identificación y señalización</strong> — Facilitan operación,
              mantenimiento y seguridad mediante marcado coherente de equipos y circuitos.
            </li>
          </ul>
        </section>

        <section id="referencias" className="elec-section">
          <h2 className="elec-section-title">
            12. Referencias técnicas primarias
          </h2>
          <ul className="sheet-list">
            <li>
              <a href="https://webstore.iec.ch/en/publication/66277" target="_blank" rel="noopener noreferrer">
                IEC 60947-2 — interruptores automáticos de baja tensión
              </a>
            </li>
            <li>
              <a href="https://webstore.iec.ch/en/publication/107159" target="_blank" rel="noopener noreferrer">
                IEC 60947-3 — interruptores, seccionadores y switch-disconnectors
              </a>
            </li>
            <li>
              <a href="https://webstore.iec.ch/en/publication/74487" target="_blank" rel="noopener noreferrer">
                IEC 60947-4-1 — contactores y arrancadores de motor
              </a>
            </li>
            <li>
              <a href="https://webstore.iec.ch/en/publication/99635" target="_blank" rel="noopener noreferrer">
                IEC 62271-100 — interruptores AC para sistemas por encima de 1 kV
              </a>
            </li>
            <li>
              <a href="https://webstore.iec.ch/en/publication/1882" target="_blank" rel="noopener noreferrer">
                IEC 60364-5-54 — puesta a tierra y conductores de protección
              </a>
            </li>
          </ul>
          <p className="elec-text-small">
            Estas referencias delimitan funciones y familias de requisitos. La aplicación
            concreta en Argentina exige verificar además AEA/IRAM, reglamentación laboral,
            jurisdicción y condiciones de la distribuidora.
          </p>
        </section>
      </main>

      <footer className="elec-footer">
        Apuntes técnicos con fines educativos. Para proyectos reales deben verificarse
        las normas vigentes, la coordinación de protecciones y las condiciones específicas
        de la instalación con intervención profesional cuando corresponda.
      </footer>
    </div>
  );
};

export default DispositivosIndustrialesCheatSheet;
