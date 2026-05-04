const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1>Vinicyus Cueto</h1>
        <h5>Desenvolvedor Web Full Stack | Analista de Software</h5>
        <h5>React • HTML • CSS • JavaScript • Node.js</h5>
        <div className="flex justify-center space-x-4 my-5">
          <a
            href="https://www.linkedin.com/in/vinicyuscueto/"
            target="_blank"
            className="button"
          >
            <i className="bx bxl-linkedin pr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/vinicyuscueto/"
            target="_blank"
            className="button"
          >
            <i className="bx bxl-github pr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
