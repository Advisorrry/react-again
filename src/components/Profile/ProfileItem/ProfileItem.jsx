import React from 'react'
import c from './ProfileItem.module.css'

export const ProfileItem = () => {

    return (
        <div>
            <img className={c.photo} src={require('../../../assets/img/gradient.jpg')} alt=""/>
            <div className={c.info}>
                <img src={require('../../../assets/img/ava.jpg')} alt=""/>
                <ul className={c.list}>
                    <li>Alex Bell</li>
                    <li>Birthday: 22 january</li>
                    <li>City: Moscow</li>
                    <li>Education:</li>
                    <li>Web site:</li>
                </ul>
            </div>
            <br/>
        </div>
    )
}