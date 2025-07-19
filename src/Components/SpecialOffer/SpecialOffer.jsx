'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const SpecialOffer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const target = new Date('2025-12-31T23:59:59').getTime()
        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = target - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            setTimeLeft({ days, hours, minutes, seconds })

            if (distance < 0) {
                clearInterval(timer)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="px-4 py-10 bg-[#fdf5ee]">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">

                <div className="flex-1 text-center lg:text-left space-y-4">
                    <p className="text-red-500 font-semibold text-sm">Special Offer</p>
                    <h2 className="text-3xl font-bold">Seasonal Fruit Bundle</h2>
                    <h3 className="text-xl font-medium">
                        Discount up to <span className="text-red-500 font-bold">80% OFF</span>
                    </h3>


                    <div className="flex justify-center lg:justify-start gap-4 mt-4">
                        <div className="bg-white p-2 rounded text-center w-16 shadow">
                            <p className="text-lg font-bold">{timeLeft.days}</p>
                            <span className="text-sm text-gray-500">Days</span>
                        </div>
                        <div className="bg-white p-2 rounded text-center w-16 shadow">
                            <p className="text-lg font-bold">{timeLeft.hours}</p>
                            <span className="text-sm text-gray-500">Hrs</span>
                        </div>
                        <div className="bg-white p-2 rounded text-center w-16 shadow">
                            <p className="text-lg font-bold">{timeLeft.minutes}</p>
                            <span className="text-sm text-gray-500">Min</span>
                        </div>
                        <div className="bg-white p-2 rounded text-center w-16 shadow">
                            <p className="text-lg font-bold">{timeLeft.seconds}</p>
                            <span className="text-sm text-gray-500">Sec</span>
                        </div>
                    </div>

                    <button className="mt-5 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                        CODE : FRESH28
                    </button>
                </div>


                <div className="flex-1">
                    <Image
                        src="/assets/images/specialoffer.png"
                        alt="special-offer"
                        width={1000}
                        height={800}
                        className="w-full h-auto rounded"
                    />
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer
