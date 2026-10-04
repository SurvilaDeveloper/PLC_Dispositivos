import React, { useMemo, useState } from "react";
import { calculateBalancedThreePhasePower } from "../electricalCalculations";

const CalculadoraTrifasica: React.FC = () => {
  const [VL, setVL] = useState<number>(400);
  const [P_kW, setP_kW] = useState<number>(10);
  const [cosPhi, setCosPhi] = useState<number>(0.8);

  const resultado = useMemo(
    () => calculateBalancedThreePhasePower(VL, P_kW, cosPhi),
    [VL, P_kW, cosPhi],
  );

  const handleNumber =
    (setter: (value: number) => void) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseFloat(event.target.value);
      setter(Number.isNaN(value) ? 0 : value);
    };

  return (
    <main className="calc">
      <h1>Calculadora trifásica – P, Q, S e I</h1>

      <section className="formula-block">
        <div className="tag">Datos de entrada</div>

        <p style={{ marginBottom: "0.75rem" }}>
          Ingresá la tensión de línea, la potencia activa total y el factor de
          potencia. La calculadora asume un sistema trifásico equilibrado.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.75rem",
          }}
        >
          <div>
            <label
              htmlFor="three-phase-voltage"
              style={{ display: "block", marginBottom: "0.25rem", height: "1.5rem" }}
            >
              Tensión de línea V<sub>L</sub> [V]
            </label>
            <input
              id="three-phase-voltage"
              type="number"
              value={VL}
              onChange={handleNumber(setVL)}
              min={1}
              step={10}
              inputMode="decimal"
              style={{ width: "98%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label
              htmlFor="three-phase-active-power"
              style={{ display: "block", marginBottom: "0.25rem", height: "1.5rem" }}
            >
              Potencia activa total P [kW]
            </label>
            <input
              id="three-phase-active-power"
              type="number"
              value={P_kW}
              onChange={handleNumber(setP_kW)}
              min={0}
              step={0.1}
              inputMode="decimal"
              style={{ width: "98%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label
              htmlFor="three-phase-power-factor"
              style={{ display: "block", marginBottom: "0.25rem", height: "1.5rem" }}
            >
              Factor de potencia cos φ
            </label>
            <input
              id="three-phase-power-factor"
              type="number"
              value={cosPhi}
              onChange={handleNumber(setCosPhi)}
              min={0.01}
              max={1}
              step={0.01}
              inputMode="decimal"
              aria-describedby="three-phase-power-factor-help"
              style={{ width: "98%", padding: "0.25rem" }}
            />
            <small id="three-phase-power-factor-help" style={{ opacity: 0.8 }}>
              Valor mayor que 0 y menor o igual que 1.
            </small>
          </div>
        </div>
      </section>

      <section
        className="formula-block"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="tag">Resultados</div>

        {!resultado.ok ? (
          <p role="alert" style={{ color: "#f97373" }}>
            {resultado.error}
          </p>
        ) : (
          <>
            <div className="calc">
              <ul>
                <li>
                  Potencia activa P ={" "}
                  <strong>{P_kW.toFixed(2)} kW</strong> (
                  {resultado.value.activePowerW.toFixed(0)} W)
                </li>
                <li>
                  Potencia aparente S ≈{" "}
                  <strong>{resultado.value.apparentPowerKVA.toFixed(2)} kVA</strong> (
                  {resultado.value.apparentPowerVA.toFixed(0)} VA)
                </li>
                <li>
                  Potencia reactiva Q ≈{" "}
                  <strong>{resultado.value.reactivePowerKVAr.toFixed(2)} kVAr</strong>
                </li>
                <li>
                  Corriente de línea I<sub>L</sub> ≈{" "}
                  <strong>{resultado.value.lineCurrentA.toFixed(1)} A</strong>
                </li>
              </ul>
            </div>

            <p style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>
              Relaciones usadas para un sistema trifásico equilibrado:
            </p>
            <ul style={{ fontSize: "0.9rem" }}>
              <li>P = √3 · V<sub>L</sub> · I<sub>L</sub> · cos φ</li>
              <li>S = √3 · V<sub>L</sub> · I<sub>L</sub></li>
              <li>Q = √(S² − P²)</li>
            </ul>
          </>
        )}
      </section>
    </main>
  );
};

export default CalculadoraTrifasica;
