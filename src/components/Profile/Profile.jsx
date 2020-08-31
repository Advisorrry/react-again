import React from 'react'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

export const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.myPostData}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}

            />
        </div>
    )
}