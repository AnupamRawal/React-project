import React from 'react'
import { connect } from 'react-redux'

function IncexpContainer(props) {
    
    const amount = props.transactions.map(Element => Element.amount);
    const income = amount.filter(Element => (Element > 0));
    const expense = amount.filter(Element => (Element < 0));

    const totalIncome = income.reduce((a, b) => (a += b), 0);
    const totalExpense = expense.reduce((a, b) => (a += b), 0);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus"> ₹ {totalIncome} </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus"> ₹ {Math.abs(totalExpense)}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    transactions: state.transactions
})



export default connect(mapStateToProps)(IncexpContainer)

