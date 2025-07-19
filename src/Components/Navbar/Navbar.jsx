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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='border-b'>
            <nav className='container max-w-[1280px] mx-auto px-4 md:px-20 py-5'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div className='w-[150px] h-[40px]'>
                        <Link href={"/"}>
                            <Image className='w-full h-full object-contain' src={"/assets/images/logo.png"} width={2000} height={2000} alt="logo" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex justify-center items-center gap-6'>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/"}>Shop</Link>
                        <Link href={"/"}>About Us</Link>
                        <Link href={"/"}>Blog</Link>
                    </div>

                    {/* Desktop Right Section */}
                    <div className='hidden md:flex items-center gap-4'>
                        <div className='flex items-center gap-1'>
                            <MdFavoriteBorder />
                            <Link href={"/"}>Favorites</Link>
                        </div>
                        <div className='flex items-center gap-1'>
                            <IoCartOutline />
                            <Link href={"/"}>Cart</Link>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className='border border-black px-4 py-1 rounded'>
                            Sign In
                        </button>
                    </div>

                    {/* Mobile Icons */}
                    <div className='flex items-center md:hidden gap-4'>
                        <IoCartOutline className='text-2xl' />
                        <button onClick={toggleMenu}>
                            {menuOpen ? <HiX className='text-3xl' /> : <HiMenu className='text-3xl' />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className='md:hidden mt-4 flex flex-col gap-4 animate-fade-in'>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/"}>Shop</Link>
                        <Link href={"/"}>About Us</Link>
                        <Link href={"/"}>Blog</Link>
                        <div className='flex items-center gap-1'>
                            <MdFavoriteBorder />
                            <Link href={"/"}>Favorites</Link>
                        </div>
                        <div className='flex items-center gap-1'>
                            <IoCartOutline />
                            <Link href={"/"}>Cart</Link>
                        </div>
                        <button
                            onClick={() => document.getElementById('my_modal_3').showModal()}
                            className='border border-black px-4 py-1 rounded w-fit'
                        >
                            Sign In
                        </button>
                    </div>
                )}
            </nav>

            {/* Modal with SigninSignUp */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <Login /> {/* ✅ Here we include the login form component */}
                </div>
            </dialog>
        </header>
    );
};

export default Navbar;
