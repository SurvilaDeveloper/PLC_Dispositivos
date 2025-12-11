import React, { useEffect } from "react";

declare global {
    interface Window {
        MathJax?: {
            typesetPromise?: () => Promise<void>;
        };
    }
}

// Helper para fórmulas en bloque
const Formula: React.FC<{ tex: string }> = ({ tex }) => <p>{tex}</p>;

const MotorTrifasicoParVelocidad: React.FC = () => {
    useEffect(() => {
        if (window.MathJax?.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    }, []);

    return (
        <main className="page-wrapper">
            <h1>Motor Trifásico: Velocidad Síncrona, Deslizamiento y Par</h1>

            <p>
                Chuleta con las fórmulas clave de velocidad síncrona, deslizamiento,
                frecuencia de rotor y par en motores de inducción trifásicos.
            </p>

            {/* 1. Velocidad síncrona */}
            <h2>1. Velocidad síncrona</h2>
            <section className="formula-block">
                <div className="tag">Velocidad síncrona (rpm)</div>
                <Formula tex={String.raw`$$ n_s = \frac{120 \cdot f}{P} $$`} />
                <ul>
                    <li>{"$n_s$ : velocidad síncrona (rpm)"}</li>
                    <li>{"$f$ : frecuencia de la red (Hz)"}</li>
                    <li>{"$P$ : número de polos del motor"}</li>
                </ul>
            </section>

            <section className="formula-block">
                <div className="tag">Velocidad angular síncrona</div>
                <Formula
                    tex={String.raw`$$ \omega_s = \frac{2\pi n_s}{60} $$`}
                />
                <ul>
                    <li>{"$\\omega_s$ : velocidad angular síncrona (rad/s)"}</li>
                    <li>{"$n_s$ : velocidad síncrona (rpm)"}</li>
                </ul>
            </section>

            {/* 2. Deslizamiento */}
            <h2>2. Deslizamiento</h2>
            <section className="formula-block">
                <div className="tag">Definición de deslizamiento</div>
                <Formula
                    tex={String.raw`$$ s = \frac{n_s - n}{n_s} $$`}
                />
                <ul>
                    <li>{"$s$ : deslizamiento (adimensional)"}</li>
                    <li>{"$n_s$ : velocidad síncrona (rpm)"}</li>
                    <li>{"$n$ : velocidad mecánica del rotor (rpm)"}</li>
                </ul>
            </section>

            <section className="formula-block">
                <div className="tag">Rango típico</div>
                <Formula
                    tex={String.raw`$$ 0 \leq s \leq 1 $$`}
                />
                <ul>
                    <li>{"$s \\approx 0$ : rotor casi a velocidad síncrona (carga normal)"}</li>
                    <li>{"$s = 1$ : rotor detenido (arranque)"}</li>
                </ul>
            </section>

            {/* 3. Frecuencia de rotor */}
            <h2>3. Frecuencia de las corrientes en el rotor</h2>
            <section className="formula-block">
                <div className="tag">Frecuencia de rotor</div>
                <Formula
                    tex={String.raw`$$ f_r = s \cdot f $$`}
                />
                <ul>
                    <li>{"$f_r$ : frecuencia de las corrientes de rotor (Hz)"}</li>
                    <li>{"$s$ : deslizamiento"}</li>
                    <li>{"$f$ : frecuencia de la red (Hz)"}</li>
                </ul>
            </section>

            {/* 4. Par electromagnético a partir de la potencia */}
            <h2>4. Par electromagnético a partir de la potencia</h2>
            <section className="formula-block">
                <div className="tag">Definición general</div>
                <Formula
                    tex={String.raw`$$ T = \frac{P_{mec}}{\omega_m} $$`}
                />
                <ul>
                    <li>{"$T$ : par (N·m)"}</li>
                    <li>{"$P_{mec}$ : potencia mecánica (W)"}</li>
                    <li>{"$\\omega_m$ : velocidad angular del rotor (rad/s)"}</li>
                </ul>
            </section>

            <section className="formula-block">
                <div className="tag">Velocidad angular del rotor</div>
                <Formula
                    tex={String.raw`$$ \omega_m = \frac{2\pi n}{60} $$`}
                />
                <ul>
                    <li>{"$n$ : velocidad mecánica del rotor (rpm)"}</li>
                </ul>
            </section>

            <section className="formula-block">
                <div className="tag">Fórmula práctica (kW y rpm)</div>
                <Formula
                    tex={String.raw`$$ T[\text{N·m}] = \frac{9550 \cdot P_{mec}[\text{kW}]}{n[\text{rpm}]} $$`}
                />
                <ul>
                    <li>{"$P_{mec}$ : potencia mecánica en kW"}</li>
                    <li>{"$n$ : velocidad en rpm"}</li>
                </ul>
            </section>

            {/* 5. Par del motor de inducción en función del deslizamiento */}
            <h2>5. Par del motor de inducción en función del deslizamiento</h2>

            <p>
                Usando el circuito equivalente de Thévenin visto desde el rotor,
                se obtiene una expresión general para el par electromagnético
                del motor de inducción.
            </p>

            <section className="formula-block">
                <div className="tag">Par electromagnético (modelo de Thévenin)</div>
                <Formula
                    tex={String.raw`$$
T(s) =
\frac{
  3 \, |V_{th}|^2 \, \dfrac{R_2'}{s}
}{
  \omega_s
  \left[
    \left( R_{th} + \dfrac{R_2'}{s} \right)^2 +
    \left( X_{th} + X_2' \right)^2
  \right]
}
$$`}
                />
                <ul>
                    <li>{"$T(s)$ : par en función del deslizamiento (N·m)"}</li>
                    <li>{"$V_{th}$ : tensión de Thévenin vista desde el rotor (V)"}</li>
                    <li>{"$R_{th}, X_{th}$ : resistencia y reactancia de Thévenin"}</li>
                    <li>{"$R_2', X_2'$ : resistencia y reactancia del rotor referidas al estator"}</li>
                    <li>{"$\\omega_s$ : velocidad angular síncrona (rad/s)"}</li>
                    <li>{"$s$ : deslizamiento"}</li>
                </ul>
            </section>

            {/* 6. Par máximo (par de ruptura) */}
            <h2>6. Par máximo (par de ruptura)</h2>

            <p>
                {
                    "El par máximo ocurre para un cierto deslizamiento $s_{max}$ y es útil para verificar la capacidad del motor frente a sobrecargas momentáneas."
                }
            </p>

            <section className="formula-block">
                <div className="tag">Deslizamiento al par máximo</div>
                <Formula
                    tex={String.raw`$$ s_{max} = \frac{R_2'}{\sqrt{R_{th}^2 + (X_{th} + X_2')^2}} $$`}
                />
            </section>

            <section className="formula-block">
                <div className="tag">Valor del par máximo</div>
                <Formula
                    tex={String.raw`$$
T_{max} =
\frac{
  3 \, |V_{th}|^2
}{
  2 \, \omega_s
  \left[
    R_{th} +
    \sqrt{R_{th}^2 + (X_{th} + X_2')^2}
  \right]
}
$$`}
                />
            </section>
        </main>
    );
};

export default MotorTrifasicoParVelocidad;
