import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/store'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {
        myPostData: state.profilePage.myPostData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
           dispatch(action)
        },
        addPost: () => {
         dispatch(addPostActionCreator())
        }

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
