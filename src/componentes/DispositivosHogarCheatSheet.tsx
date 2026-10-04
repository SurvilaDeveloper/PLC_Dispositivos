// src/components/DispositivosHogarCheatSheet.tsx

const DispositivosHogarCheatSheet: React.FC = () => {

    const handleClickG = (componente: string[]) => {
        let elemento = ''
        for (const comte of componente){
            elemento = elemento + ' ' + comte
        }
        const url = `https://www.google.com/search?q=${encodeURIComponent(elemento)}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="page-wrapper">
            <header className="sheet-header">
                <div className="sheet-pill">Instalación eléctrica hogareña</div>
                <h1 className="sheet-title">
                    Apuntes de dispositivos eléctricos típicos en una vivienda
                </h1>
                <p className="sheet-subtitle">
                    Resumen de los principales elementos que aparecen en una instalación
                    eléctrica domiciliaria: protección, mando, tomas, iluminación,
                    seguridad y comunicaciones. Solo con fines didácticos, no reemplaza
                    la normativa ni el proyecto de un profesional.
                </p>
            </header>

            <nav className="nav-buttons">
                <a href="#alimentacion" className="btn">Alimentación y tablero</a>
                <a href="#proteccion" className="btn">Dispositivos de protección</a>
                <a href="#circuitos" className="btn">Cables y canalizaciones</a>
                <a href="#mando" className="btn">Mando e interruptores</a>
                <a href="#tomas" className="btn">Tomas y salidas</a>
                <a href="#iluminacion" className="btn">Luminarias</a>
                <a href="#seguridad" className="btn">Seguridad y señalización</a>
                <a href="#bajatension" className="btn">Baja tensión / datos</a>
                <a href="#puesta-tierra" className="btn">Puesta a tierra</a>
                <a href="#accesorios" className="btn">Cajas y accesorios</a>
                <a href="#referencias" className="btn">Referencias técnicas</a>
            </nav>

            <main className="page-wrapper">
                <section id="alimentacion" className="elec-section">
                    <h2 className="elec-section-title">
                        1. Alimentación y tablero principal
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Medidor', 'de', 'energía', '(contador)'])}>
                            <strong>Medidor de energía (contador)</strong> — Equipo de medición
                            asociado al suministro que registra la energía consumida. La propiedad,
                            ubicación y requisitos del conjunto de medición dependen de la distribuidora.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Interruptor', 'general', 'seccionamiento', 'hogar'])}>
                            <strong>Interruptor general / dispositivo de seccionamiento</strong> — Permite
                            aislar la instalación o parte de ella. El aparato elegido debe ser apto para
                            la función de maniobra o seccionamiento que le corresponda.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Tablero', 'eléctrico', 'principal', 'hogar'])}>
                            <strong>Tablero principal</strong> — Envolvente que reúne dispositivos de
                            protección, maniobra, distribución y las barras o bornes necesarios.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Subtablero', 'eléctrico', 'secundario', 'hogar'])}>
                            <strong>Subtableros</strong> — Tableros secundarios alimentados desde otro
                            tablero para distribuir circuitos en sectores determinados.
                        </li>
                    </ul>
                </section>

                <section id="proteccion" className="elec-section">
                    <h2 className="elec-section-title">
                        2. Dispositivos de protección
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Interruptor', 'automático', 'MCB', 'sobrecorriente', 'hogar'])}>
                            <strong>Interruptores automáticos modulares (MCB)</strong> — Protegen
                            frente a sobrecorrientes, incluyendo sobrecargas y cortocircuitos,
                            según sus características nominales y curva de disparo. No sustituyen
                            por sí solos la protección diferencial cuando ésta es requerida.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Interruptor', 'diferencial', 'RCD', 'RCCB', 'hogar'])}>
                            <strong>Interruptores diferenciales (RCD/RCCB)</strong> — Detectan
                            una corriente residual, es decir, un desequilibrio entre las corrientes
                            que circulan por los conductores activos, y abren el circuito cuando se
                            alcanza su umbral de actuación. Un RCCB no incorpora protección contra
                            sobrecorriente. Los dispositivos de sensibilidad no superior a 30 mA
                            se emplean habitualmente como protección adicional contra choque
                            eléctrico; no reemplazan las demás medidas de protección.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Interruptor', 'diferencial', 'con', 'sobrecorriente', 'RCBO'])}>
                            <strong>Interruptores diferenciales con sobrecorriente (RCBO)</strong>{" "}
                            — Integran en un mismo dispositivo la protección por corriente residual
                            y la protección contra sobrecorrientes.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Fusible', 'eléctrico', 'sobrecorriente', 'hogar'])}>
                            <strong>Fusibles</strong> — Dispositivos de protección contra
                            sobrecorriente cuyo elemento fusible se abre al superar determinadas
                            condiciones de corriente y tiempo; después de actuar deben reemplazarse.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Dispositivo', 'protección', 'sobretensiones', 'SPD', 'DPS', 'hogar'])}>
                            <strong>Dispositivo de protección contra sobretensiones (DPS/SPD)</strong>{" "}
                            — Limita sobretensiones transitorias y deriva corrientes de impulso.
                            Su selección y coordinación dependen de la instalación, del origen de
                            las sobretensiones y del esquema de protección; no equivale por sí solo
                            a un sistema completo de protección contra rayos.
                        </li>
                    </ul>
                    <p className="elec-text-small">
                        La selección de corriente nominal, poder de corte, sensibilidad diferencial,
                        tipo de RCD, coordinación y selectividad no debe hacerse sólo por el nombre
                        del dispositivo: depende del circuito y de la reglamentación aplicable.
                    </p>
                </section>

                <section id="circuitos" className="elec-section">
                    <h2 className="elec-section-title">
                        3. Conductores y canalizaciones
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Cables','Conductores', 'eléctricos', 'hogar', 'unipolares'])}>
                            <strong>Cables unipolares aislados</strong> — Conductores activos
                            y de protección disponibles en distintas secciones. La sección no se
                            elige sólo por la corriente: también intervienen método de instalación,
                            temperatura, agrupamiento, caída de tensión y condiciones de falla.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Cable','eléctrico', 'multipolar', 'hogar'])}>
                            <strong>Cables multipolares</strong> — Reúnen varios conductores
                            aislados bajo una cubierta común y se seleccionan según el uso y el
                            método de instalación.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Canalizaciones', 'eléctricas', 'hogar', 'caños', 'conduits'])}>
                            <strong>Conduits / caños</strong> — Canalizaciones que aportan protección
                            mecánica y una vía definida para el tendido de conductores; el material
                            y dimensionado dependen de las condiciones de instalación.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Bandejas', 'Canaletas','minicanales', 'eléctricas', 'hogar'])}>
                            <strong>Bandejas, canaletas y minicanales</strong> — Sistemas de
                            conducción y soporte para determinados recorridos a la vista o integrados.
                        </li>
                    </ul>
                </section>

                <section id="mando" className="elec-section">
                    <h2 className="elec-section-title">
                        4. Dispositivos de mando e interruptores
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Interruptor', 'eléctrico', 'hogar'])}>
                            <strong>Interruptores simples</strong> — Conmutan una carga desde un
                            punto. En instalaciones convencionales el mando debe disponerse de
                            acuerdo con el esquema y requisitos reglamentarios aplicables.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Interruptores', 'conmutadores', 'hogar'])}>
                            <strong>Interruptores conmutadores</strong> — Permiten controlar
                            una misma carga desde dos puntos.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Interruptores', 'de', 'cruce', 'hogar'])}>
                            <strong>Interruptores de cruce</strong> — Se combinan con conmutadores
                            para controlar una carga desde tres o más puntos.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Teclas', 'múltiples', 'hogar'])}>
                            <strong>Teclas múltiples</strong> — Agrupan varios mandos en un mismo
                            conjunto modular.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Dimmer', 'regulador', 'de', 'iluminación', 'hogar'])}>
                            <strong>Dimmer / regulador de iluminación</strong> — Regula el nivel
                            de iluminación cuando la lámpara, driver y regulador son compatibles.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Pulsador', 'eléctrico', 'hogar'])}>
                            <strong>Pulsadores</strong> — Mandos momentáneos utilizados en timbres,
                            relés, contactores y automatismos.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Termostato', 'cronotermostato', 'hogar'])}>
                            <strong>Termostatos / cronotermostatos</strong> — Controlan sistemas
                            de climatización o calefacción según temperatura y programación.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Temporizador', 'eléctrico', 'de', 'escalera', 'hogar'])}>
                            <strong>Temporizadores y detectores de presencia</strong> — Automatizan
                            el mando de determinadas cargas según tiempo o detección.
                        </li>
                    </ul>
                </section>

                <section id="tomas" className="elec-section">
                    <h2 className="elec-section-title">
                        5. Tomas de corriente y salidas específicas
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Tomacorrientes', 'eléctricos', 'hogar'])}>
                            <strong>Tomacorrientes de uso general</strong> — Puntos de conexión
                            para equipos portátiles o móviles, seleccionados según la norma de
                            producto y el circuito correspondiente.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Tomacorrientes', 'grado', 'IP', 'ambientes', 'húmedos', 'exterior', 'hogar'])}>
                            <strong>Tomacorrientes para ambientes exigentes</strong> — En lugares
                            húmedos, exteriores u otras condiciones especiales se seleccionan
                            ubicación, envolvente y grado de protección adecuados. Una tapa por sí
                            sola no define la aptitud del conjunto.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Tomacorrientes', 'circuito', 'dedicado', 'hogar'])}>
                            <strong>Tomacorrientes dedicados</strong> — Puntos asociados a circuitos
                            específicos para determinadas cargas cuando el proyecto lo requiere.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Salidas', 'eléctricas', 'artefactos', 'fijos', 'hogar'])}>
                            <strong>Salidas para artefactos fijos</strong> — Puntos de conexión
                            previstos para equipos instalados de forma permanente.
                        </li>
                    </ul>
                </section>

                <section id="iluminacion" className="elec-section">
                    <h2 className="elec-section-title">
                        6. Luminarias y artefactos de iluminación
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Portalámparas', 'de', 'techo', 'hogar'])}>
                            <strong>Portalámparas y plafones</strong> — Elementos y luminarias
                            para iluminación general.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Apliques', 'de', 'pared','iluminación', 'hogar'])}>
                            <strong>Apliques de pared</strong> — Luminarias para circulación,
                            iluminación funcional o decorativa.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Downlights', 'empotrados', 'cielorraso', 'LED', 'hogar'])}>
                            <strong>Downlights / empotrados</strong> — Luminarias integradas en
                            cielorrasos u otras superficies, con requisitos de montaje según el producto.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Lámparas', 'colgantes', 'hogar'])}>
                            <strong>Lámparas colgantes</strong> — Luminarias suspendidas para
                            iluminación general, localizada o decorativa.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Iluminación', 'exterior', 'hogar'])}>
                            <strong>Iluminación exterior</strong> — Luminarias cuya selección
                            debe contemplar las condiciones ambientales y de montaje.
                        </li>
                    </ul>
                </section>

                <section id="seguridad" className="elec-section">
                    <h2 className="elec-section-title">
                        7. Dispositivos de seguridad y señalización
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Detectores', 'de', 'humo', 'hogar'])}>
                            <strong>Detectores de humo</strong> — Detectan productos de combustión
                            según su tecnología y generan una alarma.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Detectores', 'de', 'gas', 'hogar'])}>
                            <strong>Detectores de gas</strong> — Detectan determinados gases
                            combustibles según el sensor y la aplicación.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Detectores', 'de', 'monóxido', 'de', 'carbono', 'hogar'])}>
                            <strong>Detectores de monóxido de carbono (CO)</strong> — Detectan
                            concentraciones de CO y generan alarma según sus características.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Luces', 'de', 'emergencia', 'hogar'])}>
                            <strong>Iluminación de emergencia</strong> — Proporciona iluminación
                            cuando falla la alimentación normal, según el sistema previsto.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Timbres', 'zumbadores', 'portero', 'eléctrico', 'hogar'])}>
                            <strong>Timbres, zumbadores y porteros</strong> — Sistemas de aviso
                            y comunicación de acceso.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Indicadores', 'luminosos', 'hogar'])}>
                            <strong>Indicadores luminosos</strong> — Señalizan estados como presencia
                            de tensión o condición de funcionamiento.
                        </li>
                    </ul>
                </section>

                <section id="bajatension" className="elec-section">
                    <h2 className="elec-section-title">
                        8. Circuitos de baja tensión, datos y comunicaciones
                    </h2>
                    <p className="elec-text-small">
                        Los circuitos de comunicaciones, seguridad y muy baja tensión pueden
                        requerir separación respecto del cableado de potencia. La forma de
                        compartir canalizaciones o envolventes depende de las reglas de
                        segregación, aislamiento y compatibilidad aplicables.
                    </p>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Tomas', 'de', 'red', 'datos', 'RJ45'])}>
                            <strong>Tomas de red de datos (RJ45)</strong> — Puntos de conexión
                            para redes de datos cableadas.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Conectores', 'TV', 'coaxial', 'hogar'])}>
                            <strong>Conectores de TV / coaxial</strong> — Puntos para redes de
                            televisión, antena u otros servicios coaxiales.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Líneas', 'telefónicas', 'intercomunicadores', 'hogar'])}>
                            <strong>Líneas telefónicas / intercomunicadores</strong> — Cableado
                            y equipos de comunicación de baja potencia.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Sistemas', 'seguridad', 'alarmas', 'videoporteros', 'cámaras', 'hogar'])}>
                            <strong>Videoporteros / cámaras / alarmas</strong> — Sistemas de
                            acceso, vigilancia y seguridad.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Fuentes', 'alimentación', '12V', '24V', 'hogar'])}>
                            <strong>Fuentes de alimentación de baja tensión</strong> — Alimentan
                            LED, comunicaciones, cámaras y otros equipos según la tensión requerida.
                        </li>
                    </ul>
                </section>

                <section id="puesta-tierra" className="elec-section">
                    <h2 className="elec-section-title">
                        9. Puesta a tierra, conductores de protección y equipotencialidad
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Electrodo', 'puesta', 'a', 'tierra', 'jabalina', 'hogar'])}>
                            <strong>Electrodo de puesta a tierra</strong> — Elemento conductor
                            en contacto eléctrico con el terreno que forma parte del sistema de
                            puesta a tierra. Su desempeño depende del terreno, geometría, instalación
                            y coordinación con el esquema de protección; una jabalina no garantiza
                            por sí sola un valor determinado de resistencia de tierra.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Conductor', 'de', 'protección', 'PE', 'hogar'])}>
                            <strong>Conductor de protección (PE)</strong> — Conecta masas y otros
                            puntos de protección a la red de conductores de protección y al borne
                            principal de tierra según el esquema de la instalación. No debe
                            describirse simplemente como un cable que va de cada equipo a una jabalina.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Borne', 'principal', 'de', 'tierra', 'barra', 'PE', 'hogar'])}>
                            <strong>Borne o barra principal de tierra</strong> — Punto de conexión
                            para conductores de protección, puesta a tierra y equipotencialidad según
                            el diseño de la instalación.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Unión', 'equipotencial', 'protección', 'hogar'])}>
                            <strong>Uniones equipotenciales</strong> — Vinculan las partes conductoras
                            que corresponda para limitar diferencias de potencial peligrosas, de
                            acuerdo con el esquema de protección aplicable.
                        </li>
                    </ul>
                    <p className="elec-text-small">
                        La puesta a tierra, el PE y la desconexión automática forman un sistema
                        coordinado. Un diferencial puede ser parte de esa protección, pero no
                        reemplaza el conductor PE cuando éste es requerido.
                    </p>
                </section>

                <section id="accesorios" className="elec-section">
                    <h2 className="elec-section-title">
                        10. Cajas, módulos y otros accesorios
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Cajas', 'de', 'embutir', 'electricidad', 'hogar'])}>
                            <strong>Cajas para mecanismos</strong> — Alojan interruptores,
                            tomacorrientes y otros módulos.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Cajas', 'de', 'derivación', 'eléctricas', 'hogar'])}>
                            <strong>Cajas de derivación</strong> — Alojan conexiones o
                            derivaciones y deben mantener la accesibilidad y protección requeridas.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Placas', 'marcos', 'módulos', 'eléctricos', 'hogar'])}>
                            <strong>Placas, marcos y módulos</strong> — Conjunto mecánico y
                            funcional de mecanismos visibles.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Borneras', 'regletas', 'eléctricas', 'hogar'])}>
                            <strong>Borneras / regletas</strong> — Elementos para conexiones
                            ordenadas dentro de cajas y tableros.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Abrazaderas', 'precintos', 'pasacables', 'eléctricos', 'hogar'])}>
                            <strong>Abrazaderas, precintos y pasacables</strong> — Elementos
                            mecánicos de sujeción, orden y protección del cableado.
                        </li>
                    </ul>
                </section>

                <section id="referencias" className="elec-section">
                    <h2 className="elec-section-title">
                        11. Referencias técnicas primarias
                    </h2>
                    <ul className="sheet-list">
                        <li>
                            <a href="https://webstore.iec.ch/en/publication/66269" target="_blank" rel="noopener noreferrer">
                                IEC 60898-1 — interruptores automáticos para sobrecorriente en usos domésticos y similares
                            </a>
                        </li>
                        <li>
                            <a href="https://webstore.iec.ch/en/publication/67980" target="_blank" rel="noopener noreferrer">
                                IEC 61008-1 — RCCB sin protección integral contra sobrecorriente
                            </a>
                        </li>
                        <li>
                            <a href="https://webstore.iec.ch/en/publication/67981" target="_blank" rel="noopener noreferrer">
                                IEC 61009-1 — RCBO con protección integral contra sobrecorriente
                            </a>
                        </li>
                        <li>
                            <a href="https://webstore.iec.ch/en/publication/65314" target="_blank" rel="noopener noreferrer">
                                IEC 61643-11 — SPD para sistemas de potencia AC de baja tensión
                            </a>
                        </li>
                        <li>
                            <a href="https://webstore.iec.ch/en/publication/1882" target="_blank" rel="noopener noreferrer">
                                IEC 60364-5-54 — puesta a tierra y conductores de protección
                            </a>
                        </li>
                    </ul>
                    <p className="elec-text-small">
                        Estas referencias explican funciones y familias de requisitos. Para una
                        instalación en Argentina debe verificarse además la edición y adopción
                        aplicable de AEA/IRAM y la reglamentación jurisdiccional correspondiente.
                    </p>
                </section>
            </main>

            <footer className="elec-footer">
                Apuntes generales pensados con fines educativos. Para una instalación real
                deben consultarse los textos vigentes y contar con la intervención profesional
                exigida por la jurisdicción.
            </footer>
        </div>
    );
};

export default DispositivosHogarCheatSheet;
