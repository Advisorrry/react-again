import {addPost, subscribe, updateNewPostText, state} from './redux/state'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import App from './App'


export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root'))
}


rerenderEntireTree(state)

subscribe(rerenderEntireTree)


