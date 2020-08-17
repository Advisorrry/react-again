import React from 'react'
import ProfileItem from '../ProfileItem/ProfileItem'


const ProfileInfo = () => {

    const profileData = [
        {
            name: 'Alex Bell',
            birthday: 'Birthday: 22 january',
            city: 'City: Moscow',
            education: 'Education:',
            webSite: 'Web site:'
        }
    ]

    const profileElements = profileData
        .map((profile) =>
            <ProfileItem
                name={profile.name}
                birthday={profile.birthday}
                city={profile.city}
                education={profile.education}
                webSite={profile.webSite}
            />)

    return (
        <div>
            {profileElements}
        </div>
    )
}

export default ProfileInfo