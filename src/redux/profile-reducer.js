import {usersAPI} from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState = {
    myPostData: [
        {id: 1, text: 'Хей, как жизнь?', likeCount: 7},
        {id: 2, text: 'Что нового?', likeCount: 15},
        {id: 3, text: 'Ну шо, кто по пивку??', likeCount: 42}
    ],
    newPostText: [
        `What's new?`
    ],
    profile: null

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

        case SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.profile
            }
        default:
            return state

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator= (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


