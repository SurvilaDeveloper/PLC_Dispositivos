import React from "react";

const TrianguloPotenciasSVG: React.FC = () => {
  // Dimensiones del triángulo en "unidades SVG"
  const P = 200;      // cateto horizontal
  const Q = 120;      // cateto vertical
  const baseY = 150;  // altura (en Y) donde apoya la base del triángulo

  return (
    <svg
      viewBox="-20 0 280 220"
      style={{
        maxWidth: "400px",
        width: "100%",
        border: "1px solid #1e293b",
        borderRadius: 8,
        background: "#020617",
      }}
    >
      {/* Eje P (horizontal) */}
      <line
        x1={0}
        y1={baseY}
        x2={P + 30}
        y2={baseY}
        stroke="#94a3b8"
        strokeWidth={1}
      />

      {/* Eje Q (vertical) */}
      <line
        x1={0}
        y1={baseY}
        x2={0}
        y2={baseY - Q - 30}
        stroke="#94a3b8"
        strokeWidth={1}
      />

      {/* Triángulo P-Q-S */}
      {/* P (horizontal) */}
      <line
        x1={0}
        y1={baseY}
        x2={P}
        y2={baseY}
        stroke="#38bdf8"
        strokeWidth={3}
      />

      {/* Q (vertical, hacia arriba) */}
      <line
        x1={P}
        y1={baseY}
        x2={P}
        y2={baseY - Q}
        stroke="#f97373"
        strokeWidth={3}
      />

      {/* S (hipotenusa) */}
      <line
        x1={0}
        y1={baseY}
        x2={P}
        y2={baseY - Q}
        stroke="#4ade80"
        strokeWidth={3}
      />

      {/* Relleno suave del triángulo */}
      <polygon
        points={`0,${baseY} ${P},${baseY} ${P},${baseY - Q}`}
        fill="#334155"
        opacity={0.3}
      />

      {/* Etiquetas P, Q, S */}
      <text
        x={P / 2}
        y={baseY + 14}
        fill="#e5e7eb"
        fontSize={12}
        textAnchor="middle"
      >
        P (Activa)
      </text>

      <text
        x={P-14}
        y={baseY - Q / 2}
        fill="#e5e7eb"
        fontSize={12}
      >
        Q (Reactiva)
      </text>

      <text
        x={P / 2}
        y={baseY - Q / 2}
        fill="#e5e7eb"
        fontSize={12}
        textAnchor="middle"
      >
        S (Aparente)
      </text>

      {/* Arco del ángulo φ */}
      <path
        d={`
          M 0 ${baseY}
          A 40 40 0 0 1 36 ${baseY - 20}
        `}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth={1}
      />
      <text x={30} y={baseY - 18} fill="#e5e7eb" fontSize={12}>
        φ
      </text>

      {/* Etiquetas de ejes */}
      <text
        x={P + 20}
        y={baseY + 12}
        fill="#94a3b8"
        fontSize={10}
        textAnchor="end"
      >
        Eje P (kW)
      </text>
      <text
        x={4}
        y={baseY - Q - 20}
        fill="#94a3b8"
        fontSize={10}
      >
        Eje Q (kVAr)
      </text>
    </svg>
  );
};

export default TrianguloPotenciasSVG;

