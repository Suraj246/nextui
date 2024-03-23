"use client"
import Image from 'next/image'
import DiscussionIcons from './DiscussionIcons'
import { usePathname } from 'next/navigation';


const DiscussionForum = () => {
    const router = usePathname()

    // type of discussion posts
    interface discussionType {
        image: string;
        name: string;
        content: string;
        likes: string;
        watch: string;
        comments: string;
        time: string
    }

    // discussion posts data
    const discussionData: discussionType[] = [
        {
            image: "/snow.jpg",
            name: "lorem ipsum",
            content: "Lorem ipsum dolor sitmus sed temporibus magnam doloremque iure dolores accusantium repellat, mollitia expedita eum unde esse. Sit, natus!",
            likes: "2",
            watch: "2",
            comments: "2",
            time: "2"
        },
        {
            image: "/snow.jpg",
            name: "lorem ipsum",
            content: "Lorem ipsum dolor sitmus sed temporibus magnam doloremque iure dolores accusantium repellat, mollitia expedita eum unde esse. Sit, natus!",
            likes: "2",
            watch: "2",
            comments: "2",
            time: "2"
        },
        {
            image: "/snow.jpg",
            name: "lorem ipsum",
            content: "Lorem ipsum dolor sitmus sed temporibus magnam doloremque iure dolores accusantium repellat, mollitia expedita eum unde esse. Sit, natus!",
            likes: "2",
            watch: "2",
            comments: "2",
            time: "2"
        },
        {
            image: "/snow.jpg",
            name: "lorem ipsum",
            content: "Lorem ipsum dolor sitmus sed temporibus magnam doloremque iure dolores accusantium repellat, mollitia expedita eum unde esse. Sit, natus!",
            likes: "2",
            watch: "2",
            comments: "2",
            time: "2"
        },
    ]

    return (
        <div className=' h-screen w-full  mt-1 '>
            {router === '/discussion' ?

                <span className=" m-4 px-8 lg:text-start capitalize lg:uppercase text-3xl font-bold text-red-400"> discussion forum</span>
                :
                <span className="w-full lg:w-fit text-center bg-indigo-950  lg:bg-slate-200  mb-6  px-8 lg:text-start capitalize lg:uppercase text-sm lg:text-3xl font-bold text-white lg:text-red-400 hidden lg:block "> discussion forum</span>
            }

            {discussionData?.map((item, idx) => {
                return (
                    <div key={idx} className='flex gap-4 p-1 px-4 mt-11 items-start justify-start bg-white '
                        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 0px, rgba(0, 0, 0, 0.23) 3px 3px 3px" }}
                    >
                        <div className='pl-2'>
                            <Image src={item?.image} alt='' className='bg-gray-900 rounded-full w-24 h-10  lg:w-16 lg:h-12 ' width={100} height={100} />
                        </div>
                        <div className='grid gap-2 py-2'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-semibold capitalize text-sm'>{item.name}</span>
                                    <span className='bg-indigo-950 text-white rounded-lg px-2 py-0.5 text-xs'>section 2</span>
                                </div>
                                <div>
                                    <span className='text-sm text-indigo-900 font-semibold'> {item?.time} min</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-11/12'>
                                <span className='capitalize text-xs lg:text-sm'>
                                    {item?.content}
                                </span>
                                <div>
                                    <DiscussionIcons item={item} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default DiscussionForum
