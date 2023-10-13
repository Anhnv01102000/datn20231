import Image from 'next/image'
import React from 'react'

const UserTag = () => {
    return (
        <div className=''>
            <div className='flex gap-3 items-center'>
                <Image
                    src='/man.png'
                    alt='userImage'
                    width={45}
                    height={45}
                    className='rounded-full' />
                <div>
                    <h2 className='text-[14px] font-medium'>UserName</h2>
                    <h2 className='text-[12px]'>UserEmail</h2>
                </div>
            </div>
        </div>
    )
}

export default UserTag