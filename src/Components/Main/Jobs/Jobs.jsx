import React, { useState } from 'react';
import IMAGES from '../../../assets/images/Images';

export const Jobs = () => {
    const [selectedSlide, setSelectedSlide] = useState(0);

    const decreaseIndex = ()=>{
        if(selectedSlide > 0)
            setSelectedSlide(selectedSlide - 1);
    }
    const increaseIndex = ()=>{
        const totalItems = document.getElementsByClassName("carousel-item").length;
        if(selectedSlide < totalItems - 1)
            setSelectedSlide(selectedSlide + 1);
    }
    return (
        <>
            <h2>Trabajos</h2>
            <article id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <figure className={`carousel-item ${selectedSlide == 0 ? 'active' : ''}`}>
                        <img src={IMAGES.faroworld} className="d-block img-fluid w-100" alt="FaroWorld" title="FaroWorld"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>FaroWorld</h5>
                            <a href="https://faro-world.com" target="_blank">https://faro-world.com</a>
                        </div>
                    </figure>
                    <figure className={`carousel-item ${selectedSlide == 1 ? 'active' : ''}`}>
                        <img src={IMAGES.smoothingdrawdowncurve} className="img-fluid w-100" alt="Smoothing Drawdown Curve" title="Smoothing Drawdown curve"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Smoothing Drawdown Curve</h5>
                            <a href="https://github.com/avallelisboa/SmoothingDrawDownCurve2" target="_blank">https://github.com/avallelisboa/SmoothingDrawDownCurve2</a>
                        </div>
                    </figure>        
                </div>
                    <button className="carousel-control-prev" type="button" onClick={decreaseIndex} data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" onClick={increaseIndex} data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </article>
        </>
    );
}
