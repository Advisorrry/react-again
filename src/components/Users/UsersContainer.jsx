import {Users} from './Users'
import {connect} from 'react-redux'
import {followAC, setUsersAC, unfollowAC} from '../../redux/users-reducer'


const mapStateProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setusers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateProps, mapDispatchToProps) (Users)
