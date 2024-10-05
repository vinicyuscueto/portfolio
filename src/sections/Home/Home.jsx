import React from 'react';
import Social from '../../components/Social/Social'
import './Home.css';

const Home = () => {
  return (
    <div className="layout">
      <section id="home">
        <h1>VINICYUS CUETO</h1>
        <p>Desenvolvedor Web Júnior &#40;Front-end&#41; | Analista de Software</p>
        <p>React.js | HTML | CSS | Javascript</p>
        <Social />
      </section>
    </div>
  );
}

export default Home;