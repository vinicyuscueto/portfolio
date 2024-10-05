import React, { useEffect, useState } from 'react';
import './Knowledge.css';

const Knowledge = () => {
    const [knowledge, setKnowledge] = useState([]);

    useEffect(() => {
        const fetchKnowledge = async () => {
            try {
                const response = await fetch("/portfolio/data.json");
                const data = await response.json();
                setKnowledge(data.knowledge);
            } catch (error) {
                console.error("Erro ao encontrar tecnologias.", error);
            }
        }

        fetchKnowledge();
    }, [])

    return (
        <div className="layout">
            <section id="knowledge">
                <h1>CONHECIMENTO</h1>
                <div className="knowledge-grid">
                    {knowledge.map((item, index) => (
                        <div className="knowledge-item" key={index}>
                            <i className={item.icon}></i>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Knowledge;