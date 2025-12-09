// src/components/ReglamentacionCABA.tsx
import "./ReglamentacionCABA.css";

const ReglamentacionCABA: React.FC = () => {
  return (
    <div className="regla-wrapper">
      <header className="regla-header">
        <div className="regla-pill">Instalaciones eléctricas · CABA / AMBA</div>
        <h1 className="regla-title">
          Apuntes sobre reglamentación para instalaciones eléctricas domiciliarias
        </h1>
        <p className="regla-subtitle">
          Síntesis de los principales documentos técnicos y regulatorios que se
          toman como referencia en la Ciudad Autónoma de Buenos Aires y área
          Edenor/Edesur. Este material es sólo informativo y no reemplaza normas,
          reglamentos ni el trabajo de profesionales habilitados.
        </p>
        <a href="https://drive.google.com/file/d/1V-wxAOlz50sWMIj-qDGDa-Pho2U_1DJo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="linkNormativa">Ver Reglamentación AEA 90364</a>
      </header>

      <nav className="regla-nav">
        <a href="#aea" className="regla-nav-item">Reglamentación AEA 90364</a>
        <a href="#secciones" className="regla-nav-item">Secciones para viviendas</a>
        <a href="#enre" className="regla-nav-item">Reglamento de nuevos suministros</a>
        <a href="#codigo" className="regla-nav-item">Código de edificación / normas</a>
        <a href="#alcance" className="regla-nav-item">Alcance y limitaciones</a>
      </nav>

      <main className="regla-content">
        {/* 1. AEA 90364 */}
        <section id="aea" className="regla-section">
          <h2 className="regla-section-title">1. Reglamentación AEA 90364</h2>
          <p className="regla-text">
            En Argentina, la referencia técnica básica para instalaciones
            eléctricas en inmuebles es la{" "}
            <strong>Reglamentación AEA 90364 – “Ejecución de instalaciones
            eléctricas en inmuebles”</strong>, elaborada por la Asociación
            Electrotécnica Argentina (AEA) y basada en normas internacionales
            como la serie IEC 60364, adaptadas al contexto local.
          </p>
          <p className="regla-text">
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
        <section id="secciones" className="regla-section">
          <h2 className="regla-section-title">
            2. Secciones AEA 90364 para viviendas
          </h2>
          <p className="regla-text">
            Dentro de AEA 90364, la Parte 7 incluye reglas particulares para
            destinos o tipos de locales específicos. Para el caso de viviendas,
            se destacan dos secciones:
          </p>
          <ul className="regla-list">
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
          <p className="regla-text-small">
            Estas secciones funcionan como reglas particulares que se apoyan en
            las partes generales de la AEA 90364. En muchos municipios y
            provincias se toma explícitamente AEA 90364 como reglamentación
            técnica de referencia para instalaciones eléctricas en inmuebles.
          </p>
        </section>

        {/* 3. Reglamento ENRE para nuevos suministros */}
        <section id="enre" className="regla-section">
          <h2 className="regla-section-title">
            3. Reglamento para la conexión de nuevos suministros domiciliarios
          </h2>
          <p className="regla-text">
            En el Área Metropolitana de Buenos Aires (concesiones de Edenor,
            Edesur y Edelap), el Ente Nacional Regulador de la Electricidad
            (ENRE) aprobó el{" "}
            <strong>
              “Reglamento para la Conexión de Nuevos Suministros para
              Instalaciones Domiciliarias”
            </strong>.
          </p>
          <p className="regla-text">
            Este reglamento establece las condiciones mínimas que deben cumplir
            las instalaciones internas para que la distribuidora autorice la
            conexión del suministro. Entre otros puntos, se contemplan:
          </p>
          <ul className="regla-list">
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
          <p className="regla-text-small">
            Sin cumplir los requisitos de este reglamento, la empresa
            distribuidora puede rechazar la solicitud de conexión o
            reconexión del suministro domiciliario.
          </p>
        </section>

        {/* 4. Código de edificación, normas IRAM y ordenanzas locales */}
        <section id="codigo" className="regla-section">
          <h2 className="regla-section-title">
            4. Código de edificación, normas IRAM y regulaciones locales
          </h2>
          <p className="regla-text">
            Además de la reglamentación AEA 90364 y de los reglamentos del ENRE,
            la Ciudad Autónoma de Buenos Aires cuenta con un{" "}
            <strong>Código de Edificación</strong> y normas complementarias que
            establecen condiciones mínimas para las instalaciones en edificios.
          </p>
          <p className="regla-text">
            En general, estos marcos normativos remiten al cumplimiento de:
          </p>
          <ul className="regla-list">
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
          <p className="regla-text-small">
            El conjunto de Código de Edificación, normas IRAM, reglamentación
            AEA y reglamentos del ENRE define el marco de referencia para
            considerar una instalación eléctrica domiciliaria como segura y
            apta para ser conectada al servicio público.
          </p>
        </section>

        {/* 5. Alcance, seguridad y aclaraciones */}
        <section id="alcance" className="regla-section">
          <h2 className="regla-section-title">
            5. Alcance, seguridad y aclaraciones importantes
          </h2>
          <ul className="regla-list">
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
          <p className="regla-text-small">
            Para obtener el texto completo y actualizado de la reglamentación
            AEA 90364 y de los reglamentos del ENRE, se recomienda consultar
            las publicaciones oficiales de la Asociación Electrotécnica
            Argentina, del ENRE y de los organismos gubernamentales
            correspondientes.
          </p>
        </section>
        <a href="https://drive.google.com/file/d/1V-wxAOlz50sWMIj-qDGDa-Pho2U_1DJo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="linkNormativa">Ver Reglamentación AEA 90364</a>
      </main>

      <footer className="regla-footer">
        Apuntes de referencia general sobre reglamentación para instalaciones
        eléctricas domiciliarias. Para cualquier obra real deben seguirse los
        textos oficiales vigentes y contar con la intervención de profesionales
        habilitados.
      </footer>
    </div>
  );
};

export default ReglamentacionCABA;
