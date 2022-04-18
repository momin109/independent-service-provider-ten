import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../image/banner/banner1.jpg';
import banner2 from '../../../image/banner/banner2.jpg';
import banner3 from '../../../image/banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Could you survive on just one food</h3>
                    <p>We’re constantly told about the benefits of a varied diet. But what if you had to survive on just one food – what would you keep you alive the longest?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>The Nature of Things: Food for Thought</h3>
                    <p>When it comes to diet, we swallow a lot of advice. Food for Thought sorts through the latest science to create a new recipe for health.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Food and nutrition tips during self-quarantine</h3>
                    <p>
                        This guidance is aimed at individuals and families in contexts where self-quarantine and isolation have been recommended or required.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;