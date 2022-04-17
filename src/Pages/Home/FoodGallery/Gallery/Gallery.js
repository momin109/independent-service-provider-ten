import React from 'react';

const Gallery = ({ gallery }) => {
    const { img } = gallery
    return (
        <div>
            {img}
        </div>
    );
};

export default Gallery;