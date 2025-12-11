import React, { useEffect } from "react";

declare global {
    interface Window {
        MathJax?: {
            typesetPromise?: () => Promise<void>;
        };
    }
}

// Helper para fórmulas (MathJax se encarga del render)
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const CablePotenciaCobre: React.FC = () => {
    useEffect(() => {
        if (window.MathJax?.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    }, []);

    return (
        <main className="page-wrapper">
            <h1>Sección de cable de cobre en función de la potencia (visión simplificada)</h1>

            <p className="sheet-header">
                Este módulo explica, de forma simplificada, cómo se relacionan la potencia
                de una carga, la corriente que circula por un circuito y la sección
                (área) de un cable de cobre.{" "}
                <strong>
                    Para diseño real de instalaciones SIEMPRE se deben usar las tablas y
                    normas vigentes (reglamentación local, IEC, etc.).
                </strong>
            </p>

            {/* 1. De potencia a corriente */}
            <h2>1. De potencia a corriente</h2>

            <section className="formula-block">
                <div className="tag">Potencia activa</div>
                <p>Relación básica entre potencia activa, tensión, corriente y factor de potencia:</p>
                <Formula
                    tex={String.raw`$$ P = V \cdot I \cdot \cos\varphi $$`}
                />
                <ul>
                    <li>{"$P$ : potencia activa (W)"}</li>
                    <li>{"$V$ : tensión (V)"}</li>
                    <li>{"$I$ : corriente (A)"}</li>
                    <li>{"$\\cos\\varphi$ : factor de potencia (adimensional)"}</li>
                </ul>
            </section>

            <section className="formula-block">
                <div className="tag">Corriente a partir de la potencia</div>
                <p>Despejando la corriente para un circuito monofásico:</p>
                <Formula
                    tex={String.raw`$$ I = \dfrac{P}{V \cdot \cos\varphi} $$`}
                />
                <p>
                    En un sistema trifásico equilibrado (tensión de línea $V_L$), la potencia es:
                </p>
                <Formula
                    tex={String.raw`$$ P = \sqrt{3}\, V_L \cdot I_L \cdot \cos\varphi $$`}
                />
                <p>y la corriente de línea resulta:</p>
                <Formula
                    tex={String.raw`$$ I_L = \dfrac{P}{\sqrt{3}\, V_L \cdot \cos\varphi} $$`}
                />
            </section>

            {/* 2. De corriente a sección del conductor */}
            <h2>2. De corriente a sección del cable (modelo con densidad de corriente)</h2>

            <section className="formula-block">
                <div className="tag">Densidad de corriente</div>
                <p>
                    En forma muy simplificada, se puede relacionar la corriente con la sección
                    del conductor usando la densidad de corriente $J$:
                </p>
                <Formula
                    tex={String.raw`$$ J = \dfrac{I}{S} $$`}
                />
                <Formula
                    tex={String.raw`$$ I = J \cdot S $$`}
                />
                <ul>
                    <li>{"$J$ : densidad de corriente (A/mm^2)"}</li>
                    <li>{"$I$ : corriente (A)"}</li>
                    <li>{"$S$ : sección del conductor (mm^2)"}</li>
                </ul>
                <p className="cable-note">
                    En la práctica, $J$ permitido depende de la temperatura, tipo de aislamiento,
                    método de instalación (entubado, bandeja, enterrado, etc.), número de conductores
                    cargados, temperatura ambiente, etc. Las normas dan tablas de capacidad de
                    corriente (ampacidad) en lugar de un único valor de $J$.
                </p>
            </section>

            <section className="formula-block">
                <div className="tag">Sección estimada a partir de la corriente</div>
                <p>
                    {"Si se elige una densidad de corriente de diseño $J_{diseño}$ (A/mm²) como aproximación, se puede estimar la sección:"}
                </p>
                <Formula
                    tex={String.raw`$$ S_{est} = \dfrac{I}{J_{diseño}} $$`}
                />
                <p>
                    Ejemplo (solo ilustrativo): si se trabaja con una densidad aproximada de:
                </p>
                <Formula
                    tex={String.raw`$$ J_{diseño} \approx 4\ \text{A/mm}^2 $$`}
                />
                <p>
                    para un cable de cobre en servicio continuo y se requiere una corriente de:
                </p>
                <Formula
                    tex={String.raw`$$ I = 20\ \text{A} $$`}
                />

                <Formula
                    tex={String.raw`$$ S_{est} = \dfrac{20}{4} = 5\ \text{mm}^2 $$`}
                />
                <p>
                    En una instalación real, luego de este cálculo aproximado se consulta una tabla
                    de cables normalizados (1.5 mm², 2.5 mm², 4 mm², 6 mm², etc.) y se verifica que
                    la sección elegida cumpla con:
                </p>
                <ul>
                    <li>Capacidad de corriente (ampacidad) según norma.</li>
                    <li>Caída de tensión admisible.</li>
                    <li>Condiciones de cortocircuito (térmicas y dinámicas).</li>
                </ul>
            </section>

            {/* 3. Mezclando todo: de potencia a sección estimada */}
            <h2>3. De potencia a sección de cable (modelo simplificado)</h2>
            <section className="formula-block">
                <div className="tag">Monofásico</div>
                <p>Partiendo de:</p>
                <Formula
                    tex={String.raw`$$ I = \dfrac{P}{V \cdot \cos\varphi} $$`}
                />
                <p>y usando la relación:</p>
                <Formula tex={String.raw`$$ S_{est} = \dfrac{I}{J_{diseño}} $$`} />
                <p>se tiene:</p>

                <Formula
                    tex={String.raw`$$ S_{est} = \dfrac{P}{V \cdot \cos\varphi \cdot J_{diseño}} $$`}
                />
                <p>con:</p>
                <ul>
                    <li>{"$P$ en W (o kW convertido a W)"}</li>
                    <li>{"$V$ en V"}</li>
                    <li>{"$\\cos\\varphi$ típico de la carga (por ej. 0.8, 0.9, etc.)"}</li>
                    <li>{"$J_{diseño}$ en A/mm² (valor elegido de forma conservadora)"}</li>
                </ul>
            </section>

            <section className="formula-block">
                <div className="tag">Trifásico equilibrado</div>
                <p>De forma similar, usando:</p>
                <Formula
                    tex={String.raw`$$ I_L = \dfrac{P}{\sqrt{3}\, V_L \cdot \cos\varphi} $$`}
                />
                <p>se obtiene:</p>
                <Formula
                    tex={String.raw`$$ S_{est} = \dfrac{I_L}{J_{diseño}} = \dfrac{P}{\sqrt{3}\, V_L \cdot \cos\varphi \cdot J_{diseño}} $$`}
                />
                <p>
                    De nuevo, esto da una <strong>sección estimada</strong>, que luego se debe
                    comparar con tablas reales de cables normalizados y condiciones de instalación.
                </p>
            </section>

            {/* 4. Advertencia importante */}
            <h2>4. Advertencia importante</h2>
            <section className="formula-block-warning">
                <div className="tag">Aviso</div>
                <p>
                    Las fórmulas anteriores sirven para entender la{" "}
                    <strong>relación teórica</strong> entre potencia, corriente y sección de un
                    cable de cobre, y para hacer estimaciones iniciales. Sin embargo:
                </p>
                <ul>
                    <li>
                        El cálculo real de cables se hace con{" "}
                        <strong>tablas de capacidad de corriente</strong> (ampacidad) de las normas.
                    </li>
                    <li>
                        Se deben considerar{" "}
                        <strong>
                            temperatura ambiente, aislamiento, agrupamiento de cables, método de
                            instalación, caída de tensión, duración de cortocircuitos, etc.
                        </strong>
                    </li>
                    <li>
                        Para instalaciones reales, es necesario seguir la reglamentación local
                        (por ejemplo, reglamentos de instalaciones eléctricas, normas IEC, IRAM,
                        etc.) y/o el proyecto de un profesional habilitado.
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default CablePotenciaCobre;
