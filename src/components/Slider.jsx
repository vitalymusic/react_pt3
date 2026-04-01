import image1 from '../assets/hero.png';
import image2 from '../assets/react.svg';
import image3 from '../assets/vite.svg';
import { useState, useEffect } from 'react';

function Slider() {
    const images = [image1, image2, image3];
    const [slide, setSlide] = useState(0);

    // Logic for next slide (reusable for button and timer)
    const nextSlide = () => {
        setSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Logic for previous slide
    const prevSlide = () => {
        setSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
        // 1. Start the timer
        const interval = setInterval(() => {
            nextSlide();
        }, 2000); // 1000ms is a bit fast for a slider, 2-3s is usually smoother!

        // 2. CLEANUP: This is the most important part. 
        // It clears the old timer before starting a new one.
        return () => clearInterval(interval);
        
    }, [slide]); // Re-runs when slide changes

    return ( 
        <>
            <div className="image">
                <p>Current Slide: {slide + 1}</p>
                <img src={images[slide]} alt={`Slide ${slide}`} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="slider_buttons">
                {/* 3. Added onClick handlers to your buttons */}
                <button onClick={prevSlide}>Left</button>
                <button onClick={nextSlide}>Right</button>
            </div>
        </> 
    );
}

export default Slider;