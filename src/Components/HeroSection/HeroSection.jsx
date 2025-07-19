import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <div className="bg-white w-full">
            <div className="container max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">

                    {/* Left Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <p className="text-red-500 font-bold text-sm sm:text-base mb-2">
                            Welcome to Fresh Harvest
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-4">
                            Fresh Fruits and Vegetables
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xl">
                            At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded mb-6">
                            Shop Now
                        </button>

                        {/* Download App Section */}
                        <div>
                            <p className="text-sm font-medium mb-2">Download App</p>
                            <div className="flex justify-center lg:justify-start gap-3">
                                <Link href={"/"}>
                                    <div className="w-[140px] h-[40px]">
                                        <Image
                                            className="w-full h-full object-contain"
                                            src={"/assets/images/appstore-bg.png"}
                                            width={2000}
                                            height={2000}
                                            alt="App Store"
                                        />
                                    </div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="w-[140px] h-[40px]">
                                        <Image
                                            className="w-full h-full object-contain"
                                            src={"/assets/images/googleplay-bg.png"}
                                            width={2000}
                                            height={2000}
                                            alt="Google Play"
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Hero Image) */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
                            <Image
                                className="w-full h-auto object-contain"
                                src={"/assets/images/heroImg.png"}
                                width={2000}
                                height={2000}
                                alt="Hero Image"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
