import React from 'react'
import m from './MyPosts.module.css'
import {Post} from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'

export const MyPosts = (props) => {

    const myPostsElements = props.posts
        .map((post) => <Post message={post.text} likesCount={post.likeCount}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator())

    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        const action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={m.posts}>
            <h5>My posts</h5>
            <input ref={newPostElement} onChange={onPostChange} value={props.newPostText} type="text"/>
            <button onClick={addPost} className="btn waves-effect waves-light" type="submit" name="action">send
                <i className="material-icons right">send</i>
            </button>

            <div className={m.item}>

                {myPostsElements}

            </div>
        </div>
    )
}