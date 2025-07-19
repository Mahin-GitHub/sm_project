import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Testimonial = () => {
    return (
        <div>
            <div>
                <p>Testimonial</p>
                <h2>What Our Customers Say</h2>
                <p>Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:</p>
            </div>
            <div>
                <Carousel>
                    <div>
                        <img src="assets/1.jpeg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="assets/2.jpeg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonial