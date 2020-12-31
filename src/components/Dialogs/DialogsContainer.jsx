import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/store'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
