import React from "react";
import "./style.css";

function App() {
  return (
    <div className="menu-container">
      <header className="menu-header">
        <img src="logo.png" alt="Logo" className="menu-logo" />
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
      </header>
      <nav className="menu-options">
        <a href="#profile">Perfil</a>
        <a href="#posts">Postagens</a>
        <a href="#friends">Amigos</a>
        <a href="#photos">Fotos</a>
        <a href="#videos">Vídeos</a>
        <a href="#settings">Configurações</a>
      </nav>
    </div>
  );
}

export default App;
