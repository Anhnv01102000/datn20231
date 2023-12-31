"use client"
import Image from 'next/image'
import React from 'react'
import { HiSearch, HiBell, HiChat } from 'react-icons/hi'
import FlyoutMenu from './FlyoutMenu'
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    return (
        <div className='flex justify-between gap-3 md:gap-2 items-center p-6 '>
            <Image
                src='/logo.png'
                alt='logo'
                width={50}
                height={50}
                className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
                onClick={() => router.push("/")}
            />
            <button
                className='bg-black text-white p-2 px-4 rounded-full hidden md:block'
                onClick={() => router.push("/")}
            >
                Home
            </button>
            <button
                className='font-bold p-2 px-4 rounded-full'
            >
                Create
            </button>
            <div className='bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex'>
                <HiSearch className='text-[25px] text-gray-500' />
                <input type="text" placeholder='Search' className='bg-transparent w-full focus:outline-none' />
            </div>
            {/* <HiSearch className='text-[25px] text-gray-500 md:hidden' /> */}
            <HiBell className='text-[25px] md:text-[50px] text-gray-500 cursor-pointer' />
            <FlyoutMenu />
        </div>
    )
}

export default Header