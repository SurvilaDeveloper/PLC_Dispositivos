import React, { useState, useMemo } from "react";
import "./potenciaMotorTrifasico.css";

const CosenoPhiInteractive: React.FC = () => {
  const [cosPhi, setCosPhi] = useState(0.8);
  const P_kW = 10; // potencia activa de referencia

  const { phiDeg, S_kVA, Q_kVAr } = useMemo(() => {
    const phi = Math.acos(cosPhi);
    const phiDeg = (phi * 180) / Math.PI;
    const S = P_kW / cosPhi;
    const Q = Math.sqrt(Math.max(S * S - P_kW * P_kW, 0));
    return { phiDeg, S_kVA: S, Q_kVAr: Q };
  }, [cosPhi]);

  // Geometría del triángulo
  const S_len = 200;
  const P_len = S_len * cosPhi;
  const Q_len = Math.sqrt(S_len * S_len - P_len * P_len);
  const baseY = 180;

  return (
    <main className="pm-body">
      <h1>Demo interactiva – cos φ y triángulo de potencias</h1>

      <section className="formula-block">
        <div className="tag">cos φ interactivo</div>

        {/* Slider + texto arriba */}
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ marginBottom: "0.5rem" }}>
            Ajustá el valor de cos φ con el slider para ver cómo cambian el
            triángulo de potencias y los valores de P, Q y S.
          </p>
          <label
            htmlFor="cosPhiSlider"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            cos φ: <strong>{cosPhi.toFixed(2)}</strong> (φ ≈{" "}
            <strong>{phiDeg.toFixed(1)}°</strong>)
          </label>
          <input
            id="cosPhiSlider"
            type="range"
            min={0.3}
            max={1}
            step={0.01}
            value={cosPhi}
            onChange={(e) => setCosPhi(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        {/* Contenedor conjunto: datos + gráfico */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* Datos numéricos */}
          <div>
            <ul>
              <li>P (activa) = {P_kW.toFixed(2)} kW</li>
              <li>Q (reactiva) ≈ {Q_kVAr.toFixed(2)} kVAr</li>
              <li>S (aparente) ≈ {S_kVA.toFixed(2)} kVA</li>
              <li>
                cos φ = {cosPhi.toFixed(2)} &nbsp; | &nbsp; φ ≈{" "}
                {phiDeg.toFixed(1)}°
              </li>
            </ul>
          </div>

          {/* Gráfico justo debajo del slider y de los datos */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              viewBox="-20 0 280 240"
              style={{
                maxWidth: "400px",
                width: "100%",
                border: "1px solid #1e293b",
                borderRadius: 8,
                background: "#020617",
              }}
            >
              {/* Eje P */}
              <line
                x1={0}
                y1={baseY}
                x2={S_len + 30}
                y2={baseY}
                stroke="#94a3b8"
                strokeWidth={1}
              />

              {/* Eje Q */}
              <line
                x1={0}
                y1={baseY}
                x2={0}
                y2={baseY - (Q_len + 40)}
                stroke="#94a3b8"
                strokeWidth={1}
              />

              {/* P */}
              <line
                x1={0}
                y1={baseY}
                x2={P_len}
                y2={baseY}
                stroke="#38bdf8"
                strokeWidth={3}
              />

              {/* Q */}
              <line
                x1={P_len}
                y1={baseY}
                x2={P_len}
                y2={baseY - Q_len}
                stroke="#f97373"
                strokeWidth={3}
              />

              {/* S */}
              <line
                x1={0}
                y1={baseY}
                x2={P_len}
                y2={baseY - Q_len}
                stroke="#4ade80"
                strokeWidth={3}
              />

              {/* Relleno */}
              <polygon
                points={`0,${baseY} ${P_len},${baseY} ${P_len},${baseY - Q_len}`}
                fill="#334155"
                opacity={0.3}
              />

              {/* Etiquetas P, Q, S */}
              <text
                x={P_len / 2}
                y={baseY + 16}
                fill="#e5e7eb"
                fontSize={12}
                textAnchor="middle"
              >
                P
              </text>

              <text
                x={P_len + 8}
                y={baseY - Q_len / 2}
                fill="#e5e7eb"
                fontSize={12}
              >
                Q
              </text>

              <text
                x={P_len / 2}
                y={baseY - Q_len / 2}
                fill="#e5e7eb"
                fontSize={12}
                textAnchor="middle"
              >
                S
              </text>

              {/* Arco del ángulo φ */}
              <path
                d={`
                  M 0 ${baseY}
                  A 35 35 0 0 1 ${35 * cosPhi} ${
                  baseY -
                  35 *
                    Math.sqrt(
                      Math.max(1 - cosPhi * cosPhi, 0)
                    )
                }
                `}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth={1}
              />
              <text
                x={25 * cosPhi}
                y={
                  baseY -
                  25 *
                    Math.sqrt(
                      Math.max(1 - cosPhi * cosPhi, 0)
                    )
                }
                fill="#e5e7eb"
                fontSize={12}
              >
                φ
              </text>

              {/* Etiquetas de ejes */}
              <text
                x={S_len + 25}
                y={baseY + 14}
                fill="#94a3b8"
                fontSize={10}
                textAnchor="end"
              >
                Eje P (kW)
              </text>
              <text
                x={4}
                y={baseY - (Q_len + 28)}
                fill="#94a3b8"
                fontSize={10}
              >
                Eje Q (kVAr)
              </text>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CosenoPhiInteractive;

