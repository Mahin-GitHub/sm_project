import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>

            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <div>
                        <div>
                            <div className='w-[150px] h-[40px] sm:mb-15'>
                                <Link href={"/"}>
                                    <Image className='w-full h-full object-contain' src={"/assets/images/logo.png"} width={2000} height={2000} alt="logo" />
                                </Link>
                            </div>
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
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick Links 1</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Shop</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Detal Blog</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links 2</h6>
                    <a className="link link-hover">Favorites</a>
                    <a className="link link-hover">Cart</a>
                    <a className="link link-hover">Sign In</a>
                    <a className="link link-hover">Register</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover">1234-5678-90</a>
                    <a className="link link-hover">freshharvest@gmail.com</a>
                    <a className="link link-hover">Tanjung Sari Street,Pantianak, Indonesia</a>
                    <h2 className='font-bold'>Accept Pyment Method : </h2>
                    <div className='w-[228px] h-[48px]'>
                        <Image className='w-full h-fit' src={"/assets/images/paymentMthods.png"} width={1000} height={1000} alt='paymnetMethod'></Image>

                    </div>
                </nav>
            </footer>
        </div>

    )
}

export default Footer