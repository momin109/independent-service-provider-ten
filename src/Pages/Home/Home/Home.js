import React from 'react';
import FoodGallery from '../FoodGallery/FoodGallery/FoodGallery';


import Foods from '../Services/Foods/Foods';




const Home = () => {
    return (
        <div>
            <Foods></Foods>
            <FoodGallery></FoodGallery>
        </div>
    );
};

export default Home;