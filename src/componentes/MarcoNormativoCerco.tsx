const MarcoNormativoCerco: React.FC = () => {
  return (
    <article className="sheet">
      <header className="sheet-header">
        <div className="sheet-pill">Marco normativo</div>
        <h2 className="sheet-title">
          Cómo leer la reglamentación de un cerco eléctrico en AMBA
        </h2>
        <p className="sheet-subtitle">
          No existe una única “norma AMBA” para el cerco eléctrico. Hay que
          combinar normas de producto, reglamentación de la instalación,
          autoridad local y organismo regulador.
        </p>
      </header>

      <section className="formula-block">
        <div className="tag">Jerarquía práctica</div>
        <pre
          className="arduino-code-block"
          aria-label="Jerarquía normativa para cercos eléctricos"
        >
{`IEC 60335-2-76
│
├─ seguridad del energizador
├─ requisitos particulares del equipo
└─ requisitos para cercos de seguridad
        │
        ▼
AEA 90364
│
├─ instalación eléctrica de la vivienda
├─ alimentación del energizador
├─ protecciones
├─ canalizaciones
└─ puesta a tierra de protección
        │
        ▼
AUTORIDAD LOCAL
│
├─ CABA → Código de Edificación + Reglamentos Técnicos
└─ PBA  → municipio correspondiente
        │
        ▼
REGULADOR / DISTRIBUIDORA
├─ ENReGE - Sector Electricidad (ex ENRE): EDENOR / EDESUR
└─ OCEBA: concesiones y distribución en Provincia de Buenos Aires`}
        </pre>
      </section>

      <section className="sheet-section">
        <h3 className="sheet-section-title">
          1. IEC 60335-2-76: seguridad del energizador
        </h3>

        <p className="sheet-text">
          La IEC 60335-2-76 es una <strong>norma técnica internacional</strong>
          para energizadores de cercos eléctricos. La edición publicada por IEC
          actualmente referenciada es IEC 60335-2-76:2018.
        </p>

        <p className="sheet-text">
          Su alcance incluye energizadores para cercos agrícolas, domésticos,
          control de animales y <strong>cercos de seguridad</strong>. La propia
          IEC indica que esta edición incorporó requisitos adicionales para
          energizadores de cercos de seguridad.
        </p>

        <div className="formula-block">
          <div className="tag">Importante</div>
          <p>
            El texto completo de IEC 60335-2-76 es <strong>pago</strong>. La
            ficha pública de IEC permite consultar gratuitamente el alcance,
            edición, comité técnico y datos bibliográficos, pero no reemplaza la
            norma completa.
          </p>
        </div>

        <p>
          <a
            href="https://webstore.iec.ch/en/publication/60232"
            target="_blank"
            rel="noreferrer"
          >
            IEC — ficha oficial IEC 60335-2-76:2018
          </a>
        </p>
      </section>

      <section className="sheet-section">
        <h3 className="sheet-section-title">
          2. AEA 90364: instalación eléctrica del inmueble
        </h3>

        <p className="sheet-text">
          AEA 90364 no es una norma específica de cercos eléctricos: es la
          reglamentación argentina de referencia para instalaciones eléctricas
          de baja tensión. Sirve para analizar la parte del sistema que pertenece
          a la instalación del inmueble: alimentación, protecciones,
          canalizaciones y puesta a tierra, entre otros aspectos.
        </p>

        <p className="sheet-text">
          Para viviendas, AEA identifica dentro de la Parte 7, entre otras, la
          <strong> Sección 770</strong> para viviendas unifamiliares hasta 63 A
          clasificadas BA2 y BD1, y la <strong>Sección 771</strong> para
          viviendas, oficinas y locales unitarios.
        </p>

        <div className="formula-block">
          <div className="tag">Cómo interpretarlo</div>
          <p>
            IEC 60335-2-76 ayuda a responder “¿cómo debe ser seguro el
            energizador y el sistema de cerco?”. AEA 90364 ayuda a responder
            “¿cómo se integra eléctricamente ese equipo en la instalación de la
            vivienda?”.
          </p>
        </div>

        <p>
          <a
            href="https://aea.org.ar/ficha-tecnicas-reglamentaciones/aea-90364-secciones/"
            target="_blank"
            rel="noreferrer"
          >
            AEA — ficha oficial de AEA 90364 y sus secciones
          </a>
        </p>
      </section>

      <section className="sheet-section">
        <h3 className="sheet-section-title">
          3. CABA: Código de Edificación y Reglamentos Técnicos
        </h3>

        <p className="sheet-text">
          Si el inmueble está en CABA, además de las reglas eléctricas debe
          verificarse qué admite el <strong>Código de Edificación</strong> y sus
          Reglamentos Técnicos.
        </p>

        <p className="sheet-text">
          La Ciudad publica una compilación vigente y aclara que la
          reglamentación aplicable a un proyecto depende también de la fecha de
          caratulación del expediente. Por eso no conviene tratar un requisito
          local como si fuera permanente e idéntico para todos los casos.
        </p>

        <p>
          <a
            href="https://buenosaires.gob.ar/gcaba_historico/reglamentos-tecnicos-del-codigo-de-edificacion"
            target="_blank"
            rel="noreferrer"
          >
            CABA — Reglamentos Técnicos del Código de Edificación
          </a>
        </p>

        <p>
          <a
            href="https://buenosaires.gob.ar/gcaba_historico/legalytecnica/normativa/sistema-de-informacion-normativa"
            target="_blank"
            rel="noreferrer"
          >
            CABA — Sistema de Información Normativa
          </a>
        </p>
      </section>

      <section className="sheet-section">
        <h3 className="sheet-section-title">
          4. Provincia de Buenos Aires: municipio + OCEBA
        </h3>

        <p className="sheet-text">
          En Provincia de Buenos Aires tampoco existe una única ordenanza
          “AMBA” aplicable a todos los municipios. La posibilidad de instalar un
          cerco, su ubicación respecto de la vía pública, medianeras y espacios
          comunes puede depender del <strong>municipio concreto</strong>.
        </p>

        <p className="sheet-text">
          OCEBA es el organismo provincial de control de la energía eléctrica.
          Su marco regulatorio abarca la distribución eléctrica bajo concesiones
          provinciales y municipales y publica normativa regulatoria y
          reglamentos de acometida. Esa normativa regula el servicio eléctrico,
          pero no reemplaza las ordenanzas o códigos de edificación municipales
          que puedan afectar un cerco perimetral.
        </p>

        <p>
          <a
            href="https://www.oceba.gba.gov.ar/nueva_web/s.php?i=5"
            target="_blank"
            rel="noreferrer"
          >
            OCEBA — normativa regulatoria
          </a>
        </p>

        <p>
          <a
            href="https://www.oceba.gba.gov.ar/nueva_web/s.php?i=12"
            target="_blank"
            rel="noreferrer"
          >
            OCEBA — reglamentos de acometida
          </a>
        </p>
      </section>

      <section className="sheet-section">
        <h3 className="sheet-section-title">
          5. ENReGE - Sector Electricidad (ex ENRE)
        </h3>

        <p className="sheet-text">
          Desde 2026, el portal oficial identifica al organismo como
          <strong> ENReGE - Sector Electricidad</strong>, que reúne los contenidos
          y funciones del ex ENRE para el sector eléctrico. El sitio mantiene
          información y trámites vinculados con EDENOR y EDESUR en el AMBA.
        </p>

        <p className="sheet-text">
          En sus recomendaciones de seguridad eléctrica, el organismo advierte
          expresamente: <strong>“No electrifiques rejas y alambrados”</strong>.
          Esa recomendación debe leerse como una advertencia contra prácticas
          peligrosas o improvisadas y no como sustituto del análisis técnico y
          jurídico de un sistema específico con energizador para cerco.
        </p>

        <p>
          <a
            href="https://www.argentina.gob.ar/enre"
            target="_blank"
            rel="noreferrer"
          >
            ENReGE - Sector Electricidad (ex ENRE) — portal oficial
          </a>
        </p>

        <p>
          <a
            href="https://www.argentina.gob.ar/noticias/buenas-practicas-favor-del-uso-seguro-de-la-energia-electrica"
            target="_blank"
            rel="noreferrer"
          >
            ENReGE / ex ENRE — buenas prácticas de seguridad eléctrica
          </a>
        </p>
      </section>

      <section className="sheet-section">
        <h3 className="sheet-section-title">
          6. Qué significa “cumplir la IEC” en la práctica
        </h3>

        <div className="formula-block">
          <p>
            Que un energizador esté diseñado de acuerdo con IEC 60335-2-76
            <strong> no significa automáticamente</strong> que pueda instalarse
            en cualquier muro, reja o medianera.
          </p>
        </div>

        <p className="sheet-text">
          Para una instalación real hay que verificar, como mínimo:
        </p>

        <ol className="sheet-list">
          <li>
            que el energizador y sus accesorios sean adecuados para ese uso;
          </li>
          <li>
            que la instalación eléctrica que lo alimenta sea correcta;
          </li>
          <li>
            que la ubicación del cerco sea admisible en esa jurisdicción;
          </li>
          <li>
            que se respeten distancias, señalización y accesibilidad;
          </li>
          <li>
            que el municipio, consorcio o código de edificación no imponga
            restricciones adicionales.
          </li>
        </ol>
      </section>

      <section className="formula-block">
        <div className="tag">Resumen</div>
        <p>
          <strong>IEC</strong> define requisitos técnicos de seguridad del
          producto y del sistema. <strong>AEA</strong> aporta la reglamentación
          de la instalación eléctrica argentina. <strong>CABA o el municipio
          bonaerense</strong> determinan condiciones edilicias y locales.
          <strong> ENReGE/OCEBA</strong> intervienen dentro de sus respectivas
          competencias regulatorias del servicio eléctrico.
        </p>
      </section>

      <footer className="sheet-footer">
        <p className="sheet-text-small">
          Los enlaces llevan a fuentes oficiales o institucionales. Antes de una
          instalación real debe verificarse la edición vigente, la jurisdicción
          y el alcance concreto de cada documento.
        </p>
      </footer>
    </article>
  );
};

export default MarcoNormativoCerco;
