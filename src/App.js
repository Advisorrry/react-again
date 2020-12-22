import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {Route, BrowserRouter} from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />}
                    />
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer />}
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
