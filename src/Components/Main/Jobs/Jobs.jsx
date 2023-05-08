import React from 'react'
import { useState } from 'react';

export const Jobs = () => {
    const [selectedSlide, setSelectedSlide] = useState(0);

    const decreaseIndex = ()=>{
        if(selectedSlide >= 0)
            setSelectedSlide(selectedSlide - 1);
    }
    const increaseIndex = ()=>{
        const totalItems = document.getElementsByClassName("carousel-item").length;
        if(selectedSlide <= totalItems - 1)
            setSelectedSlide(selectedSlide + 1);
    }
    return (
        <>
            <h2>Trabajos</h2>
            <article id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" onClick={()=>setSelectedSlide(0)} className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" onClick={()=>setSelectedSlide(1)} aria-label="Slide 2"></button>
                    <button type="button" onClick={()=>setSelectedSlide(2)} aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className={`carousel-item ${selectedSlide == 0 ? 'active' : ''}`}>
                        <img src="..." className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className={`carousel-item ${selectedSlide == 1 ? 'active' : ''}`}>
                        <img src="..." className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>        
                </div>
                    <button className="carousel-control-prev" type="button" onClick={increaseIndex} data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" onClick={decreaseIndex} data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </article>
        </>
    );
}
