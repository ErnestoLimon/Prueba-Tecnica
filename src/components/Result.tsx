// Result.tsx
import React from "react";

interface Props {
  valor: number | null;
  n: number | null;
}

export const Result: React.FC<Props> = ({ valor, n }) => (
  <div>
    <div style={resultStyle}>
      <h3>El resultado de la serie {n !== null ? n : "n"} es:</h3>
    </div>
    <div style={resultStyle}>{valor !== null ? valor : "Sin cálculo"}</div>
  </div>
);

// Estilos
const resultStyle: React.CSSProperties = {
  marginTop: "20px",
  fontSize: "18px",
};
