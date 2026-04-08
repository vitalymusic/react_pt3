import image1 from '../assets/hero.png';
import image2 from '../assets/react.svg';
import image3 from '../assets/vite.svg';

import { useState, useEffect } from 'react';

function Slider() {
    const images = [image1, image2, image3];
    const [slide, setSlide] = useState(0);

    // 1. Iznesam loģiku atsevišķās funkcijās
    const nextSlide = () => {
        setSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // 2. useEffect ar tīrīšanas funkciju
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000); // 1 sekunde ir par ātru, ieliku 2

        // Šī rinda "nogalina" veco taimeri, pirms sākas jauns
        return () => clearInterval(interval);
    }, [slide]); // Katru reizi, kad slide mainās, taimeris tiek pārestartēts

    return ( 
        <>
            <div className="image">
                {slide}  
                <img src={images[slide]} alt="slider" />
            </div>
            <div className="slider_buttons">
                {/* 3. Pievienojam onClick notikumus */}
                <button onClick={prevSlide}>Left</button>
                <button onClick={nextSlide}>Right</button>
            </div>
        </> 
    );
}

export default Slider;