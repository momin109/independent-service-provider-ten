import React, { useEffect, useState } from 'react';
import Food from '../../Food/Food';
import './Foods.css';

const Foods = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div id='foods' className=''>
            <h1 className='foods-title'>Most Popular foods</h1>
            <div className='foods-container'>
                {
                    foods.map(food => <Food
                        key={food.id}
                        food={food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;