import React from 'react';

const Gallery = ({ gallery }) => {
    const { img, name } = gallery
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Gallery;