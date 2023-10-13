"use client"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function FlyoutMenu() {
    const solutions = [
        { name: 'UserName', email: 'Email@gmail.com', href: '#' },
    ]
    const callsToAction = [
        { name: 'Change Profile', href: '/123/change-profile' },
        { name: 'Logout', href: '#' },
    ]
    const router = useRouter()
    return (
        <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-bold leading-6 text-gray-900">
                <Image
                    src='/man.png'
                    alt='user-image'
                    width={60}
                    height={60}
                    className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
                />
                <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 z-20 mt-5 flex max-w-max -translate-x-[82%] px-4">
                    <div className=" max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            {solutions.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                                    onClick={() => router.push('/123')}
                                >
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <Image src='/man.png' alt='avatarUser' width={50} height={50} />
                                    </div>
                                    <div>
                                        <a href={item.href} className="font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">{item.email}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                            {callsToAction.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-1 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
