const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    myPostData: [
        {id: 1, text: 'Хей, как жизнь?', likeCount: 7},
        {id: 2, text: 'Что нового?', likeCount: 15},
        {id: 3, text: 'Ну шо, кто по пивку??', likeCount: 42}
    ],
    newPostText: [
        `What's new?`
    ]

}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                text: state.newPostText,
                likeCount: 0
            }
            return  {
                ...state,
                myPostData: [state.myPostData, newPost],
                newPostText: ''
            }

        }

        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText

            }

        default:
            return state

    }
}