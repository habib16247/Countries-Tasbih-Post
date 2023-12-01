import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import "./Post.css"

const PostList = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPost(data))
    })
  return (
    <>
        <div className="postList">
            <h1 style={{fontSize: "40px", fontWeight: 800, textAlign: "center", marginBottom: "30px", backgroundColor: "steelblue"}}>Post Component</h1>
            <div className="posts">
            {
                post.map(item => <Posts key={item.id} post={item} />)
            }
            </div>
        </div>
    </>
  )
}

export default PostList