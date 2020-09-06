
const UPDATE_NEW_MESSAGES_BODY = 'UPDATE-NEW-MESSAGES-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogsData: [
        {id: 1, name: 'Марк'},
        {id: 2, name: 'Илья'},
        {id: 3, name: 'Настя'},
        {id: 4, name: 'Саша'},
        {id: 5, name: 'Данил'},
        {id: 6, name: 'Владимир Путин'}
    ],
    messagesData: [
        {id: 1, text: 'Привет'},
        {id: 2, text: 'Как дела?'},
        {id: 3, text: 'По пивку?'}
    ],
    newMessagesBody: ''

}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGES_BODY:
            state.newMessagesBody = action.body
            break

        case SEND_MESSAGE: {
            const body = state.newMessagesBody
            state.newMessagesBody = ''
            state.messagesData.push({id: 4, text: body})
            break
        }
        default: return state

    }


    return state
}