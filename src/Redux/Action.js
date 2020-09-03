import { ADD_TRANSACTION, DEL_TRANSACTION } from './Type'


export const addTransaction = (transaction) => {
    return {
        type: ADD_TRANSACTION,
        payload: transaction
    }
}

export const delTransaction = (id) => {
    return {
        type: DEL_TRANSACTION,
        payload: id
    }
}