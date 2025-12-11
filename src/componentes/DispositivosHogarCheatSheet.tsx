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
            {/* Encabezado */}
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

            {/* Navegación rápida */}
            <nav className="nav-buttons">
                <a href="#alimentacion" className="btn">
                    Alimentación y tablero
                </a>
                <a href="#proteccion" className="btn">
                    Dispositivos de protección
                </a>
                <a href="#circuitos" className="btn">
                    Cables y canalizaciones
                </a>
                <a href="#mando" className="btn">
                    Mando e interruptores
                </a>
                <a href="#tomas" className="btn">
                    Tomas y salidas
                </a>
                <a href="#iluminacion" className="btn">
                    Luminarias
                </a>
                <a href="#seguridad" className="btn">
                    Seguridad y señalización
                </a>
                <a href="#bajatension" className="btn">
                    Baja tensión / datos
                </a>
                <a href="#puesta-tierra" className="btn">
                    Puesta a tierra
                </a>
                <a href="#accesorios" className="btn">
                    Cajas y accesorios
                </a>
            </nav>

            {/* Contenido */}
            <main className="page-wrapper">
                {/* 1. Alimentación y tablero */}
                <section id="alimentacion" className="elec-section">
                    <h2 className="elec-section-title">
                        1. Alimentación y tablero principal
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Medidor', 'de', 'energía', '(contador)'])}>
                            <strong>Medidor de energía (contador)</strong> — Equipo de la
                            distribuidora que mide el consumo (kWh). No es del usuario, pero
                            forma parte del conjunto.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Interruptor', 'general', 'o', 'seccionador'])}>
                            <strong>Interruptor general / seccionador</strong> — Permite
                            cortar toda la alimentación de la vivienda en forma manual.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Tablero', 'eléctrico', 'principal', 'hogar'])}>
                            <strong>Tablero principal</strong> — Envolvente donde se ubican
                            los interruptores termomagnéticos, diferenciales, barras de
                            neutro y tierra, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Subtablero', 'eléctrico', 'secundario', 'hogar'])}>
                            <strong>Subtableros</strong> — Tableros secundarios en otros
                            sectores (por ejemplo, planta alta, quincho, garaje), alimentados
                            desde el tablero principal.
                        </li>
                    </ul>
                </section>

                {/* 2. Protección */}
                <section id="proteccion" className="elec-section">
                    <h2 className="elec-section-title">
                        2. Dispositivos de protección
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Interruptor', 'termomagnético', '(MCB)', 'hogar'])}>
                            <strong>Interruptores termomagnéticos (MCB)</strong> — Protegen
                            contra sobrecargas y cortocircuitos. Hay de distintas
                            corrientes nominales y curvas (B, C, D, etc.).
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Interruptor', 'diferencial', '(RCD/RCCB)', 'hogar'])}>
                            <strong>Interruptores diferenciales (RCD/RCCB)</strong> — Detectan
                            fugas de corriente a tierra (contactos indirectos) y desconectan
                            el circuito (Ej.: 30 mA para protección de personas).
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Interruptor', 'magnetotérmico', 'diferencial', '(RCBO)'])}>
                            <strong>Interruptores magnetotérmicos diferenciales (RCBO)</strong>{" "}
                            — Combinan protección termomagnética y diferencial en un solo
                            aparato.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Fusible', 'eléctrico', 'hogar'])}>
                            <strong>Fusibles</strong> — Protección contra sobrecorriente en
                            ciertas aplicaciones (por ejemplo, en equipos o tableros
                            específicos).
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Protector', 'contra', 'sobretensiones', '(DPS)', 'hogar'])}>
                            <strong>Dispositivo de protección contra sobretensiones (DPS)</strong>{" "}
                            — Limita sobretensiones transitorias (por descargas atmosféricas
                            o maniobras) para proteger equipos sensibles.
                        </li>
                    </ul>
                </section>

                {/* 3. Cables y canalizaciones */}
                <section id="circuitos" className="elec-section">
                    <h2 className="elec-section-title">
                        3. Conductores y canalizaciones
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Cables','Conductores', 'eléctricos', 'hogar', 'unipolarres'])}>
                            <strong>Cables unipolares aislados (cobre)</strong> — Fase,
                            neutro y tierra, de distintas secciones (ej.: 1.5, 2.5, 4 mm²)
                            según el circuito.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Cable','eléctrico', 'multipolares', 'hogar'])}>
                            <strong>Cables multipolares</strong> — Varios conductores bajo
                            una misma cubierta, usados en algunos países/instalaciones.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Canalizaciones', 'eléctricas', 'hogar', 'caños', 'conduits'])}>
                            <strong>Conduits / caños (PVC, metálico)</strong> — Protegen los
                            cables y permiten el tendido empotrado o a la vista.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Bandejas', 'Canaletas','minicanales', 'eléctricas', 'flexibles', 'hogar'])}>
                            <strong>Bandejas, canaletas, minicanales</strong> — Para tendidos
                            a la vista o en recorridos “limpios” (oficinas, viviendas
                            modernas).
                        </li>
                    </ul>
                </section>

                {/* 4. Mando e interruptores */}
                <section id="mando" className="elec-section">
                    <h2 className="elec-section-title">
                        4. Dispositivos de mando e interruptores
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Interruptor', 'eléctrico', 'hogar'])}>
                            <strong>Interruptores simples</strong> — Conmutan una fase para
                            encender/apagar una luminaria desde un punto.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Interruptores', 'conmutadores', 'hogar'])}>
                            <strong>Interruptores conmutadores (3 vías)</strong> — Permiten
                            encender/apagar una misma carga desde dos puntos distintos (ej.:
                            pasillos, dormitorios).
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Interruptores', 'de', 'cruce', 'hogar'])}>
                            <strong>Interruptores de cruce (4 vías)</strong> — Se usan
                            combinados con conmutadores para comando desde 3 o más puntos.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Teclas', 'múltiples', 'hogar'])}>
                            <strong>Teclas múltiples</strong> — Varias teclas en un mismo
                            módulo para controlar distintos circuitos (ej.: luz principal,
                            luz secundaria, ventilador).
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Dimmer', 'regulador', 'de', 'iluminación', 'hogar'])}>
                            <strong>Dimmer / regulador de iluminación</strong> — Permite
                            variar el nivel de brillo de luminarias compatibles.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Pulsador', 'eléctrico', 'hogar'])}>
                            <strong>Pulsadores</strong> — Usados para timbres, contactores,
                            escalera con temporizador, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Termostato', 'cronotermostato', 'hogar'])}>
                            <strong>Termostatos / cronotermostatos</strong> — Controlan
                            calefacción o climatización según temperatura y horario.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Temporizador', 'eléctrico', 'de', 'escalera', 'hogar'])}>
                            <strong>Temporizadores de escalera, detectores de presencia</strong>{" "}
                            — Automatizan el encendido/apagado en pasillos, entradas, etc.
                        </li>
                    </ul>
                </section>

                {/* 5. Tomas y salidas */}
                <section id="tomas" className="elec-section">
                    <h2 className="elec-section-title">
                        5. Tomas de corriente y salidas específicas
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Tomacorrientes', 'eléctricos', 'hogar'])}>
                            <strong>Tomacorrientes estándar</strong> — Tomas para usos
                            generales (enchufes de 2 y 3 polos, con tierra, según norma del
                            país).
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Tomacorrientes', 'con', 'tapa', 'estancos', 'ambientes', 'húmedos', 'o', 'exterior', 'hogar'])}>
                            <strong>Tomacorrientes con tapa / estancos</strong> — Para
                            ambientes húmedos (baños, cocinas) o exteriores, con grado de
                            protección IP mayor.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Tomacorrientes', 'Mayor', 'Potencia', 'hogar'])}>
                            <strong>Tomacorrientes dedicados</strong> — Circuitos y tomas
                            específicos para cargas de mayor potencia (ej.: aire
                            acondicionado, horno, lavarropas).
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Salidas', 'eléctricas', 'para', 'artefactos', 'fijos', 'hogar'])}>
                            <strong>Salidas para artefactos fijos</strong> — Cajas de
                            conexión para cocinas eléctricas, termotanques, motores de
                            portón, etc.
                        </li>
                    </ul>
                </section>

                {/* 6. Luminarias */}
                <section id="iluminacion" className="elec-section">
                    <h2 className="elec-section-title">
                        6. Luminarias y artefactos de iluminación
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Portalámparas', 'de', 'techo', 'hogar'])}>
                            <strong>Portalámparas y plafones de techo</strong> — Luminarias
                            generales de ambientes.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Apliques', 'de', 'pared','iluminación', 'hogar'])}>
                            <strong>Apliques de pared</strong> — Para iluminación de
                            circulación, cabeceras de cama, decorativa, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Downlights', 'empotrados', 'de', 'pared', 'exteriores', 'Focos', 'embutidos',
                            'cielorraso','LED', 'dicroicas', 'hogar'])}>
                            <strong>Downlights / empotrados</strong> — Focos embutidos en
                            cielorraso (LED, dicroicas, etc.).
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Lámparas', 'de', 'pie', 'de', 'mesa', 'colgantes', 'hogar'])}>
                            <strong>Lámparas colgantes</strong> — Luminarias decorativas
                            sobre mesas, comedores, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Iluminación', 'exterior', 'hogar'])}>
                            <strong>Iluminación exterior</strong> — Apliques de frente,
                            balizas, proyectores, tiras LED para jardines y accesos.
                        </li>
                    </ul>
                </section>

                {/* 7. Seguridad y señalización */}
                <section id="seguridad" className="elec-section">
                    <h2 className="elec-section-title">
                        7. Dispositivos de seguridad y señalización
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Detectores', 'de', 'humo', 'hogar'])}>
                            <strong>Detectores de humo</strong> — Avisan presencia de humo en
                            ambientes clave (pasillos, dormitorios).
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Detectores', 'de', 'gas', 'hogar'])}>
                            <strong>Detectores de gas</strong> — En cocinas, salas de
                            calderas u otros lugares con riesgo de fuga de gas.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Detectores', 'de', 'monóxido', 'de', 'carbono', 'hogar'])}>
                            <strong>Detectores de monóxido de carbono (CO)</strong> — En
                            ambientes con calefacción a gas, estufas, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Luces', 'de', 'emergencia', 'hogar'])}>
                            <strong>Luces de emergencia</strong> — Se encienden al fallar la
                            alimentación para permitir evacuar o moverse con seguridad.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Timbres', 'zumbadores', 'portero', 'eléctrico', 'hogar'])}>
                            <strong>Timbres, zumbadores, portero eléctrico</strong> — Señales
                            acústicas/visuales de llamada o acceso.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Indicadores', 'luminosos', 'hogar'])}>
                            <strong>Indicadores luminosos</strong> — Pilotos de presencia de
                            tensión, testigos de encendido/apagado, etc.
                        </li>
                    </ul>
                </section>

                {/* 8. Baja tensión / datos */}
                <section id="bajatension" className="elec-section">
                    <h2 className="elec-section-title">
                        8. Circuitos de baja tensión, datos y comunicaciones
                    </h2>
                    <p className="elec-text-small">
                        No son parte de la instalación de fuerza, pero conviven en la
                        vivienda y muchas veces comparten canalizaciones separadas:
                    </p>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Tomas', 'de', 'red', 'de', 'datos', 'RJ45'])}>
                            <strong>Tomas de red de datos (RJ45)</strong> — Para LAN, internet
                            en distintos ambientes.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Puntos', 'de', 'acceso', 'WiFi', 'hogar', 'conectores', 'tv', 'coaxial'])}>
                            <strong>Conectores de TV / coaxial</strong> — Para televisión por
                            cable o antena.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Líneas', 'telefónicas', 'intercomunicadores', 'hogar'])}>
                            <strong>Líneas telefónicas / intercomunicadores</strong> — En
                            viviendas donde todavía se usan.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Sistemas', 'de', 'seguridad', 'hogar', 'alarmas', 'sensores','videoporteros', 'cámaras'])}>
                            <strong>Videoporteros / cámaras</strong> — Sistemas de acceso y
                            vigilancia.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Fuentes', 'de', 'alimentación', 'baja', 'tensión', 'hogar', '12V', '24V', 'para', 'LED', 'routers', 'cámaras'])}>
                            <strong>Fuentes de alimentación de baja tensión</strong> — Para
                            iluminación LED, routers, cámaras, etc. (12 V, 24 V, etc.).
                        </li>
                    </ul>
                </section>

                {/* 9. Puesta a tierra */}
                <section id="puesta-tierra" className="elec-section">
                    <h2 className="elec-section-title">
                        9. Puesta a tierra y elementos asociados
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Jabalina', 'electrodo', 'de', 'tierra', 'hogar'])}>
                            <strong>Jabalina / electrodo de tierra</strong> — Elemento enterrado
                            que permite disipar corrientes de defecto al terreno.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Conductor', 'de', 'puesta', 'a', 'tierra', 'hogar'])}>
                            <strong>Conductor de protección (PE)</strong> — Cable de tierra
                            que une las masas metálicas de equipos con la jabalina.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Bornera', 'de', 'tierra', 'hogar'])}>
                            <strong>Bornera de tierra en tablero</strong> — Barra donde se
                            conectan todos los conductores de protección del sistema.
                        </li>
                    </ul>
                </section>

                {/* 10. Cajas y accesorios */}
                <section id="accesorios" className="elec-section">
                    <h2 className="elec-section-title">
                        10. Cajas, módulos y otros accesorios
                    </h2>
                    <ul className="elec-list">
                        <li className="link-item" onClick={() => handleClickG(['Cajas', 'de', 'embutir', 'electricidad', 'hogar'])}>
                            <strong>Cajas de embutir para mecanismos</strong> — Donde se
                            alojan interruptores, tomas, teclas, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Cajas', 'de', 'superficie', 'eléctricas', 'hogar'])}>
                            <strong>Cajas de derivación</strong> — Para empalmes y derivaciones
                            de conductores, normalmente ocultas o con tapa accesible.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Placas', 'marcos', 'módulos', 'eléctricos', 'hogar'])}>
                            <strong>Placas, marcos y módulos</strong> — Placas exteriores que
                            sostienen interruptores, tomas, pulsadores, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Borneras', 'regletas', 'eléctricas', 'hogar'])}>
                            <strong>Borneras / regletas</strong> — Para conexiones
                            ordenadas y seguras dentro de cajas o tableros.
                        </li>
                        <li className="link-item" onClick={() => handleClickG(['Abrazaderas', 'precintos', 'pasacables', 'eléctricos', 'hogar'])}>
                            <strong>Abrazaderas, precintos, pasacables</strong> — Sujeción y
                            organización mecánica de los conductores.
                        </li>
                    </ul>
                </section>
            </main>

            <footer className="elec-footer">
                Apuntes generales pensados con fines educativos. Para una instalación real
                es obligatorio seguir la normativa local y contar con un profesional habilitado.
            </footer>
        </div>
    );
};

export default DispositivosHogarCheatSheet;
