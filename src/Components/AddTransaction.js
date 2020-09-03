import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';
import { addTransaction } from '../Redux/Action'

function AddTransaction(props) {

    const [Text, setText] = useState('');
    const [Amount, setAmount] = useState('');

    const onsubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * Math.random() * 100000),
            text: Text,
            amount: parseInt(Amount)
        }
        props.addButton(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onsubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." value={Text}
                        onChange={e => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)
                    </label >

                    <input type="number" placeholder="Enter amount..." value= {Amount}
                        onChange={e => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        addButton: transaction => dispatch(addTransaction(transaction))
    }
}

export default connect(null,mapDispatchToProps)(AddTransaction)
