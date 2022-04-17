import React from 'react';
import Gallery from '../Gallery/Gallery';

import gallery1 from '../../../../image/gallery/gallery1.jpg';
import gallery2 from '../../../../image/gallery/gallery2.jpg';
import gallery3 from '../../../../image/gallery/gallery3.jpg';
import gallery4 from '../../../../image/gallery/gallery4.jpg';
import gallery5 from '../../../../image/gallery/gallery5.jpg';
import gallery6 from '../../../../image/gallery/gallery6.jpg';
import gallery7 from '../../../../image/gallery/gallery7.jpg';
import gallery8 from '../../../../image/gallery/gallery8.jpg';
import gallery9 from '../../../../image/gallery/gallery9.jpg';



const foodGallery = [
    { id: 1, name: 'food', img: gallery1 },
    { id: 2, name: 'food', img: gallery2 },
    { id: 3, name: 'food', img: gallery3 },
    { id: 4, name: 'food', img: gallery4 },
    { id: 5, name: 'food', img: gallery5 },
    { id: 6, name: 'food', img: gallery6 },
    { id: 7, name: 'food', img: gallery7 },
    { id: 8, name: 'food', img: gallery8 },
    { id: 9, name: 'food', img: gallery9 },

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