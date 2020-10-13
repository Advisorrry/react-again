import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {Route, BrowserRouter} from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />}
                    />
                    <Route path='/profile' render={() =>
                        <Profile />}
                    />
                    <Route path='/users' render={() =>
                        <UsersContainer />
                    }
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
