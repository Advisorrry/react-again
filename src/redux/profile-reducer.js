import {profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

const initialState = {
    myPostData: [
        {id: 1, text: 'Хей, как жизнь?', likeCount: 7},
        {id: 2, text: 'Что нового?', likeCount: 15},
        {id: 3, text: 'Ну шо, кто по пивку??', likeCount: 42}
    ],
    newPostText: [
        `What's new?`
    ],
    profile: null,
    status: ''

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
                newPostText: '',
                myPostData: [...state.myPostData, newPost],
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
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator= (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getUserStatus = (status) => (dispatch) => {
    profileAPI.getStatus(status).then(response => {
        dispatch(setUserStatus(response.data))
    })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})


