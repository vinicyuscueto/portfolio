import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="layout">
            <section id="about">
                <h1>SOBRE MIM</h1>
                <div className="about-content">
                    <i className="bx bx-user-pin"></i>
                    <p>Formado em Ciência da Computação, atualmente estudando desenvolvimento de aplicações Web, com o objetivo de poder atuar como um Desenvolvedor Web &#40;Front-end&#41;. Direcionei meu aprendizado à biblioteca React.js, que utiliza conceitos de HTML, CSS e Javascript; sintetizando recursos e tecnologias, desde ferramentas como o Node.js até frameworks como Bootstrap, por exemplo.</p>
                    <p>Possuo experiência de estágio em Arquitetura Corporativa, em especial como arquiteto de solução, na qual me permitiu adquirir conhecimento de tendências de uso de tecnologias, análise, recomendação e construção de cenários de solução, governança de processo atráves de representações de indicadores, entre outros.</p>
                </div>
            </section >
        </div >
    )
}

export default About;