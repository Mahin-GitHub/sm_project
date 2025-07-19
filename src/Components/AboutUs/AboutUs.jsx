'use client'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <section className="bg-white py-16">
            <div className="container max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-10">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/assets/images/aboutus.png"
                            alt="about-us"
                            width={1000}
                            height={800}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                    <p className="text-green-600 text-sm font-semibold mb-2 uppercase tracking-wider">About Us</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Fresh Harvest</h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                        Welcome to <strong>Fresh Harvest</strong>, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.
                    </p>
                    <button className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition duration-300">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
