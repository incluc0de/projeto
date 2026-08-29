function Section({ id, title, children }) {
    return (
      <section id={id} className="section">
        <div className="container">
          <h2>{title}</h2>
  
          <div className="section-content">
            {children}
          </div>
        </div>
      </section>
    );
  }
  
  export default Section;