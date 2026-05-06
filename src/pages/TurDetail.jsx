import React from "react";
import { useParams } from "react-router-dom";
import turlar from "../data/turlar";

const TurDetail = () => {
  const { id } = useParams();
  const tur = turlar.find(t => t.id === parseInt(id));

  if (!tur) return <p>Tur bulunamadı!</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{tur.isim}</h2>
      <p>Bölge: {tur.bolge}</p>
      <p>Açıklama: {tur.aciklama}</p>
      <h3>Paketler:</h3>
      <ul>
        {tur.paketler.map((p, index) => (
          <li key={index}>{p.isim} - {p.fiyat} TL</li>
        ))}
      </ul>
    </div>
  );
};

export default TurDetail;
