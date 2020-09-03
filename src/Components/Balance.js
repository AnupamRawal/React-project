import React from 'react'
import { connect } from 'react-redux'

function Balance(props) {
    const total = props.amount.reduce((a, b) => (a += b), 0)
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>₹ {total}</h1>
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        amount: state.transactions.map(element => element.amount)
    }
}

export default connect(mapStateToProps,null)(Balance)
