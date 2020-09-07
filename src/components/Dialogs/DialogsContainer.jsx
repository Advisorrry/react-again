import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = (props) => {

    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    )
}
