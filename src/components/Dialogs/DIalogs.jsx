import React from 'react'
import s from './Dialogs.module.css'
// import {NavLink} from 'react-router-dom'
import DialogItem from './Dialog/DIalogItem'
import Message from './Message/Message'


export const Dialogs = (props) => {

    const dialogsElements = props.state.dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={`id${dialog.id}`}/>)


    const messagesElements = props.state.messagesData
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
