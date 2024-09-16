import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Data } from './Data'

const Slider = () => {
    return (
        <section className="slider">
            <Carousel
                prevIcon={<span className="custom-prev-icon">&#60;</span>}
                nextIcon={<span className="custom-next-icon">&#62;</span>}
                className="custom-slider"
            >
                {
                    Data.map((person, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="rounded-circle mx-auto mb-3 slider-img"
                                src={person.img}
                                alt={`Image of ${person.name}`}
                            />
                            <div>
                                <h3 className="m-0 mb-2 name-title fw-lighter">{person.name.toUpperCase()}</h3>
                                <h5 className="job-title m-0 mb-3 fs-6">{person.title}</h5>
                                <p className="description mb-0 lh-lg">{person.description}</p>
                            </div>
                            <div className="custom-icon">
                                <i className="fas fa-quote-right"></i>
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </section>
    );
};

export default Slider;
