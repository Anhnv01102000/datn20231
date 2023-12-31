import Image from 'next/image'
import React from 'react'

const UserInfo = () => {
    return (
        <div className='flex flex-col items-center px-3 my-6'>
            {/* <div className="flex items-center justify-center w-1/2 h-auto mb-[-60px]">
                <label className="flex flex-col items-center justify-center w-full h-80 rounded-3xl cursor-pointer bg-gray-100 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">Cập nhật ảnh bìa</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div> */}
            <Image
                src='/coverImage2.png'
                alt='userImage'
                width={620}
                height={620}
                // sizes="(max-width: 50%) 50% height:20rem"
                className='rounded-3xl mb-[-60px] '
            />
            <Image
                src="/man.png"
                alt='userImage'
                width={100}
                height={100}
                className='rounded-full '
            />

            <h2 className='text-[30px] font-semibold'>UserName</h2>
            <h2 className='text-gray-400'>UserEmail</h2>
            <h2 className=''>Description</h2>
            <div className='flex gap-4'>
                <button className='bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full'>Đã tạo</button>
                <button className='bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full'>Đã thích</button>
            </div>
        </div>
    )
}

export default UserInfo