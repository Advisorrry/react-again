import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/store'
import {MyPosts} from './MyPosts'
import { StoreContext } from '../../../storeContext'

export const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())

                }

                const onPostChange = (text) => {
                    const action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.myPostData}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}