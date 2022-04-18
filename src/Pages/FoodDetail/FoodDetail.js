import React from 'react';
import { useParams } from 'react-router-dom';

const FoodDetail = () => {
    const { foodId } = useParams();
    return (
        <div>
            <h2>wellcome to fooddeatil: {foodId}</h2>
        </div>
    );
};

export default FoodDetail;