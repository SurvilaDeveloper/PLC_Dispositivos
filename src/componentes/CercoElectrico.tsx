const CercoElectrico: React.FC = () => {
  return (
    <article className="sheet">
      <header className="sheet-header">
        <div className="sheet-pill">Seguridad perimetral</div>
        <h1 className="sheet-title">Cerco eléctrico para viviendas</h1>
        <p className="sheet-subtitle">
          Qué es, cómo funciona, componentes, criterios de instalación,
          mantenimiento, seguridad y normativa.
        </p>
      </header>

      <section className="formula-block-warning">
        <div className="tag">Advertencia</div>
        <p>
          Un cerco eléctrico de seguridad <strong>no</strong> consiste en
          conectar una reja o un alambrado directamente a la red domiciliaria.
          Debe utilizar un energizador diseñado específicamente para esta
          función y una instalación compatible con el fabricante y la
          reglamentación aplicable.
        </p>
        <p>
          La instalación real debe ser evaluada por personal competente. La
          admisibilidad puede cambiar según municipio, código de edificación,
          ubicación del cerco, acceso desde la vía pública o reglas de
          copropiedad.
        </p>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">1. ¿Qué es?</h2>
        <p className="sheet-text">
          Es un sistema de seguridad perimetral formado por conductores
          electrificados mediante pulsos controlados. Su finalidad principal es
          disuadir el ingreso y, en sistemas supervisados, detectar cortes,
          derivaciones o manipulaciones del perímetro.
        </p>
        <p className="sheet-text">
          La IEC 60335-2-76 contempla específicamente los energizadores para
          cercos eléctricos, incluidos los utilizados como cercos de seguridad.
        </p>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">2. ¿Cómo funciona?</h2>

        <div className="formula-block">
          <div className="tag">Principio eléctrico</div>
          <p>
            El energizador toma energía de una fuente prevista por el fabricante
            y la transforma en <strong>pulsos de alta tensión y energía
            limitada</strong>, separados en el tiempo.
          </p>
          <p>
            Si una persona, animal u objeto conductor establece un camino
            eléctrico entre el conductor activo y el retorno del sistema, puede
            circular una corriente impulsiva. La seguridad depende de que el
            energizador controle correctamente la forma y la energía de esos
            pulsos.
          </p>
        </div>

        <div className="formula-block">
          <div className="tag">Diagrama conceptual</div>
          <pre className="arduino-code-block" aria-label="Diagrama conceptual del cerco eléctrico">
{`Red / batería
      │
      ▼
Protección y alimentación
      │
      ▼
  ENERGIZADOR
      │ salida pulsada
      ▼
Conductores del cerco
      │
      ├── contacto / fuga / intrusión
      │
      ▼
Retorno por tierra o conductor de retorno
      │
      └──────────────► Energizador

Opcional:
Energizador ──► alarma / sirena / monitoreo`}
          </pre>
        </div>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">3. Componentes principales</h2>
        <ul className="sheet-list">
          <li>
            <strong>Energizador:</strong> genera los pulsos controlados.
          </li>
          <li>
            <strong>Conductores:</strong> forman la barrera electrificada.
          </li>
          <li>
            <strong>Aisladores:</strong> separan los conductores de soportes,
            muros y estructuras.
          </li>
          <li>
            <strong>Soportes:</strong> mantienen la posición mecánica de los
            conductores.
          </li>
          <li>
            <strong>Cable de alta tensión:</strong> vincula el energizador con
            el perímetro cuando el diseño lo requiere.
          </li>
          <li>
            <strong>Puesta a tierra del energizador:</strong> forma parte del
            circuito de retorno.
          </li>
          <li>
            <strong>Carteles de advertencia:</strong> identifican el riesgo antes
            del contacto.
          </li>
          <li>
            <strong>Protección frente a sobretensiones:</strong> reduce el riesgo
            de daños por transitorios y tormentas.
          </li>
          <li>
            <strong>Salida de alarma:</strong> en equipos supervisados permite
            detectar fallas o intrusión.
          </li>
        </ul>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">
          4. Energizador vs. tensión de red
        </h2>

        <div className="formula-block">
          <div className="tag">Energizador específico</div>
          <ul>
            <li>produce pulsos separados en el tiempo;</li>
            <li>limita la energía entregada;</li>
            <li>está diseñado para alimentar un cerco;</li>
            <li>puede supervisar eléctricamente el perímetro.</li>
          </ul>
        </div>

        <div className="formula-block-warning">
          <div className="tag">Nunca</div>
          <p>
            No conectar el alambre directamente a 220 V ni improvisar la función
            mediante transformadores, fuentes o inversores que no estén
            específicamente diseñados y certificados para cercos eléctricos.
          </p>
        </div>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">
          5. Etapas generales de una instalación
        </h2>
        <ol className="sheet-list">
          <li>
            <strong>Relevar el perímetro.</strong> Analizar muros, rejas,
            portones, terrazas, vegetación, estructuras metálicas, zonas
            accesibles y líneas eléctricas próximas.
          </li>
          <li>
            <strong>Verificar la normativa.</strong> Confirmar qué permite la
            jurisdicción y si existen restricciones por cercanía a la vía
            pública o espacios comunes.
          </li>
          <li>
            <strong>Elegir un energizador apropiado.</strong> Debe ser un equipo
            específico para cerco de seguridad y dimensionado para el perímetro.
          </li>
          <li>
            <strong>Montar soportes, aisladores y conductores.</strong> El diseño
            debe evitar contactos accidentales y conservar su estabilidad
            mecánica.
          </li>
          <li>
            <strong>Resolver la alimentación.</strong> La parte conectada a la
            instalación del inmueble debe disponer de las protecciones y
            envolventes correspondientes.
          </li>
          <li>
            <strong>Ejecutar la puesta a tierra/retorno.</strong> Debe hacerse
            según el sistema indicado por el fabricante.
          </li>
          <li>
            <strong>Colocar señalización.</strong> Las personas deben poder
            reconocer la existencia del cerco antes de tocarlo.
          </li>
          <li>
            <strong>Medir y probar.</strong> La verificación se realiza con
            instrumentos apropiados para cercos, nunca tocando el conductor.
          </li>
        </ol>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">6. Puesta a tierra y retorno</h2>
        <p className="sheet-text">
          En muchos sistemas el suelo forma parte del camino de retorno hacia el
          energizador. Por eso una puesta a tierra deficiente puede disminuir
          mucho el funcionamiento del cerco.
        </p>

        <div className="formula-block">
          <div className="tag">No improvisar</div>
          <p>
            La tierra del energizador no debe conectarse arbitrariamente a
            cañerías, rejas, neutro u otros elementos metálicos disponibles.
          </p>
          <p>
            La relación entre la puesta a tierra funcional del cerco y la puesta
            a tierra de protección de la vivienda debe resolverse según el
            fabricante y la reglamentación aplicable.
          </p>
        </div>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">
          7. Retorno por suelo y retorno por conductor
        </h2>
        <ul className="sheet-list">
          <li>
            <strong>Retorno por suelo:</strong> el terreno y los electrodos forman
            parte del circuito eléctrico.
          </li>
          <li>
            <strong>Retorno por conductor:</strong> el diseño incorpora
            conductores de retorno para reducir la dependencia del terreno.
          </li>
        </ul>
        <p className="sheet-text">
          La elección depende del sistema, del suelo, del perímetro y de las
          instrucciones del fabricante.
        </p>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">
          8. Integración con alarma
        </h2>
        <p className="sheet-text">
          Un energizador de seguridad puede supervisar cambios importantes en
          las condiciones eléctricas del perímetro y activar una alarma o una
          entrada de una central.
        </p>
        <ul className="sheet-list">
          <li>conductor cortado;</li>
          <li>fuga o contacto persistente a tierra;</li>
          <li>vegetación excesiva;</li>
          <li>intento de puenteo;</li>
          <li>falla de alimentación;</li>
          <li>apertura del gabinete, si el equipo dispone de tamper.</li>
        </ul>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">
          9. Ubicación y seguridad mecánica
        </h2>
        <ul className="sheet-list">
          <li>
            Evitar puntos donde una persona pueda alcanzar accidentalmente el
            conductor durante una circulación normal.
          </li>
          <li>
            Analizar balcones, terrazas, escaleras, árboles, portones y objetos
            desde los cuales alguien pueda aproximarse.
          </li>
          <li>
            Utilizar aisladores y soportes aptos para intemperie y exposición UV
            cuando corresponda.
          </li>
          <li>
            Mantener vegetación alejada porque puede provocar fugas y falsas
            alarmas.
          </li>
          <li>
            Respetar distancias de seguridad respecto de otras instalaciones y
            líneas eléctricas.
          </li>
        </ul>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">10. Señalización</h2>
        <p className="sheet-text">
          La señalización es parte del sistema de seguridad. Debe advertir
          claramente la presencia del cerco eléctrico antes de que una persona
          tenga contacto con él.
        </p>
        <p className="sheet-text">
          IEC 60335-2-76 contiene requisitos específicos relacionados con
          energizadores y cercos; para una instalación real debe consultarse la
          edición aplicable y las reglas de la jurisdicción.
        </p>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">
          11. Tormentas y sobretensiones
        </h2>
        <p className="sheet-text">
          Un cerco exterior es una estructura extensa y expuesta, capaz de
          recibir sobretensiones inducidas durante tormentas.
        </p>
        <ul className="sheet-list">
          <li>usar accesorios previstos por el fabricante;</li>
          <li>mantener correctamente la puesta a tierra;</li>
          <li>evitar recorridos innecesarios hacia el interior del inmueble;</li>
          <li>revisar el sistema luego de tormentas o fallas importantes.</li>
        </ul>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">12. Mantenimiento</h2>
        <ul className="sheet-list">
          <li>estado de aisladores y soportes;</li>
          <li>continuidad y tensión mecánica de los conductores;</li>
          <li>vegetación y suciedad;</li>
          <li>conexiones y empalmes;</li>
          <li>puesta a tierra;</li>
          <li>gabinete y alimentación;</li>
          <li>carteles de advertencia;</li>
          <li>batería de respaldo, si existe;</li>
          <li>alarma y monitoreo.</li>
        </ul>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">13. Fallas frecuentes</h2>
        <div className="formula-block">
          <ul>
            <li>
              <strong>Vegetación:</strong> produce pérdidas y reduce el desempeño.
            </li>
            <li>
              <strong>Aislador deteriorado:</strong> deriva energía a la
              estructura.
            </li>
            <li>
              <strong>Empalme deficiente:</strong> introduce resistencia o
              discontinuidad.
            </li>
            <li>
              <strong>Tierra deficiente:</strong> perjudica el circuito de
              retorno.
            </li>
            <li>
              <strong>Conductor cortado:</strong> deja parte del perímetro fuera
              de servicio.
            </li>
            <li>
              <strong>Sobretensión:</strong> puede dañar el energizador.
            </li>
          </ul>
        </div>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">14. Qué no hacer</h2>
        <ul className="sheet-list">
          <li>conectar la red de 220 V directamente a la reja o alambre;</li>
          <li>usar energizadores caseros sin control de energía;</li>
          <li>usar el neutro como tierra del cerco;</li>
          <li>usar cañerías de gas o agua como electrodo;</li>
          <li>
            colocar el conductor donde pueda tocarse accidentalmente desde la vía
            pública o durante tareas normales;
          </li>
          <li>probar el cerco tocándolo con la mano;</li>
          <li>
            asumir que porque un equipo se vende su instalación es legal en
            cualquier jurisdicción.
          </li>
        </ul>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">
          15. Normativa y jurisdicción
        </h2>
        <p className="sheet-text">
          No existe una única regla práctica que pueda aplicarse automáticamente
          a todos los inmuebles. Pueden intervenir normas de producto,
          reglamentación eléctrica, código de edificación, reglas municipales,
          condiciones del inmueble y responsabilidad frente a terceros.
        </p>
        <p className="sheet-text">
          ENRE recomienda no electrificar rejas y alambrados de manera
          peligrosa o improvisada. Un sistema construido con un energizador
          específico es técnicamente diferente de aplicar tensión de red a una
          reja, pero igualmente debe verificarse que su instalación sea admisible
          en la jurisdicción.
        </p>
        <p className="sheet-text">
          En CABA existen antecedentes administrativos restrictivos respecto de
          cercos electrificados expuestos hacia espacios de acceso público, por
          lo que no debe asumirse su autorización automática.
        </p>
      </section>

      <section className="sheet-section">
        <h2 className="sheet-section-title">16. Referencias oficiales</h2>
        <ul className="sheet-list">
          <li>
            <a
              href="https://webstore.iec.ch/en/publication/60232"
              target="_blank"
              rel="noreferrer"
            >
              IEC 60335-2-76:2018 — energizadores para cercos eléctricos
            </a>
          </li>
          <li>
            <a
              href="https://www.argentina.gob.ar/noticias/buenas-practicas-favor-del-uso-seguro-de-la-energia-electrica"
              target="_blank"
              rel="noreferrer"
            >
              ENRE — buenas prácticas para el uso seguro de la energía eléctrica
            </a>
          </li>
          <li>
            <a
              href="https://buenosaires.gob.ar/gcaba_historico/legalytecnica/normativa/sistema-de-informacion-normativa"
              target="_blank"
              rel="noreferrer"
            >
              CABA — Sistema de Información Normativa
            </a>
          </li>
        </ul>
      </section>

      <footer className="sheet-footer">
        <p className="sheet-text-small">
          Contenido educativo. No sustituye el manual del fabricante, la
          reglamentación vigente ni el proyecto y verificación de un profesional
          competente.
        </p>
      </footer>
    </article>
  );
};

export default CercoElectrico;
