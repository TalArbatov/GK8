import React, { useState } from 'react';
import config from './config';
import TransactionList from './TransactionList';
const electron = window.require("electron")

const net = electron.remote.net;

const Entry = () => {
  const [address, setAddress] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState({
    active: false,
    message: ''
  });

  const sendRequest = () => {
    const { key, hostname, path } = config.api;

    const request = net.request({
      method: 'GET',
      protocol: 'https:',
      hostname,
      path: path(address, key),
      redirect: 'follow'
    });
    request.on('response', (response) => {
      response.on('data', (chunk) => {
          try {
            const result = JSON.parse(chunk).result;
            if (!Array.isArray(result)) throw 'Invalid address';
            else if (Array.isArray(result) && result.length === 0) throw 'No transactions'
            else {
              setTransactions(result.slice(0, config.maxTransactions));
              setError({ active: false, message: '' });
            }
          } catch(e) {
            setTransactions([]);
            setError({ active: true, message: e })
          }
      });
    });
    request.setHeader('Content-Type', 'application/json');
    request.end();
  }

  const handleChange = event => {
    setAddress(event.target.value);
  }

  return (
    <div className="main">
      <div className="search">
        <input className="searchTerm" type="text" placeholder="Please enter wallet" onChange={ handleChange }/>
        <button className="searchButton" onClick={ sendRequest }>Search</button>
      </div>
      <TransactionList transactions={ transactions }/>
      <p className="error-message">{ error.active && error.message }</p>
    </div>
  )
};

export default Entry;