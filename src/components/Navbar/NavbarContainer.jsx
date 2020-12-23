import React from 'react'
import {Navbar} from './Navbar'
import {connect} from 'react-redux'
import {setAuthUserData} from '../../redux/auth-reducer'
import {getAuth} from '../../api/api'

class NavbarContainer extends React.Component{
    componentDidMount() {
        getAuth().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data.login
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Navbar {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData}) (NavbarContainer)