import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Architecture from './components/Architecture';
import Principles from './components/Principles';
import Scenarios from './components/Scenarios';
import Projects from './components/Projects';
import Team from './components/Team';
import Footer from './components/Footer';

import './styles.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Section id="sobre" title="Sobre o IncluC0de">
          <p>
            O <strong>IncluC0de</strong> é um programa interdisciplinar de
            pesquisa voltado ao desenvolvimento, integração e avaliação de
            tecnologias educacionais adaptativas destinadas à promoção da
            inclusão cognitiva em ambientes digitais de aprendizagem.
          </p>

          <p>
            O programa investiga como conhecimentos da Computação, Educação,
            Inteligência Artificial, Learning Analytics, Engenharia de
            Software, Interação Humano-Computador e Educação Inclusiva podem
            ser integrados para desenvolver ambientes digitais capazes de
            responder às diferentes necessidades e formas de processamento
            cognitivo dos estudantes.
          </p>
        </Section>

        <Section id="inclusao" title="Inclusão Cognitiva">
          <blockquote>
            A capacidade de um ambiente educacional identificar, compreender
            e adaptar-se continuamente às diferentes formas de processamento
            cognitivo dos estudantes, reduzindo barreiras à aprendizagem e
            promovendo oportunidades equitativas de participação,
            desenvolvimento e construção do conhecimento.
          </blockquote>
        </Section>

        <Section id="funcionamento" title="Como o IncluC0de funciona">
          <p>
            O IncluC0de organiza a adaptação de conteúdos educacionais como um
            processo contínuo no qual aplicações educacionais fornecem
            conteúdos e informações sobre o contexto de aprendizagem.
          </p>

          <div className="process-flow">
            <span>Conteúdo Original</span>
            <span>+</span>
            <span>Contexto Multimodal</span>
            <span>+</span>
            <span>Conhecimento Pedagógico-Inclusivo</span>
            <span>→</span>
            <strong>Agente IncluC0de</strong>
            <span>→</span>
            <span>Conteúdo Adaptado</span>
          </div>
        </Section>

        <Architecture />

        <Principles />

        <Scenarios />

        <Projects />

        <Section id="pesquisa" title="Pesquisa e Experimentação">
          <p>
            A Arquitetura de Referência IncluC0de também constitui uma
            infraestrutura conceitual para experimentação científica,
            permitindo avaliar diferentes estratégias de adaptação, fontes de
            contexto e mecanismos de Inteligência Artificial.
          </p>
        </Section>

        <Section id="privacidade" title="Privacidade, Ética e Segurança">
          <p>
            O IncluC0de considera privacidade, ética, transparência,
            minimização de dados e segurança da informação como aspectos
            transversais ao desenvolvimento das tecnologias associadas ao
            programa.
          </p>

          <p>
            A Arquitetura de Referência IncluC0de não possui finalidade clínica
            ou diagnóstica.
          </p>
        </Section>

        <Team />
      </main>

      <Footer />
    </>
  );
}

export default App;