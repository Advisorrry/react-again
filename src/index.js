import {store} from './redux/redux-store'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import App from './App'


export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                     store={store}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root'))
}


rerenderEntireTree(store.getState())

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
})


