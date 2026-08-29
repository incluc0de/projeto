function Architecture() {
    const contextItems = [
      'Perfil e necessidades',
      'Contexto pedagógico',
      'Desempenho',
      'Comportamento e interação',
      'Autorreporte',
      'Estado cognitivo estimado',
      'Dados neurofisiológicos',
      'Histórico educacional',
      'Contexto adaptativo'
    ];
  
    return (
      <section id="arquitetura" className="section">
        <div className="container">
          <h2>Arquitetura de Referência IncluC0de</h2>
  
          <p className="section-intro">
            A Arquitetura de Referência IncluC0de organiza a adaptação de
            conteúdos educacionais a partir da integração entre conteúdo,
            contexto multimodal, conhecimento pedagógico-inclusivo e mecanismos
            de Inteligência Artificial.
          </p>
  
          <div className="architecture-flow">
            <div className="architecture-block">
              <span className="architecture-label">Entrada</span>
              <h3>Conteúdo Educacional Original</h3>
              <p>
                Explicações, exercícios, questões, desafios, exemplos,
                instruções, feedbacks, dicas e outros recursos educacionais.
              </p>
            </div>
  
            <div className="architecture-symbol">+</div>
  
            <div className="architecture-block">
              <span className="architecture-label">Contexto</span>
              <h3>Contexto Multimodal</h3>
  
              <ul className="architecture-list">
                {contextItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
  
            <div className="architecture-symbol">+</div>
  
            <div className="architecture-block">
              <span className="architecture-label">Conhecimento</span>
              <h3>Conhecimento Pedagógico-Inclusivo</h3>
              <p>
                Educação Inclusiva, Neurodiversidade, Desenho Universal para
                Aprendizagem, Teoria da Carga Cognitiva, scaffolding, feedback
                pedagógico e outras estratégias educacionais.
              </p>
            </div>
          </div>
  
          <div className="architecture-arrow">↓</div>
  
          <div className="architecture-agent">
            <span className="architecture-label">Núcleo da Arquitetura</span>
  
            <h3>Agente IncluC0de</h3>
  
            <div className="agent-steps">
              <span>1. Interpretar</span>
              <span>2. Contextualizar</span>
              <span>3. Selecionar</span>
              <span>4. Adaptar</span>
            </div>
          </div>
  
          <div className="architecture-arrow">↓</div>
  
          <div className="architecture-output">
            <span className="architecture-label">Saída</span>
  
            <h3>Conteúdo Educacional Adaptado</h3>
  
            <p>
              Reorganização, segmentação, exemplos, pistas, feedback adaptativo,
              scaffolding, recursos multimodais, adequação da complexidade e
              outras estratégias de adaptação.
            </p>
          </div>
  
          <div className="adaptive-cycle">
            <strong>Ciclo Adaptativo</strong>
  
            <div className="cycle-items">
              <span>Observar</span>
              <span>→</span>
              <span>Contextualizar</span>
              <span>→</span>
              <span>Adaptar</span>
              <span>→</span>
              <span>Aplicar</span>
              <span>→</span>
              <span>Observar</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Architecture;