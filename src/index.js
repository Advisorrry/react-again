import {store} from './redux/redux-store'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import App from './App'
import {Provider} from './storeContext'


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'))
}


rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})


