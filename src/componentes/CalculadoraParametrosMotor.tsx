import React, { useMemo, useState } from "react";
import { calculateInductionMotorParametersStar } from "../electricalCalculations";

const CalculadoraParametrosMotor: React.FC = () => {
  const [VL0, setVL0] = useState(400);
  const [I0, setI0] = useState(5);
  const [P0_kW, setP0_kW] = useState(0.8);

  const [VLLR, setVLLR] = useState(80);
  const [ILR, setILR] = useState(20);
  const [PLR_kW, setPLR_kW] = useState(2);

  const [R1medida, setR1medida] = useState(0);

  const handleNumber =
    (setter: (value: number) => void) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseFloat(event.target.value);
      setter(Number.isNaN(value) ? 0 : value);
    };

  const resultado = useMemo(
    () =>
      calculateInductionMotorParametersStar({
        noLoadLineVoltageV: VL0,
        noLoadLineCurrentA: I0,
        noLoadPowerKW: P0_kW,
        lockedRotorLineVoltageV: VLLR,
        lockedRotorLineCurrentA: ILR,
        lockedRotorPowerKW: PLR_kW,
        measuredStatorResistanceOhm: R1medida,
      }),
    [VL0, I0, P0_kW, VLLR, ILR, PLR_kW, R1medida],
  );

  return (
    <main className="page-wrapper">
      <h1>Calculadora de parámetros de motor de inducción trifásico</h1>

      <section className="formula-block">
        <div className="tag">Alcance del modelo</div>
        <p>
          Ingresá los datos de los ensayos en vacío y de rotor bloqueado. Esta
          versión calcula el circuito equivalente <strong>por fase</strong> para
          un motor trifásico equilibrado <strong>conectado en estrella</strong>,
          por lo que usa V<sub>fase</sub> = V<sub>línea</sub>/√3 e I
          <sub>fase</sub> = I<sub>línea</sub>.
        </p>
        <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
          El R<sub>c</sub> obtenido del ensayo en vacío es un equivalente
          simplificado de las pérdidas activas consideradas por este modelo; no
          separa por sí solo pérdidas en hierro y pérdidas mecánicas.
        </p>
      </section>

      <section className="formula-block">
        <div className="tag">Ensayo en vacío</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          <div>
            <label htmlFor="motor-no-load-voltage" style={{ display: "block", marginBottom: "0.25rem" }}>
              Tensión de línea V<sub>L0</sub> [V]
            </label>
            <input
              id="motor-no-load-voltage"
              type="number"
              value={VL0}
              onChange={handleNumber(setVL0)}
              min={1}
              step={10}
              inputMode="decimal"
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label htmlFor="motor-no-load-current" style={{ display: "block", marginBottom: "0.25rem" }}>
              Corriente de línea I<sub>0</sub> [A]
            </label>
            <input
              id="motor-no-load-current"
              type="number"
              value={I0}
              onChange={handleNumber(setI0)}
              min={0.1}
              step={0.1}
              inputMode="decimal"
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label htmlFor="motor-no-load-power" style={{ display: "block", marginBottom: "0.25rem" }}>
              Potencia activa total P<sub>0</sub> [kW]
            </label>
            <input
              id="motor-no-load-power"
              type="number"
              value={P0_kW}
              onChange={handleNumber(setP0_kW)}
              min={0}
              step={0.01}
              inputMode="decimal"
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>
        </div>

        {resultado.ok && (
          <>
            <h4>Resultados del ensayo en vacío</h4>
            <ul>
              <li>V<sub>φ0</sub> = {resultado.value.noLoadPhaseVoltageV.toFixed(1)} V</li>
              <li>I<sub>φ0</sub> = {resultado.value.noLoadPhaseCurrentA.toFixed(2)} A</li>
              <li>cos φ<sub>0</sub> ≈ {resultado.value.noLoadPowerFactor.toFixed(3)}</li>
              <li>
                R<sub>c</sub> ≈{" "}
                {resultado.value.coreLossResistanceOhm !== null
                  ? `${resultado.value.coreLossResistanceOhm.toFixed(2)} Ω`
                  : "no definido (componente activa ≈ 0)"}
              </li>
              <li>
                X<sub>m</sub> ≈{" "}
                {resultado.value.magnetizingReactanceOhm !== null
                  ? `${resultado.value.magnetizingReactanceOhm.toFixed(2)} Ω`
                  : "no definido (componente magnetizante ≈ 0)"}
              </li>
            </ul>
          </>
        )}
      </section>

      <section className="formula-block">
        <div className="tag">Ensayo de rotor bloqueado</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          <div>
            <label htmlFor="motor-locked-voltage" style={{ display: "block", marginBottom: "0.25rem" }}>
              Tensión de línea V<sub>L,LR</sub> [V]
            </label>
            <input
              id="motor-locked-voltage"
              type="number"
              value={VLLR}
              onChange={handleNumber(setVLLR)}
              min={1}
              step={5}
              inputMode="decimal"
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label htmlFor="motor-locked-current" style={{ display: "block", marginBottom: "0.25rem" }}>
              Corriente de línea I<sub>LR</sub> [A]
            </label>
            <input
              id="motor-locked-current"
              type="number"
              value={ILR}
              onChange={handleNumber(setILR)}
              min={0.1}
              step={0.1}
              inputMode="decimal"
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label htmlFor="motor-locked-power" style={{ display: "block", marginBottom: "0.25rem" }}>
              Potencia activa total P<sub>LR</sub> [kW]
            </label>
            <input
              id="motor-locked-power"
              type="number"
              value={PLR_kW}
              onChange={handleNumber(setPLR_kW)}
              min={0}
              step={0.01}
              inputMode="decimal"
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>
        </div>

        {resultado.ok && (
          <>
            <h4>Resultados del ensayo de rotor bloqueado</h4>
            <ul>
              <li>V<sub>φ,LR</sub> = {resultado.value.lockedRotorPhaseVoltageV.toFixed(1)} V</li>
              <li>I<sub>φ,LR</sub> = {resultado.value.lockedRotorPhaseCurrentA.toFixed(2)} A</li>
              <li>cos φ<sub>LR</sub> ≈ {resultado.value.lockedRotorPowerFactor.toFixed(3)}</li>
              <li>Z<sub>eq</sub> = {resultado.value.equivalentImpedanceOhm.toFixed(3)} Ω</li>
              <li>R<sub>eq</sub> = {resultado.value.equivalentResistanceOhm.toFixed(3)} Ω</li>
              <li>X<sub>eq</sub> = {resultado.value.equivalentReactanceOhm.toFixed(3)} Ω</li>
            </ul>
          </>
        )}
      </section>

      <section className="formula-block">
        <div className="tag">Parámetros del circuito equivalente</div>

        <div style={{ marginBottom: "0.75rem" }}>
          <label htmlFor="motor-r1" style={{ display: "block", marginBottom: "0.25rem" }}>
            R₁ medida por fase [Ω] (opcional)
          </label>
          <input
            id="motor-r1"
            type="number"
            value={R1medida}
            onChange={handleNumber(setR1medida)}
            min={0}
            step={0.01}
            inputMode="decimal"
            aria-describedby="motor-r1-help"
            style={{ width: "100%", padding: "0.25rem" }}
          />
          <small id="motor-r1-help" style={{ opacity: 0.8 }}>
            Usá 0 si no conocés R₁. En ese caso se aproxima R₁ ≈ R₂′ ≈ R
            <sub>eq</sub>/2.
          </small>
        </div>

        <div aria-live="polite" aria-atomic="true">
          {!resultado.ok ? (
            <p role="alert" style={{ color: "#f97373" }}>
              {resultado.error}
            </p>
          ) : (
            <>
              <ul>
                <li>
                  R₁ = {resultado.value.statorResistanceOhm.toFixed(3)} Ω{" "}
                  {resultado.value.usesMeasuredStatorResistance
                    ? "(usando R₁ medida)"
                    : "(aprox. R₁ ≈ R₂′)"}
                </li>
                <li>
                  R₂′ ≈ {resultado.value.referredRotorResistanceOhm.toFixed(3)} Ω
                </li>
                <li>
                  X₁ ≈ {resultado.value.statorLeakageReactanceOhm.toFixed(3)} Ω
                </li>
                <li>
                  X₂′ ≈ {resultado.value.referredRotorLeakageReactanceOhm.toFixed(3)} Ω
                </li>
                <li>
                  R<sub>c</sub> ≈{" "}
                  {resultado.value.coreLossResistanceOhm !== null
                    ? `${resultado.value.coreLossResistanceOhm.toFixed(2)} Ω`
                    : "no definido"}
                </li>
                <li>
                  X<sub>m</sub> ≈{" "}
                  {resultado.value.magnetizingReactanceOhm !== null
                    ? `${resultado.value.magnetizingReactanceOhm.toFixed(2)} Ω`
                    : "no definido"}
                </li>
              </ul>

              <p style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>
                Se usa la aproximación X₁ ≈ X₂′ ≈ X<sub>eq</sub>/2.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default CalculadoraParametrosMotor;
