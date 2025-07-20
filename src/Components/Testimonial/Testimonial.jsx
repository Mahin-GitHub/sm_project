
'use client' 

import dynamic from 'next/dynamic'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselCart from './CarouselCart';

const Carousel = dynamic(() => import('react-responsive-carousel').then(mod => mod.Carousel), { ssr: false })

const Testimonial = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className='text-center mb-8'>
                <p className='text-green-600 font-semibold'>Testimonial</p>
                <h2 className='text-3xl font-bold'>What Our Customers Say</h2>
                <p className='text-gray-500'>Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:</p>
            </div>
            <div>
                <Carousel
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={true}
                    interval={5000}
                >
                    <div>

                        <CarouselCart name={"Jane Doe"} />
                    </div>
                    <div>
                        <CarouselCart name={"Jane Doe"} />
                    </div>
                    <div>
                        <CarouselCart name={"Jane Doe"} />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonial
