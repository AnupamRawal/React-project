import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance'
import IncexpContainer from './Components/IncexpContainer'
import TransactionList from './Components/TransactionList'
import  AddTransaction from './Components/AddTransaction'

import { Provider } from 'react-redux'
import { Store } from './Store'



function App() {
  return (
    <Provider store={Store} >
    <div className="boundry">
      <Header />
        <div className='container'>
          <Balance />
          <IncexpContainer />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </Provider>

  );
}

export default App;
