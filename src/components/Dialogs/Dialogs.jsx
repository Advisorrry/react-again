import React from 'react'
import s from './Dialogs.module.css'
// import {NavLink} from 'react-router-dom'
import DialogItem from './Dialog/DIalogItem'
import Message from './Message/Message'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


export const Dialogs = (props) => {

    const state = props.store.getState().dialogsPage

    const dialogsElements = state.dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={`id${dialog.id}`}/>)


    const messagesElements = state.messagesData
        .map((message) => <Message text={message.text}/>)

    const newMessageBody = state.newMessagesBody

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e) => {
        const body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.items}>

                {dialogsElements}

            </div>

            <div className={s.messages}>

                <div>{messagesElements}</div>

                <div className="input-field col s6">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder={`new message`}
                              id="icon_prefix2"
                              className="materialize-textarea">.</textarea>
                </div>

                <button onClick={onSendMessageClick}
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="action">Send
                    <i className="material-icons right">send</i>
                </button>

            </div>
        </div>
    )
}
