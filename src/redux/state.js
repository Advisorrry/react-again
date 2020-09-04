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
                {text: 'Привет'},
                {text: 'Как дела?'},
                {text: 'По пивку?'}
            ]
        },
    },

    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            const newPost = {
                id: 4,
                text: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.myPostData.push(newPost)
            // this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }



    }

}
