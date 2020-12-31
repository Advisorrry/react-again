import React from 'react'
import {Navbar} from './Navbar'
import {connect} from 'react-redux'
import {getAuthUserData} from '../../redux/auth-reducer'


class NavbarContainer extends React.Component{
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Navbar {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData}) (NavbarContainer)