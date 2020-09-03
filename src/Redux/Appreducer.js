import { ADD_TRANSACTION, DEL_TRANSACTION } from './Type'


const initialState = {
    // transactions: 'my name is khan'
    transactions: []
}


export const Appreducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        case DEL_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(Element=>(Element.id!==action.payload))
            }
        default: return state
    }
}
