"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Stories = () => {
    const router = usePathname()

    // type of story posts
    interface storiesType {
        image: string
        title: string
        description: string
    }

    // story posts data
    const stories: storiesType[] = [
        {
            image: "/snow.jpg",
            title: "the coldest sunset",
            description: "bore ipsa natus neque unde suscipit consequatur pariatur officia deserunt aliquid, eos modi earum rem placeat cumque eius.",
        },
        {
            image: "/snow.jpg",
            title: "the coldest sunset",
            description: "bore ipsa natus neque unde suscipit consequatur pariatur officia deserunt aliquid, eos modi earum rem placeat cumque eius.",
        },
        {
            image: "/snow.jpg",
            title: "the coldest sunset",
            description: "bore ipsa natus neque unde suscipit consequatur pariatur officia deserunt aliquid, eos modi earum rem placeat cumque eius.",
        },
    ]
    return (
        <div className=''>
            {/* if page url is /stories user will see below ui */}
            {
                router === '/stories' ?
                    <>
                        <div className=' w-full flex ml-6'>
                            <span className="w-fit px-2  bg-slate-200 py-3 uppercase font-bold text-red-400 ">market news</span>
                        </div>

                        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                            {
                                stories.map((item, idx) => {
                                    return (
                                        <div key={idx} className=' h-fit w-full shadow-lg'  >
                                            <div className='h-full'>
                                                <Image src={item.image} alt='' height={30} width={70} className='bg-gray-900 w-full object-cover' />
                                            </div>
                                            <div className=' h-full capitalize px-4 py-2'>
                                                <h2 className='font-semibold text-sm py-1'>{item.title}</h2>
                                                <p className='text-xs'> {item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                    :
                    // if page url is not /stories then user will see below ui
                    <div className=''>
                        <div className=' w-full flex  mt-1 mb-3 '>
                            <span className="w-fit px-2 text-xl text-white bg-slate-200 py-2 uppercase font-bold lg:text-red-400 hidden lg:block">market news</span>
                        </div>
                        {
                            stories.map((item, idx) => {
                                return (
                                    <div key={idx} className=' h-fit w-full mb-6  shadow-lg'>
                                        <div className='h-full'>
                                            <Image src={item.image} alt='' height={30} width={70} className='bg-gray-900 w-full object-cover' />
                                        </div>
                                        <div className=' h-full capitalize px-4 py-2'>
                                            <h2 className='font-semibold text-sm py-1'>{item.title}</h2>
                                            <p className='text-xs'> {item.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default Stories
