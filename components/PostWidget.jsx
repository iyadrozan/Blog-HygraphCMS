import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link';

import { getRecentPost, getSimiliarPosts } from '@/services';

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
    
    useEffect(() => {
        if(slug) {
            getSimiliarPosts(category, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPost()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    return (
        <div className='bg-white'>
            
        </div>
    )
}

export default PostWidget