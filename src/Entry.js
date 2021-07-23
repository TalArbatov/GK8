import React, { useEffect } from 'react';
import config from './config';
const electron = window.require("electron")

const net = electron.remote.net;

const Entry = () => {
  useEffect(() => {
    const { address, key } = config.api;
    const url = config.api.url(address, key);
    console.log('tal test', url);

    const request = net.request({
      method: 'GET',
      protocol: 'https:',
      hostname: 'api.etherscan.io',
      path: '/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken',
      redirect: 'follow'
    });

    request.on('response', (response) => {
      console.log(`STATUS: ${response.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

      response.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`)
      });
  });
    request.setHeader('Content-Type', 'application/json');
    request.end();
  }, [])

  return (
    <div className="wrapper">
      <p1>Hello world!</p1>
    </div>
  )
};

export default Entry;