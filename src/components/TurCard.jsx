import React from "react";
import { Link } from "react-router-dom";

const TurCard = ({ tur }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      margin: "10px",
      width: "250px",
      textAlign: "center",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
    }}>
      <h3>{tur.isim}</h3>
      <p>{tur.bolge}</p>
      <p>{tur.aciklama}</p>
      <Link to={`/turlar/${tur.id}`}>
        <button style={{
          padding: "10px 15px",
          backgroundColor: "#0077b6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Detayı Gör
        </button>
      </Link>
    </div>
  );
};

export default TurCard;
