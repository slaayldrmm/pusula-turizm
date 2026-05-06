import React from "react";
import turlar from "../data/turlar";
import TurCard from "../components/TurCard";

const TurListesi = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
      {turlar.map(tur => (
        <TurCard key={tur.id} tur={tur} />
      ))}
    </div>
  );
};

export default TurListesi;
