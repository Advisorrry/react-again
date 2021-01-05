import React from 'react'
import {Preloader} from '../../common/Preloader'
import c from './ProfileInfo.module.css'
import defaultPhoto from '../../../assets/img/ava.jpg'
import {ProfileStatus} from './ProfileStatus'


export const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <div className={c.info}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : defaultPhoto} alt=""/>
                    <ProfileStatus status={'говно'} />
                    <ul className={c.list}>
                        <li>{props.profile.fullName}</li>
                        <li>City: Moscow</li>
                        <li>Job: {props.profile.lookingForAJobDescription}</li>
                        <li>WebSite: <a href={3}>{props.profile.contacts.vk}</a></li>
                    </ul>
                </div>
                <br/>
            </div>
        </div>
    )
}
