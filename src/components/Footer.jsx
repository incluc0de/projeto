function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <strong>IncluC0de</strong>
  
            <p>
              Programa de Pesquisa para Desenvolvimento e Avaliação de
              Tecnologias Educacionais Adaptativas para Promoção da Inclusão
              Cognitiva em Ambientes Digitais de Aprendizagem.
            </p>
          </div>
  
          <div className="footer-links">
            <a href="#sobre">Sobre</a>
            <a href="#arquitetura">Arquitetura</a>
            <a href="#principios">Princípios</a>
            <a href="#cenarios">Cenários</a>
            <a href="#projetos">Projetos</a>
            <a href="#equipe">Equipe</a>
          </div>
  
          <div className="footer-external">
            <a
              href="https://github.com/incluc0de"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
  
            <a
              href="https://github.com/incluc0de/projeto"
              target="_blank"
              rel="noreferrer"
            >
              Repositório do Projeto
            </a>
          </div>
        </div>
  
        <div className="container footer-bottom">
          <span>
            © {year} IncluC0de
          </span>
  
          <span>
            Instituto Federal de Brasília
          </span>
        </div>
      </footer>
    );
  }
  
  export default Footer;