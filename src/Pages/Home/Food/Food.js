import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Food.css';

const Food = ({ food }) => {
    const { id, name, price, img, description } = food;
    const navigate = useNavigate();
    const navigateToFoodDetail = id => {
        navigate(`/food/${id}`)
    }
    return (
        <div className='food'>
            <img src={img} alt="" />
            <h3>name: {name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToFoodDetail(id)} className='btn btn-primary'>Oder Now {name}</button>
        </div>
    );
};

export default Food;