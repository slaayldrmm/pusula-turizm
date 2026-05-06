import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnaSayfa from "./pages/AnaSayfa";
import TurListesi from "./pages/TurListesi";
import TurDetail from "./pages/TurDetail";
import Iletisim from "./pages/Iletisim";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/turlar" element={<TurListesi />} />
        <Route path="/turlar/:id" element={<TurDetail />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
