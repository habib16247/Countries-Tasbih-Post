import React from 'react'
import "./Post.css"

const Posts = ({post}) => {
    const {id, title, body} = post;
        console.log(title)
  return (
    
        <>
        
            <div className='post'>
                <h1 className='h1'>{id}</h1>
                <div className="content">
                    <h2 style={{fontSize: "20px", fontWeight: 800}}>{title}</h2>
                    <hr />
                    <p>{body}</p>
                </div>
            </div>
        </>
  )
}

export default Posts