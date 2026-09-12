const researchers = [
    {
      name: 'Prof. Dr. Leandro Vaguetti',
      role: 'Coordenador',
      institution: 'Instituto Federal de Brasília'
    },
    {
      name: 'Prof. Dr. Fabiano Cavalcanti Fernandes',
      role: 'Pesquisador',
      institution: 'Instituto Federal de Brasília'
    },
    {
      name: 'Profa. Me. Hially Rabelo Vaguetti',
      role: 'Pesquisadora',
      institution: 'Instituto Federal de Brasília'
    }
  ];

  const bolsistas = [
    {
      name: 'Gabriel Oliveira Pinho',
      role: 'PIBITI/Cnpq',
      institution: 'Instituto Federal de Brasília'
    },
    {
      name: 'Gustavo Ferraz Mota',
      role: 'PIBITI/IFB',
      institution: 'Instituto Federal de Brasília'
    },
    {
      name: 'Rafael Henrique Carvalho da Silva',
      role: 'FABIN25/IFB',
      institution: 'Instituto Federal de Brasília'
    },
    {
      name: 'Sofia Teixeira da Paixão da Silva',
      role: 'FABIN26/IFB',
      institution: 'Instituto Federal de Brasília'
    },
    {
      name: 'Leonilson de Araújo dos Santos',
      role: 'FABIN26/IFB',
      institution: 'Instituto Federal de Brasília'
    }
  ];
  
  function Team() {
    return (
      <section id="equipe" className="section">
        <div className="container">
          <h2>Equipe</h2>
  
          <p className="section-intro">
            O IncluC0de é desenvolvido no Instituto Federal de Brasília e reúne
            pesquisadores, estudantes e colaboradores envolvidos em projetos
            relacionados à Computação, Educação, Inteligência Artificial e
            Inclusão Cognitiva.
          </p>
  
          <div className="team-grid">
            {researchers.map((researcher) => (
              <article className="team-card" key={researcher.name}>
                <div className="team-avatar">
                  {researcher.name
                    .replace('Prof. Dr. ', '')
                    .replace('Profa. Me. ', '')
                    .split(' ')
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join('')}
                </div>
  
                <h3>{researcher.name}</h3>
  
                <p className="team-role">
                  {researcher.role}
                </p>
  
                <p className="team-institution">
                  {researcher.institution}
                </p>
              </article>
            ))}
          </div>

          <h2>Bolsistas</h2>

          <div className="team-grid">
            {bolsistas.map((researcher) => (
              <article className="team-card" key={researcher.name}>
                <div className="team-avatar">
                  {researcher.name
                    .replace('Prof. Dr. ', '')
                    .replace('Profa. Me. ', '')
                    .split(' ')
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join('')}
                </div>
  
                <h3>{researcher.name}</h3>
  
                <p className="team-role">
                  {researcher.role}
                </p>
  
                <p className="team-institution">
                  {researcher.institution}
                </p>
              </article>
            ))}
          </div>
  
          <p className="team-note">
            Outros pesquisadores, estudantes de iniciação científica e
            tecnológica, bolsistas e colaboradores podem integrar projetos
            específicos desenvolvidos no âmbito do programa.
          </p>
        </div>
      </section>
    );
  }
  
  export default Team;