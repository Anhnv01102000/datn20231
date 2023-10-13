import Image from 'next/image'
import React from 'react'
import UserTag from '../UserTag'

const CardItem = () => {
    return (
        <>
            <div className='m-3'>
                <div className="relative 
                before:absolute
                before:h-full before:w-full
                before:rounded-3xl
                before:z-10
                hover:before:bg-gray-600 
                before:opacity-50
                cursor-pointer
                rounded-3xl shadow-[0_0_10px_#00000040]"
                >
                    <Image src='/test.png'
                        alt='test'
                        width={800}
                        height={800}
                        className='rounded-3xl cursor-pointer relative z-0'
                    />
                </div>
                <h2 className='font-bold text-[18px] mb-1 mt-2 line-clamp-2'>Tên Wedding Invitation Test</h2>
                <UserTag />
            </div>
        </>
    )
}

export default CardItem