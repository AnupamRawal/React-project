import React from 'react'


function Transaction(props) {

    const id = props.element.id

    const sign = props.element.amount > 0 ? '+' : '-';
    const classChange = props.element.amount > 0 ? 'plus' : 'minus';

    return (
        <li className={classChange}>
            {props.element.text} <span> {sign} ₹ {Math.abs(props.element.amount)} </span>
            <button className="delete-btn" onClick={()=>props.delete(id)}>x</button>
        </li>
    )
}

export default Transaction