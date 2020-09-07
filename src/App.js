import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {Route, BrowserRouter} from 'react-router-dom'


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer
                            store={props.store}
                            state={props.state.dialogsPage}/>}
                    />
                    <Route path='/profile' render={() =>
                        <Profile
                            store={props.store}
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
