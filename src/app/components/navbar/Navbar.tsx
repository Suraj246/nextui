"use client"
import React, { useState } from 'react'

import Link from 'next/link'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBell, faUser, faMessage, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from 'react'

interface propsType {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar: React.FC<propsType> = ({ open, setOpen }) => {


    interface subLinks {
        name: string
        icon?: ReactNode
        path: string
    }
    interface sidebarTypes {
        name: string;
        icon: ReactNode;
        alert: ReactNode;
        navLinks: subLinks[]

    }

    const sidebarLinks: sidebarTypes[] = [
        {
            name: "user name",
            icon: <FontAwesomeIcon icon={faUser} size='xl' />,
            alert: <FontAwesomeIcon icon={faBell} size='xl' />,
            navLinks: [
                {
                    name: "discussion forum",
                    icon: <FontAwesomeIcon icon={faMessage} size='xl' />,
                    path: "/discussion"
                },
                {
                    name: "market stories",
                    icon: <FontAwesomeIcon icon={faMagnifyingGlassDollar} size='xl' />,
                    path: "/stories"
                },
                {
                    name: "sentiment",
                    path: "/"
                },
                {
                    name: "market",
                    path: "/"
                },
                {
                    name: "sector",
                    path: "/"
                },
                {
                    name: "watchlist",
                    path: "/"
                },
                {
                    name: "event",
                    path: "/"
                },
                {
                    name: "news/interview",
                    path: "/"
                },
            ]
        }
    ]
    // const [open, setOpen] = useState(false)

    return (
        <header className={`absolute  lg:relative h-screen flex duration-300  bg-indigo-950 text-white capitalize font-semibold`}
            style={{ width: open ? "0" : "300px" }}
        >
            <div className='w-full'>
                {sidebarLinks.map((item, idx) => {
                    return (
                        <div key={idx} className={`w-full h-full flex flex-col items-start duration-300 ${open && "scale-0"}`}>
                            <div className='flex w-full items-center  justify-around gap-2 px-2 py-6 border-b-2 border-b-zinc-500' >
                                <div className='flex gap-2 items-center'>
                                    {item.icon}
                                    <span>{item?.name}</span>
                                </div>
                                {item?.alert}
                            </div>
                            {item.navLinks.map((link, idx) => {
                                return (
                                    <div key={idx} className='w-full p-2'>
                                        {link?.icon ?
                                            <div className='flex justify-start gap-2 py-2 w-full pl-2'>
                                                <Link href={link?.path} className='flex gap-2 w-full cursor-pointer'>
                                                    {link?.icon}
                                                    <span >{link?.name}</span>
                                                </Link>
                                            </div> :

                                            <div className='flex gap-2 gap w-full pl-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-6 invisible'>
                                                    <path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM228 104c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104z" />
                                                </svg>
                                                <Link href={link?.path} className='py-2'>{link?.name}</Link>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>

            <div className='  w-fit grid place-content-center bg-white'>
                <FontAwesomeIcon icon={faCaretRight} size='xl' onClick={() => setOpen(!open)} className={`cursor-pointer absolute top-2/4 lg:relative bg-indigo-950 py-6 
                 p-1 ${open ? "" : "rotate-180"} `} />
            </div>
        </header>
    )
}

export default Navbar
