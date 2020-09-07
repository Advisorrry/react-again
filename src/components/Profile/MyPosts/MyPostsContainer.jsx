import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/store'
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())

    }

    const onPostChange = (text) => {
        const action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updateNewPostText={ onPostChange }
            addPost={ addPost }
            posts={ state.profilePage.myPostData }
            newPostText={ state.profilePage.newPostText }

        />
    )
}