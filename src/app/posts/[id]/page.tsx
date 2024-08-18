import React from 'react';

const PostPage = ({searchParams}:any) => {
    let post = JSON.parse(searchParams.data);
    return (
        <div>
            {post.title}
        </div>
    );
};

export default PostPage;