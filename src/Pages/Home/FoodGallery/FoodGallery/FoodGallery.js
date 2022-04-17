import React from 'react';
import Gallery from '../Gallery/Gallery';

const foodGallery = [
    { id: 1, name: 'food', img: 'https://i.ibb.co/j8GBMMG/p04tx3m6.jpg' },
    { id: 2, name: 'food', img: 'https://i.ibb.co/j8GBMMG/p04tx3m6.jpg' },
    { id: 3, name: 'food', img: 'https://i.ibb.co/j8GBMMG/p04tx3m6.jpg' },
    { id: 4, name: 'food', img: 'https://i.ibb.co/j8GBMMG/p04tx3m6.jpg' },
    { id: 5, name: 'food', img: 'https://i.ibb.co/j8GBMMG/p04tx3m6.jpg' },
    { id: 6, name: 'food', img: 'https://i.ibb.co/j8GBMMG/p04tx3m6.jpg' }
]

const FoodGallery = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Our Food Gallary</h1>
            <div className='row'>
                {
                    foodGallery.map(gallery => <Gallery
                        key={gallery.id}
                        gallery={gallery}
                    ></Gallery>)
                }
            </div>
        </div>
    );
};

export default FoodGallery;