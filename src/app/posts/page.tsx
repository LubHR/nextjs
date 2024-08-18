import React from 'react';
import {getALlPosts} from "@/app/services/api.service";
import Link from "next/link";

const PostPage =async () => {

    let allposts = await getALlPosts()

    return (
        <div>
            <ul>
            {
                allposts.map(post => <li key={post.id}>{post.id} -
                    <Link href={{pathname:'/posts/' +post.id,query:{data:JSON.stringify(post)}}}>{post.title}</Link>
                </li>)
            }
            </ul>
        </div>
    );
};

export default PostPage;