const principles = [
    {
      icon: '🔗',
      title: 'Interoperabilidade',
      text: 'Diferentes aplicações educacionais podem utilizar os mecanismos de adaptação do IncluC0de.'
    },
    {
      icon: '🧩',
      title: 'Multimodalidade',
      text: 'Diferentes fontes e categorias de informação podem contextualizar o processo adaptativo.'
    },
    {
      icon: '⚙️',
      title: 'Opcionalidade',
      text: 'Nenhuma modalidade específica, diagnóstico, sensor ou EEG é obrigatória.'
    },
    {
      icon: '🧱',
      title: 'Extensibilidade',
      text: 'Novas fontes de dados, estratégias e tecnologias podem ser incorporadas progressivamente.'
    },
    {
      icon: '🎯',
      title: 'Preservação Pedagógica',
      text: 'A adaptação deve preservar objetivos de aprendizagem e conceitos essenciais.'
    },
    {
      icon: '🧠',
      title: 'Orientação às Necessidades',
      text: 'As adaptações consideram necessidades e evidências, evitando associações determinísticas.'
    },
    {
      icon: '🔎',
      title: 'Transparência',
      text: 'As estratégias e conhecimentos utilizados nas adaptações devem ser rastreáveis.'
    },
    {
      icon: '🔐',
      title: 'Privacidade e Ética',
      text: 'O uso de dados deve respeitar minimização, consentimento, segurança e privacidade.'
    },
    {
      icon: '🔄',
      title: 'Independência Tecnológica',
      text: 'Modelos, aplicações, sensores e mecanismos de IA podem evoluir sem alterar a arquitetura.'
    }
  ];
  
  function Principles() {
    return (
      <section id="principios" className="section alternate">
        <div className="container">
          <h2>Princípios da Arquitetura</h2>
  
          <div className="card-grid">
            {principles.map((principle) => (
              <article className="card" key={principle.title}>
                <div className="card-icon">{principle.icon}</div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Principles;