import React, { useEffect, useState } from 'react'
import sampleData from '../constants/sampleData'
import '../styles/bodyCounter.css'
function BodyCounter() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = sampleData.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
        }, 5 * 1000)

        return () => clearInterval(timer);
    }, [total, currentIndex]);

    const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
    };

    const goPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
    };

    const { name, role, description, imageSrc } = sampleData[currentIndex];

    return (
    <div className='bodyContainer'>
        <div className='card'>
            <div className='cardHeader'>
                {description}
            </div>
            <div className='content'>
                <div className='imageContainer'>
                    <img src={imageSrc} alt={name} width={100} className='userImage' />
                </div>
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </div>
        <div className='navigationButtons'>

            <button className='prev' onClick={goPrev}>&lt;</button>
            <button className='next' onClick={goNext}>&gt;</button>
        </div>
    </div>
    )
}

export default BodyCounter