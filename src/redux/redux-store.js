import {combineReducers, createStore} from 'redux'
import {dialogsReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {profileReducer} from './profile-reducer'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const store = createStore(reducers)