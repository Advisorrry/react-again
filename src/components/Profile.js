import React from 'react'

const Profile = () => {
    return (
        <div className='profile'>
            <img className='profile__photo' src={require('../assets/img/gradient.jpg')} alt=""/>
            <div className="profile__info">
                <img src={require('../assets/img/ava.jpg')} alt=""/>
                <ul className='profile__list'>
                    <li>Alex Bell</li>
                    <li>Birthday: 22 january</li>
                    <li>City: Moscow</li>
                    <li>Education: </li>
                    <li>Web site: </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile