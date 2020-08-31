let rerenderEntireTree = () => {
    console.log('gaga')
}

export const state = {

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
}



export const addPost = () => {
    const newPost = {
        id: 4,
        text: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.myPostData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}



