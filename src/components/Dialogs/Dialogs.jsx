import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './Dialog/DIalogItem'
import Message from './Message/Message'


export const Dialogs = (props) => {

    const state = props.dialogsPage

    const dialogsElements = state.dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={`id${dialog.id}`}/>)


    const messagesElements = state.messagesData
        .map((message) => <Message text={message.text}/>)

    const newMessageBody = state.newMessagesBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e) => {
        const body = e.target.value
        props.updateNewMessageBody(body)
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
