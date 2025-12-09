// src/components/NormativaIndustrialAMBA.tsx
import "./NormativaIndustrialAMBA.css";

const NormativaIndustrialAMBA: React.FC = () => {
  return (
    <div className="ind-regla-wrapper">
      {/* Encabezado */}
      <header className="ind-regla-header">
        <div className="ind-regla-pill">
          Instalaciones eléctricas · Industria · AMBA
        </div>
        <h1 className="ind-regla-title">
          Apuntes de normativa para instalaciones industriales en AMBA
        </h1>
        <p className="ind-regla-subtitle">
          Síntesis de los principales marcos técnicos y regulatorios que afectan
          a las instalaciones eléctricas industriales en el Área Metropolitana
          de Buenos Aires (AMBA). Contenido de carácter informativo, no sustituye
          normas, reglamentos ni proyectos de ingeniería.
        </p>
      </header>

      {/* Navegación rápida */}
      <nav className="ind-regla-nav">
        <a href="#aea" className="ind-regla-nav-item">
          AEA 90364 (base técnica)
        </a>
        <a href="#higiene" className="ind-regla-nav-item">
          Higiene y seguridad laboral
        </a>
        <a href="#enre" className="ind-regla-nav-item">
          ENRE y distribuidoras
        </a>
        <a href="#local" className="ind-regla-nav-item">
          Normativa local
        </a>
        <a href="#otras" className="ind-regla-nav-item">
          Otras normas frecuentes
        </a>
        <a href="#practica" className="ind-regla-nav-item">
          Síntesis práctica
        </a>
      </nav>

      {/* Contenido */}
      <main className="ind-regla-content">
        {/* 1. AEA 90364 */}
        <section id="aea" className="ind-regla-section">
          <h2 className="ind-regla-section-title">
            1. Reglamentación AEA 90364 como base técnica
          </h2>
          <p className="ind-regla-text">
            Para instalaciones eléctricas de baja tensión en inmuebles,
            incluyendo establecimientos industriales, la referencia técnica
            principal en Argentina es la{" "}
            <strong>Reglamentación AEA 90364 – Ejecución de instalaciones
            eléctricas en inmuebles</strong>, elaborada por la Asociación
            Electrotécnica Argentina (AEA) y basada en la serie IEC 60364,
            adaptada al contexto local.
          </p>
          <p className="ind-regla-text">
            La AEA 90364 establece criterios de seguridad eléctrica, selección
            de materiales y equipos, esquemas de puesta a tierra, dimensionamiento
            de conductores y protecciones, así como procedimientos de verificación
            inicial y periódica. Se aplica a viviendas, locales comerciales, de
            pública concurrencia y establecimientos industriales, entre otros.
          </p>
          <p className="ind-regla-text-small">
            Para una instalación industrial de baja tensión en AMBA se considera,
            como mínimo, el cumplimiento de las partes generales de AEA 90364
            (Partes 0 a 6) y las reglas particulares de la Parte 7 que resulten
            aplicables según el tipo de local o sector.
          </p>
        </section>

        {/* 2. Higiene y seguridad */}
        <section id="higiene" className="ind-regla-section">
          <h2 className="ind-regla-section-title">
            2. Higiene y seguridad en el trabajo
          </h2>
          <p className="ind-regla-text">
            Las instalaciones eléctricas en ámbitos industriales se encuentran
            también bajo el alcance de la{" "}
            <strong>Ley 19.587 de Higiene y Seguridad en el Trabajo</strong>
            y su Decreto Reglamentario 351/79. Estos marcos establecen que los
            equipos e instalaciones eléctricas deben ser diseñados, construidos
            y mantenidos de forma tal que eliminen o reduzcan los riesgos
            eléctricos para las personas trabajadoras.
          </p>
          <p className="ind-regla-text">
            En diversos documentos técnicos se reconoce a la{" "}
            <strong>Reglamentación AEA 90364</strong> como referencia para
            definir las condiciones de seguridad de las instalaciones eléctricas
            internas, integrando así la normativa de higiene y seguridad con el
            reglamento técnico específico del sector eléctrico.
          </p>
          <p className="ind-regla-text-small">
            En establecimientos industriales, la correcta aplicación simultánea
            de AEA 90364 y de la legislación de Higiene y Seguridad constituye
            un requisito básico para reducir riesgos de choque eléctrico,
            incendios de origen eléctrico y otros incidentes asociados.
          </p>
        </section>

        {/* 3. ENRE y distribuidoras */}
        <section id="enre" className="ind-regla-section">
          <h2 className="ind-regla-section-title">
            3. ENRE y reglamentos de las distribuidoras (Edenor, Edesur, Edelap)
          </h2>
          <p className="ind-regla-text">
            En el Área Metropolitana de Buenos Aires, las conexiones a la red
            pública de media y baja tensión están reguladas por el{" "}
            <strong>Ente Nacional Regulador de la Electricidad (ENRE)</strong>
            y por los reglamentos de las empresas distribuidoras (Edenor, Edesur,
            Edelap, entre otras según zona).
          </p>
          <p className="ind-regla-text">
            Estos reglamentos incluyen el{" "}
            <strong>Reglamento de Suministro</strong> y normas específicas para
            la conexión de nuevos suministros. En general:
          </p>
          <ul className="ind-regla-list">
            <li>
              Exigen que las instalaciones internas de los usuarios cumplan
              <strong>AEA 90364</strong> o normas técnicas equivalentes reconocidas.
            </li>
            <li>
              Establecen requisitos para gabinetes de medición, protección
              general, puntos de seccionamiento y accesibilidad para maniobras.
            </li>
            <li>
              Pueden requerir certificaciones o informes emitidos por
              profesionales habilitados como condición para habilitar o modificar
              el suministro eléctrico.
            </li>
          </ul>
          <p className="ind-regla-text-small">
            En instalaciones industriales de cierta potencia, la interacción
            técnica con la distribuidora suele incluir el estudio de cortocircuito,
            corrientes de arranque de grandes motores, factor de potencia,
            calidad de energía y otras variables relevantes para la red.
          </p>
        </section>

        {/* 4. Normativa local */}
        <section id="local" className="ind-regla-section">
          <h2 className="ind-regla-section-title">
            4. Normativa local: CABA y municipios del GBA
          </h2>
          <p className="ind-regla-text">
            Además de la reglamentación AEA y de los reglamentos del ENRE, cada
            jurisdicción dentro del AMBA (Ciudad Autónoma de Buenos Aires y
            municipios del Gran Buenos Aires) puede contar con{" "}
            <strong>códigos de edificación</strong>, ordenanzas y disposiciones
            propias que regulan las instalaciones eléctricas en edificios
            industriales, comerciales y de servicios.
          </p>
          <p className="ind-regla-text">
            En muchos casos, esas normas locales:
          </p>
          <ul className="ind-regla-list">
            <li>
              Adoptan explícitamente la AEA 90364 como reglamentación técnica de
              referencia para instalaciones de baja tensión.
            </li>
            <li>
              Exigen planos eléctricos, memorias descriptivas, cálculos y
              certificados de puesta a tierra firmados por{" "}
              <strong>profesionales matriculados</strong>.
            </li>
            <li>
              Pueden incorporar requisitos adicionales relacionados con
              habilitaciones industriales, condiciones de seguridad contra
              incendios y planes de emergencia.
            </li>
          </ul>
          <p className="ind-regla-text-small">
            Por esta razón, cualquier proyecto de instalación industrial en AMBA
            debe considerar simultáneamente la normativa nacional, la reglamentación
            técnica AEA, los reglamentos del ENRE y las ordenanzas específicas del
            municipio o ciudad donde se ubica el establecimiento.
          </p>
        </section>

        {/* 5. Otras normas frecuentes */}
        <section id="otras" className="ind-regla-section">
          <h2 className="ind-regla-section-title">
            5. Otras normas habituales en entornos industriales
          </h2>
          <p className="ind-regla-text">
            En función del tipo de industria y de los riesgos presentes, suelen
            aplicarse también otras normas específicas, entre ellas:
          </p>
          <ul className="ind-regla-list">
            <li>
              <strong>Normas IRAM / IEC para seguridad de maquinaria</strong>{" "}
              (por ejemplo, IEC 60204-1 / IRAM-IEC 60204-1) que regulan los
              sistemas eléctricos de máquinas y equipos industriales.
            </li>
            <li>
              <strong>Normas para atmósferas explosivas (Ex)</strong> que definen
              la clasificación de áreas y los requisitos de los equipos aptos
              para zonas con gases o polvos inflamables.
            </li>
            <li>
              <strong>Documentos específicos sobre puesta a tierra y protección
              contra descargas atmosféricas</strong>, incluyendo sistemas de
              protección contra rayos y criterios de equipotencialidad.
            </li>
            <li>
              <strong>Guías y resoluciones de organismos de trabajo y ambiente</strong>,
              que pueden fijar requerimientos adicionales para riesgo eléctrico,
              señalización y mantenimiento de instalaciones.
            </li>
          </ul>
        </section>

        {/* 6. Síntesis práctica */}
        <section id="practica" className="ind-regla-section">
          <h2 className="ind-regla-section-title">
            6. Síntesis práctica para instalaciones industriales en AMBA
          </h2>
          <p className="ind-regla-text">
            En términos prácticos, una instalación eléctrica industrial en el
            AMBA se considera correctamente enmarcada cuando:
          </p>
          <ul className="ind-regla-list">
            <li>
              Se encuentra diseñada y ejecutada de acuerdo con{" "}
              <strong>AEA 90364</strong> y las normas IRAM aplicables a
              materiales y equipos.
            </li>
            <li>
              Cumple con la{" "}
              <strong>Legislación de Higiene y Seguridad en el Trabajo</strong>,
              incluyendo las exigencias específicas relativas al riesgo eléctrico.
            </li>
            <li>
              Respeta los{" "}
              <strong>reglamentos de suministro y conexión del ENRE y de la
              distribuidora</strong> correspondiente (Edenor, Edesur, Edelap, etc.).
            </li>
            <li>
              Observa las{" "}
              <strong>ordenanzas y códigos de edificación locales</strong>,
              incluyendo requisitos de habilitación industrial y documentación
              técnica firmada por profesionales habilitados.
            </li>
            <li>
              Integra, cuando corresponde, normas especiales para maquinaria,
              atmósferas explosivas, sistemas de puesta a tierra y protección
              contra descargas atmosféricas.
            </li>
          </ul>
          <p className="ind-regla-text-small">
            Estos apuntes resumen el contexto normativo de forma general. Para
            cualquier proyecto concreto es imprescindible consultar los textos
            oficiales vigentes y la normativa específica aplicable, y contar con
            la intervención de profesionales con incumbencias en instalaciones
            eléctricas industriales.
          </p>
        </section>
      </main>

      <footer className="ind-regla-footer">
        Apuntes de referencia general sobre normativa para instalaciones
        eléctricas industriales en el AMBA. No reemplazan las normas oficiales
        ni el asesoramiento técnico y legal especializado.
      </footer>
    </div>
  );
};

export default NormativaIndustrialAMBA;
