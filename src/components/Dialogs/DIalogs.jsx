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

    const DialogsData = [
        {id: 1, name: 'Марк'},
        {id: 2, name: 'Илья'},
        {id: 3, name: 'Настя'},
        {id: 4, name: 'Саша'},
        {id: 5, name: 'Данил'}
    ]

    const MessagesData = [
        {text: 'Привет'},
        {text: 'Как дела?'},
        {text: 'По пивку?'}
        ]

    return (
        <div className={s.dialogs}>
            <div className={s.items}>

                <DialogItem name={DialogsData[0].name} id={`id${DialogsData[0].id}`} />
                <DialogItem name={DialogsData[1].name} id={`id${DialogsData[1].id}`} />
                <DialogItem name={DialogsData[2].name} id={`id${DialogsData[2].id}`} />
                <DialogItem name={DialogsData[3].name} id={`id${DialogsData[3].id}`} />
                <DialogItem name={DialogsData[4].name} id={`id${DialogsData[4].id}`} />

            </div>

            <div className={s.messages}>

                <Message text={MessagesData[0].text} />
                <Message text={MessagesData[1].text} />
                <Message text={MessagesData[2].text} />

            </div>
        </div>
    )
}

export default Dialogs