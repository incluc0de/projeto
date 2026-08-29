import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-content">
        <a href="#inicio" className="brand">
          IncluC0de
        </a>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav className={open ? 'nav open' : 'nav'}>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#arquitetura" onClick={closeMenu}>Arquitetura</a>
          <a href="#principios" onClick={closeMenu}>Princípios</a>
          <a href="#cenarios" onClick={closeMenu}>Cenários</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#equipe" onClick={closeMenu}>Equipe</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;