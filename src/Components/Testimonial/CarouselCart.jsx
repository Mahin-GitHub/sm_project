import Image from 'next/image'
import React from 'react'

const CarouselCart = ({ name }) => {
    return (
        <div className="sm:flex sm:items-center sm:gap-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto text-center sm:text-left space-y-6 sm:space-y-0">
            
            {/* Image Container */}
            <div className="flex-shrink-0 mx-auto sm:mx-0 w-40 h-40 relative rounded-full overflow-hidden border-4 border-green-200">
                <Image
                    src="/assets/images/carousel.png"
                    alt="carousel image"
                    fill // this makes the image fully fill the container
                    className="object-cover"
                />
            </div>

            {/* Testimonial Text */}
            <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed italic">
                    "I absolutely love Fresh Harvest! The quality of their produce is outstanding.
                    It's always fresh, flavorful, and delicious. The convenience of ordering online
                    and having it delivered to my doorstep saves me so much time. Fresh Harvest has
                    become my go-to for all my fruit and vegetable needs."
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                    {name} <span className="text-gray-500 dark:text-gray-400 font-normal">– Professional Chef</span>
                </p>
            </div>
        </div>
    )
}

export default CarouselCart
