const scenarios = [
    {
      title: 'Cenário Básico',
      description:
        'A aplicação fornece o conteúdo educacional e seu objetivo pedagógico. O agente utiliza o Conhecimento Pedagógico-Inclusivo para produzir uma adaptação.',
      flow:
        'Conteúdo Original + Objetivo Pedagógico → Agente IncluC0de → Conteúdo Adaptado'
    },
    {
      title: 'Cenário Educacional Contextualizado',
      description:
        'Informações sobre a atividade e o desempenho do estudante são incorporadas ao processo adaptativo, como erros, tentativas, pistas e evolução do desempenho.',
      flow:
        'Conteúdo + Contexto Pedagógico + Desempenho → Agente IncluC0de → Conteúdo Adaptado'
    },
    {
      title: 'Cenário com Histórico',
      description:
        'A aplicação utiliza informações de interações anteriores, dificuldades observadas, estratégias já aplicadas e evidências relacionadas às adaptações anteriores.',
      flow:
        'Conteúdo + Desempenho + Histórico + Adaptações Anteriores → Agente IncluC0de → Conteúdo Adaptado'
    },
    {
      title: 'Cenário Cognitivamente Contextualizado',
      description:
        'Evidências comportamentais e estimativas relacionadas à atenção, esforço cognitivo, carga cognitiva, sobrecarga ou engajamento podem ser incorporadas ao contexto.',
      flow:
        'Conteúdo + Desempenho + Comportamento + Estado Cognitivo Estimado → Agente IncluC0de → Conteúdo Adaptado'
    },
    {
      title: 'Cenário Experimental Multimodal',
      description:
        'Em contextos de pesquisa, diferentes modalidades podem ser combinadas para investigar sua contribuição individual ou conjunta para o processo adaptativo.',
      flow:
        'Conteúdo + Perfil + Contexto Pedagógico + Desempenho + Comportamento + Histórico + Autorreporte + Estado Cognitivo + Dados Neurofisiológicos + Contexto Adaptativo → Agente IncluC0de → Conteúdo Adaptado'
    }
  ];
  
  function Scenarios() {
    return (
      <section id="cenarios" className="section">
        <div className="container">
          <h2>Cenários de Utilização</h2>
  
          <p className="section-intro">
            A Arquitetura de Referência IncluC0de pode operar em diferentes
            configurações, de acordo com as informações disponíveis, os recursos
            da aplicação educacional e os objetivos pedagógicos ou experimentais.
          </p>
  
          <p className="section-intro">
            Nenhum diagnóstico, sensor ou modalidade específica de informação é
            obrigatório. A adaptação pode ocorrer desde configurações simples até
            cenários experimentais multimodais.
          </p>
  
          <div className="scenarios-list">
            {scenarios.map((scenario, index) => (
              <article className="scenario-card" key={scenario.title}>
                <div className="scenario-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
  
                <div className="scenario-content">
                  <h3>{scenario.title}</h3>
  
                  <p>{scenario.description}</p>
  
                  <div className="scenario-flow">
                    {scenario.flow}
                  </div>
                </div>
              </article>
            ))}
          </div>
  
          <div className="scenario-note">
            <strong>Importante:</strong> uma configuração mais complexa não
            significa necessariamente uma adaptação melhor. Uma das questões
            investigadas pelo IncluC0de é determinar quais informações são
            relevantes para diferentes adaptações, usuários e contextos de
            aprendizagem.
          </div>
        </div>
      </section>
    );
  }
  
  export default Scenarios;