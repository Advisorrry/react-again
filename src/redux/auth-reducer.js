import {authAPI} from '../api/api'


const SET_USER_DATA = 'SET_USER_DATA'


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }


        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getAuthUserData = () => (dispatch) => {
    authAPI.getAuth().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
           dispatch(setAuthUserData(id, email, login, true))
        }
    })
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.postAuth(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
           dispatch(getAuthUserData())
        }
    })
}
export const logout = () => (dispatch) => {
    authAPI.deleteAuth().then(response => {
        if (response.data.resultCode === 0) {
           dispatch(setAuthUserData(null, null, null, false))
        }
    })
}