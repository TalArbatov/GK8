import React, { useState, useEffect } from 'react';
import config from './config';
import TransactionList from './TransactionList';
const electron = window.require("electron")

const net = electron.remote.net;

const Entry = () => {
  const [address, setAddress] = useState('');
  const [transactions, setTransactions] = useState([]);

  // useEffect(() => {
  //   sendRequest();
  // }, [])

  const sendRequest = () => {
    const { address, key } = config.api;
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
          console.log(`BODY: ${JSON.parse(chunk).result}`)
          setTransactions(JSON.parse(chunk).result);
      });
    });
    request.setHeader('Content-Type', 'application/json');
    request.end();
  }

  const generate = () => {
    sendRequest();
  }

  const handleChange = event => {
    setAddress(event.target.value);
  }

  return (
    <div className="wrapper">
      <input type="text" placeholder="Please enter wallet" onChange={ handleChange }/>
      <button onClick={ generate }>Generate</button>
      <TransactionList transactions={ transactions }/>
    </div>
  )
};

export default Entry;