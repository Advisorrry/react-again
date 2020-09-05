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
    },

    _callSubscriber() {
        console.log('state chnged')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 4,
                text: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.myPostData.push(newPost)
            // this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGES_BODY) {
            this._state.dialogsPage.newMessagesBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessagesBody
            this._state.dialogsPage.newMessagesBody = ''
            this._state.dialogsPage.messagesData.push({id: 4, text: body})
            this._callSubscriber(this._state)
        }

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
    type: UPDATE_NEW_MESSAGES_BODY, body: body
})




