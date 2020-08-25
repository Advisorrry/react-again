import React from 'react'
import post from './Post.module.css'

const Post = (props) => {

    return (
        <div>
            <div className={post.com}>
                {props.message}
            </div>
            <div className={post.like}>
                <a href="#f"><img src={require('./like.png')} alt="like"/></a>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post