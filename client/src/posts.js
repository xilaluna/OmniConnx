import React from 'react'
// import './posts.css'

userObject = {
    username:'testUser',
    // ...
}
examplePostData = [
    {
        _id:'1234567890',
        user:{userObject},
        tags:[tag1, tag2, tag3],
        title:'example name of a post',
        discription:'this is an example of what a discription on our post will look like',
    },
    {
        _id:'0123456789',
        user:{userObject},
        tags:[tag1, tag2],
        title:'example name of a post number 2',
        discription:'this is an example of what a discription on our post number 2 will look like',
    }
]

function Posts() {
    function post(postList) {
        return postList.map(post => {
            return (
                <div className='post'>
                    <h3>{post.title}</h3>
                    <p>{post.discription}</p>
                    <p>-{post.user}</p>
                </div>
            )
        })
    }
    return (
        <div className='Posts'>
            
        </div>
    )
}

export default Posts

            // <button onClick={post({
            //     user:{session.user},
            //     tags:[tag1, tag2],
            //     title:'example name of a post number 2',
            //     image:'./place',
            //     discription:'this is an example of what a discription on our post number 2 will look like',
            // })}>
            //     post
            // </button>