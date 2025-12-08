import React, { useState, useMemo } from "react";
import "./potenciaMotorTrifasico.css";

const CalculadoraTrifasica: React.FC = () => {
  // Estados de entrada
  const [VL, setVL] = useState<number>(400);    // tensión de línea (V)
  const [P_kW, setP_kW] = useState<number>(10); // potencia activa (kW)
  const [cosPhi, setCosPhi] = useState<number>(0.8);

  // Cálculos derivados
  const resultados = useMemo(() => {
    // Validaciones básicas
    if (VL <= 0 || P_kW < 0 || cosPhi <= 0 || cosPhi > 1) {
      return null;
    }

    const P_W = P_kW * 1000;                           // W
    const S_kVA = P_kW / cosPhi;                       // kVA
    const S_VA = S_kVA * 1000;                         // VA
    const Q_kVAr = Math.sqrt(Math.max(S_kVA**2 - P_kW**2, 0)); // kVAr

    // I = P / (√3 · V_L · cos φ)
    const I_line = P_W / (Math.sqrt(3) * VL * cosPhi); // A

    return {
      P_W,
      S_kVA,
      S_VA,
      Q_kVAr,
      I_line,
    };
  }, [VL, P_kW, cosPhi]);

  const handleNumber = (
    setter: (v: number) => void
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setter(Number.isNaN(value) ? 0 : value);
  };

  return (
    <main className="pm-body">
      <h1>Calculadora trifásica – P, Q, S e I</h1>

      <section className="formula-block">
        <div className="tag">Datos de entrada</div>

        <p style={{ marginBottom: "0.75rem" }}>
          Ingresá la tensión de la red trifásica, la potencia activa y el coseno
          de phi. La calculadora asume un sistema trifásico equilibrado.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.75rem",
          }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "0.25rem", height: "1.5rem" }}>
              Tensión de línea V<sub>L</sub> [V]
            </label>
            <input
              type="number"
              value={VL}
              onChange={handleNumber(setVL)}
              min={1}
              step={10}
              style={{ width: "98%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.25rem", height: "1.5rem" }}>
              Potencia activa P [kW]
            </label>
            <input
              type="number"
              value={P_kW}
              onChange={handleNumber(setP_kW)}
              min={0}
              step={0.1}
              style={{ width: "98%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.25rem", height: "1.5rem" }}>
              cos φ
            </label>
            <input
              type="number"
              value={cosPhi}
              onChange={handleNumber(setCosPhi)}
              min={0.1}
              max={1}
              step={0.01}
              style={{ width: "98%", padding: "0.25rem" }}
            />
            <small style={{ opacity: 0.8 }}>
              (entre 0 y 1, típico 0.8–0.9)
            </small>
          </div>
        </div>
      </section>

      <section className="formula-block">
        <div className="tag">Resultados</div>

        {resultados === null ? (
          <p style={{ color: "#f97373" }}>
            Verificá que V<sub>L</sub> &gt; 0, P ≥ 0 y 0 &lt; cos φ ≤ 1.
          </p>
        ) : (
          <>
            <ul>
              <li>
                Potencia activa P ={" "}
                <strong>{P_kW.toFixed(2)} kW</strong> (
                {resultados.P_W.toFixed(0)} W)
              </li>
              <li>
                Potencia aparente S ≈{" "}
                <strong>{resultados.S_kVA.toFixed(2)} kVA</strong> (
                {resultados.S_VA.toFixed(0)} VA)
              </li>
              <li>
                Potencia reactiva Q ≈{" "}
                <strong>{resultados.Q_kVAr.toFixed(2)} kVAr</strong>
              </li>
              <li>
                Corriente de línea I<sub>L</sub> ≈{" "}
                <strong>{resultados.I_line.toFixed(1)} A</strong>
              </li>
            </ul>

            <p style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>
              Recordá las relaciones para un sistema trifásico equilibrado:
            </p>
            <ul style={{ fontSize: "0.9rem" }}>
              <li>P = √3 · V<sub>L</sub> · I<sub>L</sub> · cos φ</li>
              <li>S = √3 · V<sub>L</sub> · I<sub>L</sub></li>
              <li>Q = √3 · V<sub>L</sub> · I<sub>L</sub> · sen φ</li>
              <li>S² = P² + Q²</li>
            </ul>
          </>
        )}
      </section>
    </main>
  );
};

export default CalculadoraTrifasica;
