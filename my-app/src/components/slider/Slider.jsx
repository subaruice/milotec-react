import React, { useRef } from "react";
import './slider.css'
import { useState, useEffect, } from "react";

const images = [
    "https://www.milotec.net/fotky72500/slider/Obr-1.png",
    "https://www.milotec.net/fotky72500/slider/Obr-2.png",
    "https://www.milotec.net/fotky72500/slider/Obr-3.png",
    "https://www.milotec.net/fotky72500/slider/Obr-4.png",
    "https://www.milotec.net/fotky72500/slider/Obr-5.png",
    "https://www.milotec.net/fotky72500/slider/Obr-6.png",
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef(null)
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className="slider">
            <img src={images[current]} alt={`Slide ${current + 1}`} />
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={index === current ? "dot active" : "dot"}
                        onClick={() => {
                            setCurrent(index)
                            clearInterval(intervalRef.current)
                            }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
