import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/store'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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

export const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect) (Dialogs)




