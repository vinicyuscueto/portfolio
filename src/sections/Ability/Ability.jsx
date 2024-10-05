import React, { useEffect, useState } from 'react';
import './Ability.css';

const Ability = () => {
    const [ability, setAbility] = useState([]);

    useEffect(() => {
        const fetchAbility = async () => {
            try {
                const response = await fetch("/portfolio/data.json");
                const data = await response.json();
                setAbility(data.ability);
            } catch (error) {
                console.error("Erro ao encontrar habilidades.", error);
            }
        }

        fetchAbility();
    }, [])

    return (
        <div className="layout">
            <section id="ability">
                <h1>HABILIDADES</h1>
                <div className="ability-grid">
                    {ability.map((item, index) => (
                        <div className="ability-item" key={index}>
                            <i className={item.icon}></i>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Ability;
