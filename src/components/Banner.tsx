import { useEffect, useState } from 'react';
import Images from '../data/images';
import './styles/banner.css'

export const Banner = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const loadNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }

    const loadPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length);
    }

    useEffect(() => {
        const timer = setTimeout(loadNext, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="banner-container">
            <img src={Images[currentIndex].src} alt={Images[currentIndex].alt} />
            <div className="banner-controls">
                <button className="prev" onClick={loadPrev}>Anterior</button>
                <button className="next" onClick={loadNext}>Siguiente</button>
            </div>
        </div>
    )
}
