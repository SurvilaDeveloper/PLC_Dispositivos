// src/components/NormativaIndustrialAMBA.tsx

const NormativaIndustrialAMBA: React.FC = () => {
  return (
    <div className="page-wrapper">
      <header className="sheet-header">
        <div className="sheet-pill">
          Instalaciones eléctricas · Industria · AMBA
        </div>

        <h1 className="sheet-title">
          Marco técnico y regulatorio para instalaciones industriales en AMBA
        </h1>

        <p className="sheet-subtitle">
          Guía para separar las referencias técnicas de diseño de las exigencias
          legales, laborales, jurisdiccionales y de suministro. “AMBA” no es una
          única jurisdicción eléctrica: la autoridad aplicable depende de la
          ubicación exacta del establecimiento y de su distribuidora.
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
            href="https://www.argentina.gob.ar/normativa/recurso/32030/dto351-1979-anexo6/htm"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            Decreto 351/79 · Anexo VI
          </a>

          <a
            href="https://www.argentina.gob.ar/enre/normativa/reglamentos"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            ENRE · reglamentos
          </a>

          <a
            href="https://buenosaires.gob.ar/gcaba_historico/reglamentos-tecnicos-del-codigo-de-edificacion"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            CABA · Reglamentos Técnicos
          </a>
        </div>
      </header>

      <nav className="nav-buttons" aria-label="Secciones de normativa industrial">
        <a href="#aea" className="btn">AEA 90364</a>
        <a href="#laboral" className="btn">Higiene y seguridad</a>
        <a href="#suministro" className="btn">Suministro</a>
        <a href="#local" className="btn">Jurisdicción local</a>
        <a href="#especiales" className="btn">Normas especiales</a>
        <a href="#metodo" className="btn">Método de verificación</a>
      </nav>

      <main className="page-wrapper">
        <section id="aea" className="sheet-section">
          <h2 className="sheet-section-title">
            1. AEA 90364 como referencia técnica para baja tensión
          </h2>

          <p className="sheet-text">
            La <strong>AEA 90364</strong> define criterios para diseño,
            instalación y verificación de instalaciones eléctricas seguras en
            inmuebles y está basada en IEC 60364, adaptada al contexto
            argentino.
          </p>

          <p className="sheet-text">
            Para una planta industrial no alcanza con citar genéricamente
            “AEA 90364”. Deben identificarse las partes generales y las secciones
            particulares que correspondan al proyecto, al ambiente y a los
            riesgos presentes.
          </p>

          <p className="sheet-text-small">
            AEA mantiene distintas ediciones de sus partes y secciones y publica
            revisiones en curso. La edición aplicable debe comprobarse al momento
            del proyecto; no se presupone que todo el conjunto tenga una única
            fecha de vigencia.
          </p>
        </section>

        <section id="laboral" className="sheet-section">
          <h2 className="sheet-section-title">
            2. Higiene y seguridad en el trabajo
          </h2>

          <p className="sheet-text">
            En establecimientos laborales también resulta relevante la
            <strong> Ley 19.587 de Higiene y Seguridad en el Trabajo</strong> y
            su Decreto Reglamentario <strong>351/79</strong>.
          </p>

          <p className="sheet-text">
            El Capítulo 14 y el Anexo VI del Decreto 351/79 contienen
            prescripciones sobre instalaciones eléctricas, niveles de tensión,
            trabajos eléctricos, bloqueo y otras medidas destinadas a evitar
            riesgos para personas y bienes.
          </p>

          <p className="sheet-text-small">
            Esta legislación laboral y una reglamentación técnica como AEA 90364
            cumplen funciones diferentes: una no debe presentarse como sustituto
            automático de la otra.
          </p>
        </section>

        <section id="suministro" className="sheet-section">
          <h2 className="sheet-section-title">
            3. Organismo regulador y distribuidora
          </h2>

          <p className="sheet-text">
            El organismo competente depende del área de concesión. En la
            información vigente del ENRE, los reglamentos de suministro y
            conexión se publican para <strong>EDENOR y EDESUR</strong>.
          </p>

          <p className="sheet-text">
            En áreas de la Provincia de Buenos Aires bajo concesiones
            provinciales debe revisarse el marco correspondiente y la
            documentación del <strong>OCEBA</strong>. EDELAP, por ejemplo,
            aparece actualmente bajo control de OCEBA.
          </p>

          <ul className="sheet-list">
            <li>
              Verificá el reglamento de suministro y conexión de la distribuidora.
            </li>

            <li>
              Confirmá los requisitos de medición, protección general,
              seccionamiento y documentación técnica para la potencia solicitada.
            </li>

            <li>
              Para ampliaciones o grandes demandas pueden existir estudios y
              condiciones de conexión específicos de la red que no se deducen de
              una tabla genérica.
            </li>
          </ul>
        </section>

        <section id="local" className="sheet-section">
          <h2 className="sheet-section-title">
            4. CABA, municipios y habilitación local
          </h2>

          <p className="sheet-text">
            La instalación interna también queda alcanzada por las reglas de la
            jurisdicción donde se encuentra el establecimiento. En CABA deben
            consultarse el Código de Edificación y sus
            <strong> Reglamentos Técnicos</strong>; el Gobierno de la Ciudad
            publica una compilación vigente 2026 y distingue la reglamentación
            aplicable según la fecha del expediente.
          </p>

          <p className="sheet-text">
            En municipios bonaerenses pueden existir ordenanzas, requisitos de
            habilitación y procedimientos propios. No corresponde asumir que una
            exigencia de CABA se aplica automáticamente a todo el AMBA.
          </p>

          <p className="sheet-text-small">
            También deben comprobarse las incumbencias, firmas, registros y
            certificados exigidos por la autoridad local para el tipo de obra y
            actividad.
          </p>
        </section>

        <section id="especiales" className="sheet-section">
          <h2 className="sheet-section-title">
            5. Normas especiales según el riesgo y el equipo
          </h2>

          <p className="sheet-text">
            Una instalación industrial puede requerir documentación adicional
            según su proceso, equipos y riesgos. Entre los temas que deben
            evaluarse cuando correspondan están:
          </p>

          <ul className="sheet-list">
            <li>Seguridad eléctrica de máquinas y tableros.</li>
            <li>Atmósferas potencialmente explosivas.</li>
            <li>Protección contra descargas atmosféricas y sobretensiones.</li>
            <li>Puesta a tierra y equipotencialidad.</li>
            <li>Instalaciones de emergencia y seguridad.</li>
            <li>Compatibilidad electromagnética y calidad de energía.</li>
            <li>Instalaciones de media tensión, si forman parte del proyecto.</li>
          </ul>

          <p className="sheet-text-small">
            En esos casos deben identificarse las normas IRAM, IEC, AEA u otras
            especificaciones que correspondan a cada sistema. Este apunte evita
            asignar un número de norma concreto sin comprobar antes su edición y
            campo de aplicación vigentes.
          </p>
        </section>

        <section id="metodo" className="sheet-section">
          <h2 className="sheet-section-title">
            6. Método práctico para verificar el marco aplicable
          </h2>

          <ol className="sheet-list">
            <li>
              <strong>Ubicación:</strong> determinar jurisdicción, municipio,
              distribuidora y organismo regulador.
            </li>

            <li>
              <strong>Suministro:</strong> revisar reglamento de conexión,
              potencia, medición y condiciones exigidas por la distribuidora.
            </li>

            <li>
              <strong>Instalación interna:</strong> identificar partes y
              secciones de AEA 90364 y normas de producto aplicables.
            </li>

            <li>
              <strong>Trabajo:</strong> aplicar Ley 19.587, Decreto 351/79 y las
              reglas específicas de higiene y seguridad que correspondan.
            </li>

            <li>
              <strong>Actividad y edificio:</strong> revisar Código de
              Edificación, habilitación, incendio, ambiente y ordenanzas locales.
            </li>

            <li>
              <strong>Riesgos especiales:</strong> incorporar las normas
              específicas para maquinaria, áreas clasificadas, rayos, media
              tensión u otros sistemas cuando sean pertinentes.
            </li>

            <li>
              <strong>Edición vigente:</strong> confirmar siempre fecha,
              versión y autoridad que adopta cada documento antes de cerrar el
              proyecto.
            </li>
          </ol>

          <p className="sheet-text-small">
            Esta secuencia es deliberadamente más conservadora que una lista
            única de “normas AMBA”: evita mezclar jurisdicciones y ayuda a
            documentar por qué cada requisito resulta aplicable.
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
            ENRE
          </a>

          <a
            href="https://www.oceba.gba.gov.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkNormativa"
          >
            OCEBA
          </a>
        </div>
      </main>

      <footer className="sheet-footer">
        Referencia didáctica. Para una obra industrial deben consultarse los
        textos oficiales vigentes y contar con profesionales con incumbencias
        adecuadas al proyecto y a la jurisdicción.
      </footer>
    </div>
  );
};

export default NormativaIndustrialAMBA;
