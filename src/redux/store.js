import {profileReducer} from './profile-reducer'
import {dialogsReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGES_BODY = 'UPDATE-NEW-MESSAGES-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const store = {
    _state: {
        profilePage: {
            myPostData: [
                {id: 1, text: 'Хей, как жизнь?', likeCount: 7},
                {id: 2, text: 'Что нового?', likeCount: 15},
                {id: 3, text: 'Ну шо, кто по пивку??', likeCount: 42}
            ],
            newPostText: [
                `What's new?`
            ]
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Марк'},
                {id: 2, name: 'Илья'},
                {id: 3, name: 'Настя'},
                {id: 4, name: 'Саша'},
                {id: 5, name: 'Данил'},
                {id: 6, name: 'Владимир Путин'}
            ],
            messagesData: [
                {id: 1, text: 'Привет'},
                {id: 2, text: 'Как дела?'},
                {id: 3, text: 'По пивку?'}
            ],
            newMessagesBody: ''


        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGES_BODY, body
})




