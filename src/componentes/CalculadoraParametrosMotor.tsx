import React, { useState, useMemo } from "react";

type Resultados = {
  // Ensayo en vacío
  Vphi0: number;
  Iphi0: number;
  cosPhi0: number;
  Rc: number | null;
  Xm: number | null;
  // Rotor bloqueado
  VphiLR: number;
  IphiLR: number;
  cosPhiLR: number;
  Zeq: number;
  Req: number;
  Xeq: number;
  // Parámetros equivalentes
  R1: number;
  R2p: number;
  X1: number;
  X2p: number;
  usaR1Medido: boolean;
};

const CalculadoraParametrosMotor: React.FC = () => {
  // ---- Entradas: ensayo en vacío ----
  const [VL0, setVL0] = useState(400); // V_L en vacío [V]
  const [I0, setI0] = useState(5); // I_0 [A]
  const [P0_kW, setP0_kW] = useState(0.8); // P_0 [kW]

  // ---- Entradas: rotor bloqueado ----
  const [VLLR, setVLLR] = useState(80); // V_L en rotor bloqueado [V]
  const [ILR, setILR] = useState(20); // I_LR [A]
  const [PLR_kW, setPLR_kW] = useState(2); // P_LR [kW]

  // ---- R1 medida (opcional, ohmímetro DC) ----
  const [R1medida, setR1medida] = useState(0); // Ω, 0 = no conocido

  // Helper para inputs numéricos
  const handleNumber =
    (setter: (v: number) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value);
      setter(Number.isNaN(value) ? 0 : value);
    };

  const resultados: Resultados | null = useMemo(() => {
    if (VL0 <= 0 || VLLR <= 0 || I0 <= 0 || ILR <= 0 || P0_kW < 0 || PLR_kW < 0) {
      return null;
    }

    // ========= 1) Ensayo en vacío =========
    const P0_W = P0_kW * 1000;
    const Vphi0 = VL0 / Math.sqrt(3);
    const Iphi0 = I0;

    let cosPhi0 = P0_W / (3 * Vphi0 * Iphi0);
    cosPhi0 = Math.max(-1, Math.min(1, cosPhi0));
    const phi0 = Math.acos(cosPhi0);

    const Iw = Iphi0 * Math.cos(phi0);
    const Im = Iphi0 * Math.sin(phi0);

    const G0 = Vphi0 !== 0 ? Iw / Vphi0 : 0;
    const Bm = Vphi0 !== 0 ? Im / Vphi0 : 0;

    const Rc = G0 !== 0 ? 1 / G0 : null;
    const Xm = Bm !== 0 ? 1 / Bm : null;

    // ========= 2) Rotor bloqueado =========
    const PLR_W = PLR_kW * 1000;
    const VphiLR = VLLR / Math.sqrt(3);
    const IphiLR = ILR;

    let cosPhiLR = PLR_W / (3 * VphiLR * IphiLR);
    cosPhiLR = Math.max(-1, Math.min(1, cosPhiLR));
    const phiLR = Math.acos(cosPhiLR);

    const Zeq = VphiLR / IphiLR;
    const Req = Zeq * Math.cos(phiLR);
    const Xeq = Zeq * Math.sin(phiLR);

    // ========= 3) Parámetros equivalentes =========
    let R1: number;
    let R2p: number;
    let usaR1Medido = false;

    if (R1medida > 0 && R1medida < Req) {
      R1 = R1medida;
      R2p = Math.max(Req - R1, 0);
      usaR1Medido = true;
    } else {
      R1 = Req / 2;
      R2p = Req / 2;
      usaR1Medido = false;
    }

    const X1 = Xeq / 2;
    const X2p = Xeq / 2;

    return {
      Vphi0,
      Iphi0,
      cosPhi0,
      Rc,
      Xm,
      VphiLR,
      IphiLR,
      cosPhiLR,
      Zeq,
      Req,
      Xeq,
      R1,
      R2p,
      X1,
      X2p,
      usaR1Medido,
    };
  }, [VL0, I0, P0_kW, VLLR, ILR, PLR_kW, R1medida]);

  return (
    <main className="page-wrapper">
      <h1>Calculadora de parámetros de motor de inducción trifásico</h1>

      <section className="formula-block">
        <div className="tag">Descripción</div>
        <p>
          Ingresá los datos de los ensayos en vacío y rotor bloqueado, y
          opcionalmente la resistencia de estator medida. La calculadora estima
          R₁, R₂&apos;, X₁, X₂&apos;, R_c y X_m del circuito equivalente por
          fase (referidos al estator).
        </p>
      </section>

      {/* ========== BLOQUE 1: ENSAYO EN VACÍO ========== */}
      <section className="formula-block">
        <div className="tag">Ensayo en vacío</div>

        {/* Inputs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "0.25rem" }}>
              Tensión de línea V<sub>L0</sub> [V]
            </label>
            <input
              type="number"
              value={VL0}
              onChange={handleNumber(setVL0)}
              min={1}
              step={10}
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.25rem" }}>
              Corriente de línea I<sub>0</sub> [A]
            </label>
            <input
              type="number"
              value={I0}
              onChange={handleNumber(setI0)}
              min={0.1}
              step={0.1}
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.25rem" }}>
              Potencia total P<sub>0</sub> [kW]
            </label>
            <input
              type="number"
              value={P0_kW}
              onChange={handleNumber(setP0_kW)}
              min={0}
              step={0.01}
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>
        </div>

        {/* Resultados ensayo en vacío */}
        {!resultados ? (
          <p style={{ color: "#f97373" }}>
            Verificá que V<sub>L0</sub>, I<sub>0</sub> y P<sub>0</sub> sean
            válidos.
          </p>
        ) : (
          <>
            <h4>Resultados del ensayo en vacío</h4>
            <ul>
              <li>
                V<sub>φ0</sub> = {resultados.Vphi0.toFixed(1)} V
              </li>
              <li>
                I<sub>φ0</sub> = {resultados.Iphi0.toFixed(2)} A
              </li>
              <li>
                cos φ<sub>0</sub> ≈ {resultados.cosPhi0.toFixed(3)}
              </li>
              <li>
                R<sub>c</sub> ≈{" "}
                {resultados.Rc !== null
                  ? `${resultados.Rc.toFixed(2)} Ω`
                  : "no definido (G₀ ≈ 0)"}
              </li>
              <li>
                X<sub>m</sub> ≈{" "}
                {resultados.Xm !== null
                  ? `${resultados.Xm.toFixed(2)} Ω`
                  : "no definido (Bₘ ≈ 0)"}
              </li>
            </ul>
          </>
        )}
      </section>

      {/* ========== BLOQUE 2: ROTOR BLOQUEADO ========== */}
      <section className="formula-block">
        <div className="tag">Ensayo de rotor bloqueado</div>

        {/* Inputs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "0.25rem" }}>
              Tensión de línea V<sub>L,LR</sub> [V]
            </label>
            <input
              type="number"
              value={VLLR}
              onChange={handleNumber(setVLLR)}
              min={1}
              step={5}
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.25rem" }}>
              Corriente de línea I<sub>LR</sub> [A]
            </label>
            <input
              type="number"
              value={ILR}
              onChange={handleNumber(setILR)}
              min={0.1}
              step={0.1}
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.25rem" }}>
              Potencia total P<sub>LR</sub> [kW]
            </label>
            <input
              type="number"
              value={PLR_kW}
              onChange={handleNumber(setPLR_kW)}
              min={0}
              step={0.01}
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </div>
        </div>

        {/* Resultados rotor bloqueado */}
        {!resultados ? (
          <p style={{ color: "#f97373" }}>
            Verificá que V<sub>L,LR</sub>, I<sub>LR</sub> y P<sub>LR</sub> sean
            válidos.
          </p>
        ) : (
          <>
            <h4>Resultados del ensayo de rotor bloqueado</h4>
            <ul>
              <li>
                V<sub>φ,LR</sub> = {resultados.VphiLR.toFixed(1)} V
              </li>
              <li>
                I<sub>φ,LR</sub> = {resultados.IphiLR.toFixed(2)} A
              </li>
              <li>
                cos φ<sub>LR</sub> ≈ {resultados.cosPhiLR.toFixed(3)}
              </li>
              <li>
                Z<sub>eq</sub> = {resultados.Zeq.toFixed(3)} Ω
              </li>
              <li>
                R<sub>eq</sub> = {resultados.Req.toFixed(3)} Ω
              </li>
              <li>
                X<sub>eq</sub> = {resultados.Xeq.toFixed(3)} Ω
              </li>
            </ul>
          </>
        )}
      </section>

      {/* ========== BLOQUE 3: R1 + PARÁMETROS EQUIVALENTES ========== */}
      <section className="formula-block">
        <div className="tag">Parámetros del circuito equivalente</div>

        {/* Input R1 + resultados juntos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(200px, 1fr)",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "0.25rem" }}>
              R₁ medida por fase [Ω] (ohmímetro DC, opcional)
            </label>
            <input
              type="number"
              value={R1medida}
              onChange={handleNumber(setR1medida)}
              min={0}
              step={0.01}
              style={{ width: "100%", padding: "0.25rem" }}
            />
            <small style={{ opacity: 0.8 }}>
              Si se deja en 0, se usa la aproximación R₁ ≈ R₂&apos; ≈ R<sub>eq</sub>/2.
            </small>
          </div>
        </div>

        {!resultados ? (
          <p style={{ color: "#f97373" }}>
            Ingresá primero datos válidos de los ensayos para ver los
            parámetros equivalentes.
          </p>
        ) : (
          <>
            <ul>
              <li>
                R₁ = {resultados.R1.toFixed(3)} Ω{" "}
                {resultados.usaR1Medido
                  ? "(usando R₁ medida)"
                  : "(aprox. R₁ ≈ R₂')"}
              </li>
              <li>
                R₂&apos; ≈ {resultados.R2p.toFixed(3)} Ω
              </li>
              <li>
                X₁ ≈ {resultados.X1.toFixed(3)} Ω
              </li>
              <li>
                X₂&apos; ≈ {resultados.X2p.toFixed(3)} Ω
              </li>
              <li>
                R<sub>c</sub> ≈{" "}
                {resultados.Rc !== null
                  ? `${resultados.Rc.toFixed(2)} Ω`
                  : "no definido"}
              </li>
              <li>
                X<sub>m</sub> ≈{" "}
                  {resultados.Xm !== null
                    ? `${resultados.Xm.toFixed(2)} Ω`
                    : "no definido"}
              </li>
            </ul>

            <p style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>
              Nota: se asume reparto aproximadamente simétrico de la reactancia
              de dispersión: X₁ ≈ X₂&apos; ≈ X<sub>eq</sub>/2.
            </p>
          </>
        )}
      </section>
    </main>
  );
};

export default CalculadoraParametrosMotor;
