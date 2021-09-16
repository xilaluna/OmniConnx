import React from 'react'
import './posts.css'

const examplePostData = [
    {
        _id:'1234567890',
        user:{
            username:'testUser',
            profPic:'https://via.placeholder.com/150',
            // ...
        },
        tags:['tag1', 'tag2', 'tag3'],
        image:'https://via.placeholder.com/600x250',
        title:'example name of a post',
        discription:'this is an example of what a discription on our post will look like',
    },
    {
        _id:'0123456789',
        user:{
            username:'testUser',
            profPic:'https://via.placeholder.com/150',
            // ...
        },
        tags:['tag1', 'tag2'],
        image:'https://via.placeholder.com/600x250',
        title:'example name of a post number 2',
        discription:'this is an example of what a discription on our post number 2 will look like',
    }
]

function Posts() {
    function post(postList) {
        return postList.map(post => {
            const tags = post.tags.map(tag => {
                return(
                    <div>{tag}</div>
                )
            })
            return (
                <div className='post'>
                    <div className='prof'>
                        <div><img src={post.user.profPic}></img></div>
                        <div>
                            <h3>-{post.user.username}</h3>
                            <h4>{post.title}</h4>
                            <div className='tags'>{tags}</div>
                        </div>
                    </div>
                    <img src={post.image}></img>
                    <p>{post.discription}</p>
                </div>
            )
        })
    }
    return (
        <div className='posts'>
            {post(examplePostData)}
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