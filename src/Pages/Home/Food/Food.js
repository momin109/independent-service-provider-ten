import React from 'react';
import './Food.css';

const Food = ({ food }) => {
    const { id, name, price, img, description } = food;
    return (
        <div className='food'>
            <img src={img} alt="" />
            <h3>name: {name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button>Oder Now :{name}</button>
        </div>
    );
};

export default Food;