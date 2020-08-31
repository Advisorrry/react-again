import React from 'react'
import m from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = (props) => {

    const myPostsElements = props.posts
        .map((post) => <Post message={post.text} likesCount={post.likeCount}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        props.addPost()

    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={m.posts}>
            <h5>My posts</h5>
            <input ref={newPostElement} onChange={onPostChange} value={props.newPostText} type="text"
                   placeholder={props.newPostText}/>
            <button onClick={addPost} className="btn waves-effect waves-light" type="submit" name="action">Send
                <i className="material-icons right">send</i>
            </button>

            <div className={m.item}>

                {myPostsElements}

            </div>
        </div>
    )
}