import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'


const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}


const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Марк'},
        {id: 2, name: 'Илья'},
        {id: 3, name: 'Настя'},
        {id: 4, name: 'Саша'},
        {id: 5, name: 'Данил'}
    ]

    const messagesData = [
        {text: 'Привет'},
        {text: 'Как дела?'},
        {text: 'По пивку?'}
    ]

    const dialogsElements = dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={`id${dialog.id}`}/>)


    const messagesElements = messagesData
        .map( (message) => <Message text={message.text}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.items}>

                { dialogsElements }

            </div>

            <div className={s.messages}>

                { messagesElements }

            </div>
        </div>
    )
}

export default Dialogs