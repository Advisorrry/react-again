import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.myPostData} />
        </div>
    )
}

export default Profile