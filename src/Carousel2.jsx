import { render } from 'react-dom';
import React from 'react';
import Carousel from 'react-image-carousel';
function Carousel2() {

    let images = [
        '/img/landing1.jpg',
        '/img/landing2.jpg',
        '/img/landing3.jpg',
        '/img/landing4.jpg',
        '/img/landing5.jpg'
    ];
    return (
        <div className="my-carousel">
            <Carousel images={images}
                thumb={true}
                loop={true}
                autoplay={3000} />
        </div>

    )
}

export default Carousel2;



