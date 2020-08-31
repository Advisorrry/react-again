import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/DIalogs'
import {Route, BrowserRouter} from 'react-router-dom'


const App = (props) => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ () => <Dialogs
                    state={props.state.dialogsPage} /> }
                />
                <Route path='/profile' render={ () => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                /> }
                />
            </div>
        </div>
        </BrowserRouter>
    )
}

export default App
