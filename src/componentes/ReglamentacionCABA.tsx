// src/components/ReglamentacionCABA.tsx

const ReglamentacionCABA: React.FC = () => {
  return (
    <div className="page-wrapper">
      <header className="sheet-header">
        <div className="sheet-pill">
          Instalaciones eléctricas · CABA · área EDENOR/EDESUR
        </div>

        <h1 className="sheet-title">
          Marco técnico y regulatorio para instalaciones domiciliarias
        </h1>

        <p className="sheet-subtitle">
          Síntesis didáctica para distinguir la reglamentación técnica AEA, los
          requisitos del ENRE para nuevos suministros y los Reglamentos Técnicos
          del Código de Edificación de CABA. La norma aplicable a una obra concreta
          depende de la jurisdicción, la distribuidora, el tipo de suministro y la
          fecha del trámite.
        </p>

        <div className="columner">
          <a
            href="https://aea.org.ar/ficha-tecnicas-reglamentaciones/aea90364/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            AEA 90364 · ficha oficial
          </a>

          <a
            href="https://aea.org.ar/ficha-tecnicas-reglamentaciones/aea-90364-secciones/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            AEA 90364 · secciones
          </a>

          <a
            href="https://www.argentina.gob.ar/enre/reglamentos/para-la-conexion-de-nuevos-suministros-domiciliarios"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            ENRE · nuevos suministros domiciliarios
          </a>

          <a
            href="https://buenosaires.gob.ar/gcaba_historico/reglamentos-tecnicos-del-codigo-de-edificacion"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            CABA · Reglamentos Técnicos vigentes
          </a>
        </div>
      </header>

      <nav className="nav-buttons" aria-label="Secciones de normativa domiciliaria">
        <a href="#aea" className="btn">AEA 90364</a>
        <a href="#viviendas" className="btn">Secciones 770 y 771</a>
        <a href="#enre" className="btn">ENRE</a>
        <a href="#caba" className="btn">CABA</a>
        <a href="#jurisdiccion" className="btn">Jurisdicción</a>
        <a href="#alcance" className="btn">Alcance</a>
      </nav>

      <main className="page-wrapper">
        <section id="aea" className="sheet-section">
          <h2 className="sheet-section-title">
            1. AEA 90364: reglamentación técnica
          </h2>

          <p className="sheet-text">
            La <strong>AEA 90364</strong>, elaborada por la Asociación
            Electrotécnica Argentina, establece criterios para el proyecto,
            ejecución y verificación de instalaciones eléctricas seguras en
            inmuebles. AEA informa que está basada en la serie IEC 60364,
            adaptada al contexto argentino.
          </p>

          <p className="sheet-text">
            Su campo técnico abarca, entre otros temas, protección contra
            choques eléctricos y sobrecorrientes, selección de componentes,
            características generales de la instalación, puesta a tierra y
            verificaciones.
          </p>

          <p className="sheet-text-small">
            Importante: AEA 90364 es un conjunto de partes y secciones con
            distintas ediciones. No conviene citar “AEA 90364” como si fuera un
            único documento inmutable. Antes de proyectar una obra debe
            verificarse qué parte o sección está vigente y cuál fue adoptada por
            la autoridad competente.
          </p>
        </section>

        <section id="viviendas" className="sheet-section">
          <h2 className="sheet-section-title">
            2. Secciones particulares para viviendas y locales unitarios
          </h2>

          <p className="sheet-text">
            Dentro de la Parte 7 de AEA 90364 existen reglas particulares que
            complementan, modifican o reemplazan prescripciones generales cuando
            resultan aplicables al lugar o uso correspondiente.
          </p>

          <ul className="sheet-list">
            <li>
              <strong>AEA 90364-7-770</strong> — Viviendas unifamiliares hasta
              63 A, clasificaciones BA2 y BD1.
            </li>

            <li>
              <strong>AEA 90364-7-771</strong> — Viviendas, oficinas y locales
              unitarios.
            </li>
          </ul>

          <p className="sheet-text-small">
            AEA publica actualmente la Sección 770 como edición 2017 y la
            Sección 771 como edición 2006, y además informa procesos de
            actualización en estudio. Por eso, para una obra real debe
            consultarse siempre el catálogo y el estado vigente publicado por
            AEA.
          </p>
        </section>

        <section id="enre" className="sheet-section">
          <h2 className="sheet-section-title">
            3. ENRE y conexión de nuevos suministros
          </h2>

          <p className="sheet-text">
            El ENRE mantiene un <strong>Reglamento para la Conexión de Nuevos
            Suministros</strong> en las áreas de concesión bajo su competencia.
            La página oficial vigente para nuevos suministros domiciliarios
            identifica expresamente a <strong>EDENOR y EDESUR</strong>.
          </p>

          <p className="sheet-text">
            Para usuarios residenciales alcanzados por ese régimen, el ENRE
            remite a las Resoluciones <strong>225/2011</strong> y
            <strong> 269/2012</strong>, exige condiciones de seguridad para la
            conexión y prevé la presentación de una declaración de conformidad
            de la instalación.
          </p>

          <p className="sheet-text-small">
            Este reglamento de conexión no reemplaza toda la normativa de la
            instalación interna. La propia regulación del ENRE distingue el
            alcance del suministro y remite el resto de la instalación a la
            reglamentación de la jurisdicción local correspondiente.
          </p>
        </section>

        <section id="caba" className="sheet-section">
          <h2 className="sheet-section-title">
            4. CABA: Código de Edificación y Reglamentos Técnicos
          </h2>

          <p className="sheet-text">
            En la Ciudad Autónoma de Buenos Aires, además de las exigencias que
            correspondan al suministro eléctrico, deben consultarse el
            <strong> Código de Edificación</strong> y sus
            <strong> Reglamentos Técnicos</strong>.
          </p>

          <p className="sheet-text">
            El Gobierno de la Ciudad publica un índice oficial de Reglamentos
            Técnicos y actualmente ofrece una compilación 2026. La propia página
            indica que la reglamentación aplicable debe consultarse según la
            fecha de caratulación del expediente.
          </p>

          <p className="sheet-text-small">
            Por ese motivo, estos apuntes no fijan una lista cerrada de
            requisitos de CABA: el profesional debe revisar el reglamento técnico
            vigente y la documentación exigida para el trámite concreto.
          </p>
        </section>

        <section id="jurisdiccion" className="sheet-section">
          <h2 className="sheet-section-title">
            5. No confundir ENRE, AMBA y Provincia de Buenos Aires
          </h2>

          <p className="sheet-text">
            “AMBA” es una referencia geográfica y no significa que todas las
            distribuidoras de la región estén sometidas al mismo organismo
            regulador.
          </p>

          <ul className="sheet-list">
            <li>
              Para las áreas de concesión de <strong>EDENOR y EDESUR</strong>,
              deben revisarse los reglamentos y resoluciones vigentes del ENRE.
            </li>

            <li>
              En otras áreas de la Provincia de Buenos Aires corresponde revisar
              el marco provincial, municipal y de la distribuidora. Por ejemplo,
              <strong> EDELAP</strong> aparece actualmente bajo control del
              <strong> OCEBA</strong>, no como distribuidora regulada por el ENRE.
            </li>
          </ul>
        </section>

        <section id="alcance" className="sheet-section">
          <h2 className="sheet-section-title">
            6. Cómo usar estos apuntes
          </h2>

          <ul className="sheet-list">
            <li>
              Usá AEA 90364 para identificar criterios técnicos y las partes o
              secciones aplicables al proyecto.
            </li>

            <li>
              Verificá después qué reglamentación adoptó la jurisdicción donde
              está la obra y qué documentación exige.
            </li>

            <li>
              Consultá los requisitos de conexión y suministro de la
              distribuidora y del organismo regulador competente.
            </li>

            <li>
              Comprobá las normas IRAM y otras normas de producto aplicables a
              cables, tableros, protecciones y demás componentes.
            </li>

            <li>
              Para una obra real, trabajá con profesionales o instaladores con
              las incumbencias y habilitaciones que exija la jurisdicción.
            </li>
          </ul>

          <p className="sheet-text-small">
            Este contenido es educativo y de orientación. No constituye una
            certificación de cumplimiento ni reemplaza los textos oficiales
            vigentes, el proyecto eléctrico, las verificaciones de obra o la
            intervención profesional requerida.
          </p>
        </section>

        <div className="columner">
          <a
            href="https://aea.org.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            Asociación Electrotécnica Argentina
          </a>

          <a
            href="https://www.argentina.gob.ar/enre/normativa/reglamentos"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            Reglamentos del ENRE
          </a>

          <a
            href="https://www.oceba.gba.gov.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            OCEBA · Provincia de Buenos Aires
          </a>
        </div>
      </main>

      <footer className="sheet-footer">
        Referencia didáctica. Verificá siempre la edición vigente de las normas y
        la autoridad competente para la ubicación y el tipo de instalación.
      </footer>
    </div>
  );
};

export default ReglamentacionCABA;
