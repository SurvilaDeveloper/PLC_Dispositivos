// src/components/ComponentesElectronicosCheatSheet.tsx
import "./ComponentesElectronicosCheatSheet.css";

const ComponentesElectronicosCheatSheet: React.FC = () => {

    const handleClickW = (elemento: string[]) => {
        const url = `https://es.wikipedia.org/wiki/${elemento}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="ce-wrapper">
            {/* Encabezado */}
            <header className="ce-header">
                <div className="ce-pill">Electrónica básica</div>
                <h1 className="ce-title">
                    Apuntes de componentes electrónicos: clasificación y usos típicos
                </h1>
                <p className="ce-subtitle">
                    Resumen de los principales tipos de componentes electrónicos utilizados
                    en circuitos analógicos y digitales: pasivos, semiconductores,
                    integrados, optoelectrónicos, electromecánicos y más. Contenido
                    orientado a fines didácticos.
                </p>
            </header>

            {/* Navegación rápida */}
            <nav className="ce-nav">
                <a href="#pasivos" className="ce-nav-item">Pasivos</a>
                <a href="#semiconductores" className="ce-nav-item">Semiconductores discretos</a>
                <a href="#integrados" className="ce-nav-item">Circuitos integrados</a>
                <a href="#opto" className="ce-nav-item">Optoelectrónicos</a>
                <a href="#electromecanicos" className="ce-nav-item">Electromecánicos</a>
                <a href="#energia" className="ce-nav-item">Fuentes de energía</a>
                <a href="#rf" className="ce-nav-item">RF y filtrado</a>
                <a href="#proteccion" className="ce-nav-item">Protección</a>
                <a href="#otros" className="ce-nav-item">Otros dispositivos</a>
            </nav>

            {/* Contenido */}
            <main className="ce-content">
                {/* 1. Componentes pasivos */}
                <section id="pasivos" className="ce-section">
                    <h2 className="ce-section-title">1. Componentes pasivos</h2>
                    <p className="ce-text">
                        Los componentes pasivos no generan energía; se limitan a consumirla,
                        almacenarla o disiparla. Son la base de la mayoría de los circuitos.
                    </p>
                    <ul className="ce-list">
                        <li className="link-item" onClick={() => handleClickW(['Resistor'])}>
                            <strong>Resistores</strong> — Limitan la corriente y definen caídas
                            de tensión según la ley de Ohm. Se usan en divisores de tensión,
                            polarización de transistores, resistencia de carga, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Potenciómetro'])}>
                            <strong>Potenciómetros</strong> — Resistores variables
                            que permiten ajustar niveles (por ejemplo, volumen, contraste,
                            puntos de ajuste en circuitos).
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Trimmer'])}>
                            <strong>Trimmers</strong> — Resistores variables
                            que permiten ajustar niveles (por ejemplo, volumen, contraste,
                            puntos de ajuste en circuitos).
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Capacitor'])}>
                            <strong>Capacitores</strong> — Almacenan energía en un campo
                            eléctrico. Se usan para filtrado, acoplamiento/desacoplamiento,
                            temporización y corrección de factor de potencia.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Inductor'])}>
                            <strong>Inductores</strong> — Almacenan energía en un campo
                            magnético. Comunes en filtros, fuentes conmutadas, chokes y
                            circuitos de RF.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Circuito RLC'])}>
                            <strong>Redes RC, RL, RLC</strong> — Combinaciones de resistores,
                            capacitores e inductores para filtrado, temporización y ajuste de
                            respuesta en frecuencia.
                        </li>
                    </ul>
                </section>

                {/* 2. Semiconductores discretos */}
                <section id="semiconductores" className="ce-section">
                    <h2 className="ce-section-title">2. Semiconductores discretos</h2>
                    <p className="ce-text">
                        Son dispositivos basados en materiales semiconductores (como el
                        silicio) que permiten controlar el flujo de corriente de manera
                        no lineal. Son la base de la electrónica moderna.
                    </p>
                    <ul className="ce-list">
                        <li className="link-item" onClick={() => handleClickW(['Diodo'])}>
                            <strong>Diodos rectificadores</strong> — Conducen corriente en un
                            solo sentido. Usados para rectificación AC/DC, protección contra
                            polaridad invertida, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Diodo_Zener'])}>
                            <strong>Diodos Zener</strong> — Diseñados para trabajar en
                            ruptura inversa controlada. Se usan como referencias de tensión y
                            protección contra sobretensiones.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Diodo_Schottky'])}>
                            <strong>Diodos Schottky</strong> — Diodos de baja caída de tensión
                            directa y alta velocidad, muy usados en conmutación rápida y
                            fuentes conmutadas.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Diodo Varicap'])}>
                            <strong>Diodos varicap / varactor</strong> — Diodos cuya
                            capacitancia varía con la tensión inversa, usados en sintonía de
                            circuitos RF.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Transistor BJT'])}>
                            <strong>Transistores BJT (bipolares)</strong> — Dispositivos de
                            tres terminales (base, colector, emisor) usados como amplificadores
                            o interruptores.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Transistor de efecto de campo metal-óxido-semiconductor'])}>
                            <strong>Transistores MOSFET</strong> — Transistores de efecto de
                            campo controlados por tensión (puerta, drenador, fuente). Muy
                            utilizados en conmutación de potencia y lógica digital.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['JFET'])}>
                            <strong>JFET</strong> — Transistores de efecto de campo de unión,
                            más comunes en aplicaciones analógicas específicas.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Transistor IGBT'])}>
                            <strong>IGBT</strong> — Transistores bipolares de puerta aislada,
                            combinan características de BJT y MOSFET. Usados en
                            aplicaciones de alta potencia como inversores y control de motores.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Tiristor'])}>
                            <strong>Tiristores, SCR, TRIAC</strong> — Dispositivos de
                            conmutación para control de potencia en AC (dimmers, control de
                            motores, calefactores).
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['DIAC'])}>
                            <strong>DIAC</strong> — Dispositivo bidireccional usado para
                            disparar TRIACs en circuitos de control de fase.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['SIDAC'])}>
                            <strong>SIDAC</strong> — Se utiliza en aplicaciones en las cuales
                            se necesita una tensión de disparo típicamente comprendida entre 104 y 280 V.
                        </li>
                    </ul>
                </section>

                {/* 3. Circuitos integrados */}
                <section id="integrados" className="ce-section">
                    <h2 className="ce-section-title">3. Circuitos integrados (IC)</h2>
                    <p className="ce-text">
                        Un circuito integrado contiene en un mismo encapsulado muchos
                        componentes electrónicos miniaturizados. Hay gran variedad según su
                        función.
                    </p>
                    <ul className="ce-list">
                        <li className="link-item" onClick={() => handleClickW(['Amplificador operacional'])}>
                            <strong>Amplificadores operacionales (op-amps)</strong> — Bloques
                            analógicos básicos para amplificación, filtros activos, sumadores,
                            comparadores, etc. Ejemplos clásicos: LM741, LM358.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Regulador de tensión'])}>
                            <strong>Reguladores de tensión lineales</strong> — Mantienen una
                            tensión de salida estable. Ej.: 7805, 7812, LM317.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Convertidor DC a DC'])}>
                            <strong>Reguladores conmutados (drivers DC-DC)</strong> — ICs
                            para step-up, step-down, buck-boost, con alta eficiencia.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Circuito integrado 555'])}>
                            <strong>Temporizadores y osciladores integrados</strong> — Por
                            ejemplo el 555, utilizado para generar pulsos, PWM y temporizaciones.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Circuito lógico'])}>
                            <strong>Lógica digital (familias TTL, CMOS)</strong> — Puertas
                            AND, OR, NOT, flip-flops, contadores, registros, multiplexores,
                            etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Microcontrolador'])}>
                            <strong>Microcontroladores</strong> — Un procesador, memoria y
                            periféricos integrados en un solo chip (por ejemplo, familias
                            AVR, PIC, ARM Cortex-M).
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Microprocesador'])}>
                            <strong>Microprocesadores</strong> — Núcleos de CPU y
                            sistemas completos en un chip para aplicaciones de computación
                            más complejas.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['SoC'])}>
                            <strong>SoC</strong> — Describe la tendencia cada vez más frecuente de usar
                            tecnologías de fabricación que integran todos o gran parte de los módulos que
                            componen un computador o cualquier otro sistema informático o electrónico en un
                            único circuito integrado o chip
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Memoria (informática)'])}>
                            <strong>Memorias (RAM, ROM, EEPROM, Flash)</strong> — Dispositivos
                            dedicados al almacenamiento de datos y programas.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Puente H (electrónica)'])}>
                            <strong>Drivers y puentes H</strong> — ICs para manejar motores
                            DC, relés o cargas inductivas (ej.: L293, L298).
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Conversor de señal analógica a digital'])}>
                            <strong>Convertidores A/D y D/A</strong> — Transforman señales
                            analógicas en digitales y viceversa.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Sensor'])}>
                            <strong>Sensores integrados</strong> — Sensores de temperatura,
                            presión, acelerómetros, giroscopios, magnetómetros, etc., con
                            electrónica de acondicionamiento incorporada.
                        </li>
                    </ul>
                </section>

                {/* 4. Optoelectrónicos */}
                <section id="opto" className="ce-section">
                    <h2 className="ce-section-title">4. Componentes optoelectrónicos</h2>
                    <p className="ce-text">
                        Son dispositivos que transforman energía eléctrica en luz o luz en
                        señales eléctricas, y se usan tanto en indicación como en comunicación
                        y sensado.
                    </p>
                    <ul className="ce-list">
                        <li className="link-item" onClick={() => handleClickW(['Diodo emisor de luz'])}>
                            <strong>LED (diodos emisores de luz)</strong> — Indicadores,
                            iluminación, backlights, comunicación óptica.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Fotodiodo'])}>
                            <strong>Fotodiodos</strong> — Detectan luz y la
                            convierten en corriente o tensión eléctrica.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Fototransistor'])}>
                            <strong>Fototransistores</strong> — Detectan luz y la
                            convierten en corriente o tensión eléctrica.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['LDR'])}>
                            <strong>LDR (resistencias dependientes de la luz)</strong> —
                            Resistores cuyo valor cambia con la iluminación; usados en sensores
                            de luz ambiental.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Optoacoplador'])}>
                            <strong>Optoacopladores</strong> — Contienen un LED y un
                            fototransistor u otro elemento fotosensible en el mismo encapsulado
                            para aislar galvánicamente dos circuitos.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Display'])}>
                            <strong>Displays de 7 segmentos, matrices y LCD/OLED</strong> —
                            Dispositivos para visualizar números, caracteres y gráficos.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Fibra óptica'])}>
                            <strong>Fibras ópticas</strong> — Para transmitir
                            datos mediante luz en lugar de señales eléctricas en cables.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Transceptor'])}>
                            <strong>Transceptores</strong> — Dispositivo que cuenta con un transmisor y un receptor que
                            comparten parte de la circuitería o se encuentran dentro de la misma caja.
                        </li>
                    </ul>
                </section>

                {/* 5. Electromecánicos */}
                <section id="electromecanicos" className="ce-section">
                    <h2 className="ce-section-title">5. Componentes electromecánicos</h2>
                    <p className="ce-text">
                        Combinan partes eléctricas y mecánicas. Suelen intervenir en la
                        interfaz entre el circuito y el usuario o la potencia.
                    </p>
                    <ul className="ce-list">
                        <li className="link-item" onClick={() => handleClickW(['Relé'])}>
                            <strong>Relés electromecánicos</strong> — Interruptores controlados
                            eléctricamente que permiten conmutar cargas usando una bobina de
                            mando.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Contactor'])}>
                            <strong>Contactor miniatura / relés de potencia</strong> — Para
                            conmutar cargas mayores, motores pequeños, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Interruptor'])}>
                            <strong>Interruptores, pulsadores y teclas</strong> — Mandos
                            manuales para encender, apagar, seleccionar modos, etc.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Conector eléctrico'])}>
                            <strong>Conectores</strong> — Permiten conectar y
                            desconectar cables y placas de forma segura y ordenada.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Clema'])}>
                            <strong>Borneras</strong> — Permiten conectar y
                            desconectar cables y placas de forma segura y ordenada.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Potenciómetro'])}>
                            <strong>Potenciómetros rotativos y deslizantes</strong> — Elementos
                            de control para el usuario (volumen, brillo, ajuste fino).
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Codificador rotatorio'])}>
                            <strong>Encoders mecánicos</strong> — Perillas que generan señales
                            digitales al girar, muy usadas en interfaces modernas.
                        </li>
                    </ul>
                </section>

                {/* 6. Fuentes de energía */}
                <section id="energia" className="ce-section">
                    <h2 className="ce-section-title">6. Fuentes de energía y almacenamiento</h2>
                    <ul className="ce-list">
                        <li className="link-item" onClick={() => handleClickW(['Batería (electricidad)'])}>
                            <strong>Baterías y pilas</strong> — Fuentes químicas de energía
                            (primarias y recargables) que alimentan circuitos portátiles.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Supercondensador'])}>
                            <strong>Supercapacitores</strong> — Dispositivos de alta
                            capacitancia para almacenamiento temporal de energía, respaldo y
                            filtrado.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Fuente de alimentación'])}>
                            <strong>Fuentes de alimentación AC/DC</strong> — Transforman
                            tensión de red en tensiones continuas reguladas (lineales o
                            conmutadas).
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Panel solar'])}>
                            <strong>Paneles solares (celdas fotovoltaicas)</strong> — Convierten
                            energía luminosa en energía eléctrica.
                        </li>
                    </ul>
                </section>

                {/* 7. RF y filtrado */}
                <section id="rf" className="ce-section">
                    <h2 className="ce-section-title">
                        7. Dispositivos para RF, filtrado y sintonía
                    </h2>
                    <ul className="ce-list">
                        <li className="link-item" onClick={() => handleClickW(['Filtro electrónico'])}>
                            <strong>Filtros LC, filtros cerámicos, filtros SAW</strong> —
                            Selección de bandas de frecuencia en radios, TV, comunicaciones.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Oscilador electrónico'])}>
                            <strong>Resonadores y cristales de cuarzo</strong> — Elementos
                            de frecuencia muy estable para osciladores y relojes de sistemas
                            digitales.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Tipos de transformador'])}>
                            <strong>Baluns, transformadores de RF y acopladores</strong> —
                            Adaptación de impedancias y acople de señales de alta frecuencia.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Antena'])}>
                            <strong>Antenas</strong> — Elementos radiantes y receptores de
                            ondas electromagnéticas.
                        </li>
                    </ul>
                </section>

                {/* 8. Protección */}
                <section id="proteccion" className="ce-section">
                    <h2 className="ce-section-title">8. Componentes de protección</h2>
                    <ul className="ce-list">
                        <li className="link-item" onClick={() => handleClickW(['Fusible'])}>
                            <strong>Fusibles</strong> — Protegen contra
                            sobrecorrientes.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Fusible rearmable'])}>
                            <strong>PTC resetables</strong> — Protegen contra
                            sobrecorrientes; los PTC pueden restablecerse automáticamente.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Varistor'])}>
                            <strong>Varistores (MOV)</strong> — Limitan sobretensiones
                            transitorias, típicos en protección contra picos en la red.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Diodo avalancha'])}>
                            <strong>Diodos TVS (Transient Voltage Suppressors)</strong> —
                            Diseñados para absorber picos de tensión de muy corta duración.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Descarga eléctrica en gases'])}>
                            <strong>Descargadores de gas</strong> — Usados en protección
                            contra sobretensiones en líneas de telecomunicaciones y señales.
                        </li>
                        <li className="link-item" onClick={() => handleClickW(['Interferencia electromagnética'])}>
                            <strong>Filtros EMI/RFI</strong> — Combinan inductores y
                            capacitores para reducir interferencias electromagnéticas.
                        </li>
                    </ul>
                </section>

                {/* 9. Otros dispositivos */}
                <section id="otros" className="ce-section">
                    <h2 className="ce-section-title">9. Otros dispositivos y familias</h2>
                    <p className="ce-text">
                        El universo de componentes electrónicos es muy amplio. Algunos
                        grupos adicionales que aparecen en proyectos reales son:
                    </p>
                    <ul className="ce-list">
                        <li className="link-item">
                            <strong>Sensores de posición y movimiento</strong> — Acelerómetros,
                            giróscopos, sensores Hall, sensores magnéticos, etc.
                        </li>
                        <li className="link-item">
                            <strong>Sensores ambientales</strong> — Temperatura, humedad,
                            presión, calidad de aire, gas, etc.
                        </li>
                        <li className="link-item">
                            <strong>Módulos de comunicación</strong> — Wi-Fi, Bluetooth, LoRa,
                            GSM, GPS, etc., que integran RF + lógica en un mismo módulo.
                        </li>
                        <li className="link-item">
                            <strong>Placas de desarrollo</strong> — No son un “componente”
                            individual, pero reúnen muchos (microcontrolador, reguladores,
                            conectores) en un formato cómodo (Arduino, ESP32, etc.).
                        </li>
                    </ul>
                    <p className="ce-text-small">
                        Estos apuntes resumen las familias más comunes. Cada grupo incluye
                        muchas variantes y modelos específicos con distintas características
                        eléctricas y encapsulados.
                    </p>
                </section>
            </main>

            <footer className="ce-footer">
                Apuntes generales de componentes electrónicos, pensados como referencia
                rápida para estudio y diseño básico de circuitos.
            </footer>
        </div>
    );
};

export default ComponentesElectronicosCheatSheet;
