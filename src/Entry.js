import React, { useState, useEffect } from 'react';
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
  })

  const sendRequest = () => {
    const { key } = config.api;
    const url = config.api.url(address, key);
    console.log('tal test', url);

    const request = net.request({
      method: 'GET',
      protocol: 'https:',
      hostname: 'api.etherscan.io',
      path: `/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=MZ4UW331HNIZZGB7SFM7N319NU4XQTICHP`,
      redirect: 'follow'
    });
    request.on('response', (response) => {
      // console.log(`STATUS: ${response.statusCode}`);
      // console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
      response.on('data', (chunk) => {
          try {
            console.log(`BODY: ${JSON.parse(chunk).result}`)
            const result = JSON.parse(chunk).result;
            if (!Array.isArray(result)) throw 'Invalid address';

            
            setTransactions(result.slice(0, config.maxTransactions));
            setError({
              active: false,
              message: ''
            })
          } catch(e) {
            console.log('not an array');
            setError({
              active: true,
              message: 'Invalid address'
            })
          }
          
      });
    });
    request.setHeader('Content-Type', 'application/json');
    request.end();
  }



  const search = () => {
    sendRequest();
  }

  const handleChange = event => {
    setAddress(event.target.value);
  }

  return (
    <div className="main">
      <div className="search">
        <input className="searchTerm" type="text" placeholder="Please enter wallet" onChange={ handleChange }/>
        <button className="searchButton" onClick={ search }>Search</button>
      </div>
      <TransactionList transactions={ transactions }/>
      <p style={ { color: 'red' } }>{ error.active && error.message }</p>
    </div>
  )
};

export default Entry;