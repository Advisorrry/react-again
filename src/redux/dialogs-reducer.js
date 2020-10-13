
const UPDATE_NEW_MESSAGES_BODY = 'UPDATE-NEW-MESSAGES-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogsData: [
        {id: 1, name: 'Марк'},
        {id: 2, name: 'Илья'},
        {id: 3, name: 'Настя'},
        {id: 4, name: 'Саша'},
        {id: 5, name: 'Данил'},
        {id: 6, name: 'Владимир Путин'},
        {id: 7, name: 'Соня'}
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
            return {
                ...state,
                newMessagesBody: action.body
            }

        case SEND_MESSAGE: {
            let body = state.newMessagesBody
            return  {
                ...state,
                newMessagesBody: '',
                messagesData: [...state.messagesData, {id: 4, text: body}]
            }
        }
        default: return state

    }
}