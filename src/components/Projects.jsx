const projects = [
    {
      year: '2025',
      title: 'ALGame',
      subtitle:
        'Ambiente de Programação Assistido por IA com Monitoramento EEG para Estudantes com TDAH',
      program: 'FABIN 2025',
      description:
        'Primeira implementação experimental desenvolvida no contexto do IncluC0de, voltada inicialmente ao ensino de programação.'
    },
    {
      year: '2026–2027',
      title: 'Plugin Neuroadaptativo para Moodle',
      subtitle:
        'Desenvolvimento de Plugin Neuroadaptativo para o Moodle Baseado em Inteligência Artificial e Monitoramento EEG para Inclusão de Estudantes com TDAH',
      program: 'PIBITI/CNPq',
      description:
        'Investiga a integração de mecanismos neuroadaptativos a um Ambiente Virtual de Aprendizagem de propósito geral.'
    },
    {
      year: '2026',
      title: 'MentorIA Neuroadaptativo',
      subtitle:
        'Agente Educacional Inteligente Sensível à Sobrecarga Cognitiva para Apoio ao Ensino de Programação',
      program: 'FABIN 2026',
      description:
        'Investiga agentes educacionais capazes de considerar evidências relacionadas à sobrecarga cognitiva durante a interação.'
    }
  ];
  
  function Projects() {
    return (
      <section id="projetos" className="section alternate">
        <div className="container">
          <h2>Projetos e Artefatos</h2>
  
          <p className="section-intro">
            Diferentes projetos de pesquisa, desenvolvimento tecnológico e
            inovação são utilizados para experimentar e avaliar os princípios
            da Arquitetura de Referência IncluC0de.
          </p>
  
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-year">{project.year}</span>
  
                <h3>{project.title}</h3>
  
                <h4>{project.subtitle}</h4>
  
                <p>{project.description}</p>
  
                <span className="project-program">
                  {project.program}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;