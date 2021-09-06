import React from 'react';

const People = ({people}) => {
    console.log(people);
    return (
        <div className="card">
            <h3>{people.name}</h3>
        </div>
    )
}

export default People;
