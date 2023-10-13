import Image from 'next/image'
import React from 'react'

const ChangeProfile = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='grid grid-flow-row'>
                <h2 className='font-bold text-3xl text-center mb-3'>Chỉnh sửa hồ sơ</h2>
                <p className='text-center my-2'>Hãy giữ riêng tư thông tin cá nhân của bạn. Thông tin bạn thêm vào đây hiển thị cho bất kỳ ai có thể xem hồ sơ của bạn.</p>
                <div className='my-2'>
                    <p className='font-semibold'>Ảnh:</p>
                    <div className='flex flex-row items-center'>
                        <Image src='/man.png' alt='AvatarUser' width={60} height={60} className='mr-3' />
                        <form>
                            <label className="block">
                                <input
                                    type="file"
                                    className="block w-full text-sm text-gray-500
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-md file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-black file:text-white
                                            file:cursor-pointer"
                                />
                            </label>
                        </form>
                    </div>
                </div>
                <div className='my-2'>
                    <p className='font-semibold'>UserName:</p>
                    <input
                        type="text"
                        placeholder='Nhập tên của bạn'
                        className='border-2 border-[#e9e9e9] rounded-2xl p-3 gap-3 w-2/3 focus:outline-none'
                    />
                </div>
                <div className='my-2'>
                    <p className='font-semibold'>Địa chỉ Email:</p>
                    <input
                        type="text"
                        placeholder='Example@gmail.com'
                        className='border-2 border-[#e9e9e9] rounded-2xl p-3 gap-3 w-2/3 focus:outline-none'
                    />
                </div>
                <div className='my-2'>
                    <p className='font-semibold'>Giới thiệu:</p>
                    <input
                        type="text"
                        placeholder='Giới thiệu của bạn'
                        className='border-2 border-[#e9e9e9] rounded-2xl p-3 gap-3 w-2/3 focus:outline-none'
                    />
                </div>
                <button className='bg-black text-white p-2 px-4 rounded-3xl max-w-max my-2'>Cập nhật</button>
            </div>
        </div>
    )
}

export default ChangeProfile