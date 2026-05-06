import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "20px", backgroundColor: "#0077b6", color: "white" }}>
      <h1>Pusula Turizm</h1>
      <nav>
        <Link to="/" style={{ marginRight: "15px", color: "white" }}>AnaSayfa</Link>
        <Link to="/turlar" style={{ marginRight: "15px", color: "white" }}>Turlar</Link>
        <Link to="/iletisim" style={{ color: "white" }}>İletişim</Link>
      </nav>
    </header>
  );
};

export default Header;
