import { faComment, faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface discussionType {
    image: string;
    name: string;
    content: string;
    likes: string;
    watch: string;
    comments: string;
    time: string
}
interface itemType {
    item: discussionType
}
const DiscussionIcons: React.FC<itemType> = ({ item }) => {
    return (
        <div className='flex gap-2 justify-between '>
            <span className='flex items-center gap-1 text-xs lg:text-sm cursor-pointer'><FontAwesomeIcon icon={faHeart} className='size-4 lg:size-5' />{item?.likes}k</span>
            <span className='flex items-center gap-1 text-xs lg:text-sm cursor-pointer'><FontAwesomeIcon icon={faEye} className='size-4 lg:size-5' />{item?.watch}k</span>
            <span className='flex items-center gap-1 text-xs lg:text-sm cursor-pointer'><FontAwesomeIcon icon={faComment} className='size-4 lg:size-5' />{item?.comments}k</span>
            <span className='flex items-center gap-1 text-xs lg:text-sm  cursor-pointer'><FontAwesomeIcon icon={faShareNodes} className=' size-4 lg:size-5' />share</span>
        </div>
    )
}

export default DiscussionIcons
