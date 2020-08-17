import React from 'react'
import s from './Dialogs.module.css'
// import {NavLink} from 'react-router-dom'
import DialogItem from './Dialog/DIalogItem'
import Message from './Message/Message'


const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Марк'},
        {id: 2, name: 'Илья'},
        {id: 3, name: 'Настя'},
        {id: 4, name: 'Саша'},
        {id: 5, name: 'Данил'},
        {id: 6, name: 'Владимир Путин'}
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