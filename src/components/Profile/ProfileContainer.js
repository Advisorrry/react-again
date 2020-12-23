import React from 'react'
import {Profile} from './Profile'
import {setUserProfile} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import {getProfile} from '../../api/api'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        getProfile(this.props.setUserProfile).then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)