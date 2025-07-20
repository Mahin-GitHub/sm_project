'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

import Login from '../UserAuth/Login';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className='border-b bg-white z-50 w-full sticky top-0'>
            <nav className='container max-w-[1280px] mx-auto px-4 md:px-20 py-4 flex items-center justify-between'>
                {/* Logo */}
                <div className='w-[130px] h-[40px]'>
                    <Link href="/" onClick={closeMenu}>
                        <Image className='w-full h-full object-contain' src={"/assets/images/logo.png"} width={200} height={50} alt="logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex gap-6 text-base font-medium'>
                    <Link href="/" className='hover:underline'>Home</Link>
                    <Link href="/shop" className='hover:underline'>Shop</Link>
                    <Link href="/about-us" className='hover:underline'>About Us</Link>
                    <Link href="/blog" className='hover:underline'>Blog</Link>
                </div>

                {/* Desktop Right Section */}
                <div className='hidden md:flex items-center gap-5 text-base font-medium'>
                    <Link href="/favorites" className='flex items-center gap-1 hover:underline'>
                        <MdFavoriteBorder />
                        Favorites
                    </Link>
                    <Link href="/cart" className='flex items-center gap-1 hover:underline'>
                        <IoCartOutline />
                        Cart
                    </Link>
                    <button
                        onClick={() => document.getElementById('my_modal_3').showModal()}
                        className='border border-black px-4 py-1 rounded hover:bg-gray-100'
                    >
                        Sign In
                    </button>
                </div>

                {/* Mobile Icons */}
                <div className='md:hidden flex items-center gap-4'>
                    <IoCartOutline className='text-2xl' />
                    <button onClick={toggleMenu}>
                        {menuOpen ? <HiX className='text-3xl' /> : <HiMenu className='text-3xl' />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden px-4 pb-4 space-y-4 bg-white border-t text-base font-medium animate-fade-in'>
                    <Link href="/" onClick={closeMenu} className='block hover:underline'>Home</Link>
                    <Link href="/shop" onClick={closeMenu} className='block hover:underline'>Shop</Link>
                    <Link href="/about-us" onClick={closeMenu} className='block hover:underline'>About Us</Link>
                    <Link href="/blog" onClick={closeMenu} className='block hover:underline'>Blog</Link>

                    <Link href="/favorites" onClick={closeMenu} className='flex items-center gap-2 hover:underline'>
                        <MdFavoriteBorder /> Favorites
                    </Link>
                    <Link href="/cart" onClick={closeMenu} className='flex items-center gap-2 hover:underline'>
                        <IoCartOutline /> Cart
                    </Link>

                    <button
                        onClick={() => {
                            document.getElementById('my_modal_3').showModal()
                            closeMenu()
                        }}
                        className='border border-black px-4 py-1 rounded hover:bg-gray-100 w-fit'
                    >
                        Sign In
                    </button>
                </div>
            )}

            {/* Login Modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <Login />
                </div>
            </dialog>
        </header>
    );
};

export default Navbar;
