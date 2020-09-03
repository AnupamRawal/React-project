import React from 'react'
import { connect } from 'react-redux'
import Transaction from './Transaction'
import { delTransaction } from '../Redux/Action'

function TransactionList(props) {
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    props.transactions.map(element => <Transaction key={element.id} delete={props.delete} element={element}/>)
                }
    
            </ul>
        </>
    )
}

const mapStateToProps = (state) => ({
    transactions: state.transactions,
})

const mapDispatchToProps =(dispatch)=> {
    return {
        delete : (id)=> dispatch(delTransaction(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionList)
