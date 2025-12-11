// src/components/ReglamentacionCABA.tsx

const ReglamentacionCABA: React.FC = () => {
  return (
    <div className="page-wrapper">
      <header className="sheet-header">
        <div className="sheet-pill">Instalaciones eléctricas · CABA / AMBA</div>
        <h1 className="sheet-title">
          Apuntes sobre reglamentación para instalaciones eléctricas domiciliarias
        </h1>
        <p className="sheet-subtitle">
          Síntesis de los principales documentos técnicos y regulatorios que se
          toman como referencia en la Ciudad Autónoma de Buenos Aires y área
          Edenor/Edesur. Este material es sólo informativo y no reemplaza normas,
          reglamentos ni el trabajo de profesionales habilitados.
        </p>
        <div className="columner">
          <a href="https://drive.google.com/file/d/1V-wxAOlz50sWMIj-qDGDa-Pho2U_1DJo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="linkNormativa">Ver Reglamentación AEA 90364</a>
          <a href="https://drive.google.com/file/d/1BbTvRREQ34rYeNsr3Ahf3tG6b2fYc0gD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="linkNormativa">Ver Listado de Reglamentaciones de AEA</a>
          <a href="https://aea.org.ar/" target="_blank" rel="noopener noreferrer" className="linkNormativa">Sitio de Asociación Electrotécnica Argentina</a>
        </div>
      </header>

      <nav className="nav-buttons">
        <a href="#aea" className="btn">Reglamentación AEA 90364</a>
        <a href="#secciones" className="btn">Secciones para viviendas</a>
        <a href="#enre" className="btn">Reglamento de nuevos suministros</a>
        <a href="#codigo" className="btn">Código de edificación / normas</a>
        <a href="#alcance" className="btn">Alcance y limitaciones</a>
      </nav>

      <main className="page-wrapper">
        {/* 1. AEA 90364 */}
        <section id="aea" className="sheet-section">
          <h2 className="sheet-section-title">1. Reglamentación AEA 90364</h2>
          <p className="sheet-text">
            En Argentina, la referencia técnica básica para instalaciones
            eléctricas en inmuebles es la{" "}
            <strong>Reglamentación AEA 90364 – “Ejecución de instalaciones
              eléctricas en inmuebles”</strong>, elaborada por la Asociación
            Electrotécnica Argentina (AEA) y basada en normas internacionales
            como la serie IEC 60364, adaptadas al contexto local.
          </p>
          <p className="sheet-text">
            Esta reglamentación establece criterios de seguridad eléctrica,
            selección de materiales, cálculo de conductores, esquemas de puesta
            a tierra, protección contra choques eléctricos, sobrecorrientes,
            sobretensiones y otros aspectos relevantes de las instalaciones de
            baja tensión. Se aplica a viviendas, oficinas, comercios e
            industrias, con reglas generales y reglas particulares para distintos
            tipos de locales.
          </p>
        </section>

        {/* 2. Secciones específicas para viviendas */}
        <section id="secciones" className="sheet-section">
          <h2 className="sheet-section-title">
            2. Secciones AEA 90364 para viviendas
          </h2>
          <p className="sheet-text">
            Dentro de AEA 90364, la Parte 7 incluye reglas particulares para
            destinos o tipos de locales específicos. Para el caso de viviendas,
            se destacan dos secciones:
          </p>
          <ul className="sheet-list">
            <li>
              <strong>Sección 770</strong> — Viviendas unifamiliares hasta 63 A,
              clasificaciones BA2 y BD1. Define requisitos particulares para
              instalaciones domiciliarias de baja potencia típica, incluyendo
              cantidad mínima de circuitos, secciones mínimas de conductores,
              protección diferencial y otros puntos básicos de seguridad.
            </li>
            <li>
              <strong>Sección 771</strong> — Viviendas, oficinas y locales
              unitarios. Amplía y complementa criterios para instalaciones en
              unidades funcionales individuales, como departamentos, oficinas u
              otros locales. Incluye tablas de corrientes admisibles, criterios
              de distribución de circuitos y prescripciones de protección y
              verificación.
            </li>
          </ul>
          <p className="sheet-text-small">
            Estas secciones funcionan como reglas particulares que se apoyan en
            las partes generales de la AEA 90364. En muchos municipios y
            provincias se toma explícitamente AEA 90364 como reglamentación
            técnica de referencia para instalaciones eléctricas en inmuebles.
          </p>
        </section>

        {/* 3. Reglamento ENRE para nuevos suministros */}
        <section id="enre" className="sheet-section">
          <h2 className="sheet-section-title">
            3. Reglamento para la conexión de nuevos suministros domiciliarios
          </h2>
          <p className="sheet-text">
            En el Área Metropolitana de Buenos Aires (concesiones de Edenor,
            Edesur y Edelap), el Ente Nacional Regulador de la Electricidad
            (ENRE) aprobó el{" "}
            <strong>
              “Reglamento para la Conexión de Nuevos Suministros para
              Instalaciones Domiciliarias”
            </strong>.
          </p>
          <p className="sheet-text">
            Este reglamento establece las condiciones mínimas que deben cumplir
            las instalaciones internas para que la distribuidora autorice la
            conexión del suministro. Entre otros puntos, se contemplan:
          </p>
          <ul className="sheet-list">
            <li>
              Presencia de dispositivos de protección adecuados, incluyendo
              interruptores termomagnéticos y diferenciales.
            </li>
            <li>
              Correcta ejecución y dimensionamiento de la instalación interna,
              de acuerdo con normas técnicas vigentes.
            </li>
            <li>
              Existencia de puesta a tierra y conductores de protección.
            </li>
            <li>
              Verificación y certificación por parte de un profesional o
              instalador matriculado, según lo requieran las disposiciones
              locales y de la distribuidora.
            </li>
          </ul>
          <p className="sheet-text-small">
            Sin cumplir los requisitos de este reglamento, la empresa
            distribuidora puede rechazar la solicitud de conexión o
            reconexión del suministro domiciliario.
          </p>
        </section>

        {/* 4. Código de edificación, normas IRAM y ordenanzas locales */}
        <section id="codigo" className="sheet-section">
          <h2 className="sheet-section-title">
            4. Código de edificación, normas IRAM y regulaciones locales
          </h2>
          <p className="sheet-text">
            Además de la reglamentación AEA 90364 y de los reglamentos del ENRE,
            la Ciudad Autónoma de Buenos Aires cuenta con un{" "}
            <strong>Código de Edificación</strong> y normas complementarias que
            establecen condiciones mínimas para las instalaciones en edificios.
          </p>
          <p className="sheet-text">
            En general, estos marcos normativos remiten al cumplimiento de:
          </p>
          <ul className="sheet-list">
            <li>
              <strong>Normas IRAM</strong> aplicables a materiales y componentes
              eléctricos (cables, caños, tableros, accesorios, etc.).
            </li>
            <li>
              <strong>Reglamentación AEA 90364</strong> como base técnica para
              el diseño y ejecución de las instalaciones de baja tensión.
            </li>
            <li>
              <strong>Requisitos de la distribuidora</strong> (Edenor/Edesur),
              incluyendo el Reglamento de Nuevos Suministros y especificaciones
              de conexión.
            </li>
          </ul>
          <p className="sheet-text-small">
            El conjunto de Código de Edificación, normas IRAM, reglamentación
            AEA y reglamentos del ENRE define el marco de referencia para
            considerar una instalación eléctrica domiciliaria como segura y
            apta para ser conectada al servicio público.
          </p>
        </section>

        {/* 5. Alcance, seguridad y aclaraciones */}
        <section id="alcance" className="sheet-section">
          <h2 className="sheet-section-title">
            5. Alcance, seguridad y aclaraciones importantes
          </h2>
          <ul className="sheet-list">
            <li>
              La reglamentación AEA 90364 y los reglamentos del ENRE tienen como
              objetivo principal preservar la seguridad de las personas y los
              bienes frente a riesgos eléctricos (choques, incendios,
              sobretensiones, etc.).
            </li>
            <li>
              Las instalaciones domiciliarias deben ser proyectadas, ejecutadas
              y verificadas por{" "}
              <strong>profesionales o instaladores habilitados</strong>, de
              acuerdo con la normativa vigente y los requisitos de la
              distribuidora.
            </li>
            <li>
              La información resumida en estos apuntes tiene carácter{" "}
              <strong>meramente didáctico</strong>. No constituye asesoramiento
              técnico ni legal y no reemplaza la lectura de los documentos
              originales ni la intervención de especialistas.
            </li>
            <li>
              Cada jurisdicción puede tener ordenanzas y reglamentos
              adicionales; es responsabilidad del propietario y del
              profesional interviniente verificar las exigencias específicas
              aplicables al proyecto.
            </li>
          </ul>
          <p className="sheet-text-small">
            Para obtener el texto completo y actualizado de la reglamentación
            AEA 90364 y de los reglamentos del ENRE, se recomienda consultar
            las publicaciones oficiales de la Asociación Electrotécnica
            Argentina, del ENRE y de los organismos gubernamentales
            correspondientes.
          </p>
        </section>
        <div className="columner">
          <a href="https://drive.google.com/file/d/1V-wxAOlz50sWMIj-qDGDa-Pho2U_1DJo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="linkNormativa">Ver Reglamentación AEA 90364</a>
          <a href="https://drive.google.com/file/d/1BbTvRREQ34rYeNsr3Ahf3tG6b2fYc0gD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="linkNormativa">Ver Listado de Reglamentaciones de AEA</a>
          <a href="https://aea.org.ar/" target="_blank" rel="noopener noreferrer" className="linkNormativa">Sitio de Asociación Electrotécnica Argentina</a>
        </div>
      </main>

      <footer className="sheet-footer">
        Apuntes de referencia general sobre reglamentación para instalaciones
        eléctricas domiciliarias. Para cualquier obra real deben seguirse los
        textos oficiales vigentes y contar con la intervención de profesionales
        habilitados.
      </footer>
    </div>
  );
};

export default ReglamentacionCABA;
