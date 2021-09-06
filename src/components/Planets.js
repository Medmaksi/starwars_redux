import React from 'react';

const Planets = ({planet}) => {
    return (
        <div className="card">
            <h3>{planet.name}</h3>
            <p>{planet.climate}</p>
        </div>
    )
}

export default Planets;
