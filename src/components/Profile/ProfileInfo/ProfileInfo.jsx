import React from 'react'
import {Preloader} from '../../common/Preloader'
import c from './ProfileInfo.module.css'


export const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={c.photo} src={require('../../../assets/img/gradient.jpg')} alt=""/>
                <div className={c.info}>
                    <img src={props.profile.photos.large} alt=""/>
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
