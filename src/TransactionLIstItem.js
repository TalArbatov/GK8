import React from 'react';

const TransactionListItem = ({
  timestamp,
  from,
  to,
  value,
  confirmations,
  hash,
}) => {

  const convertDate = timestamp => {
    
    const date = new Date(timestamp * 1000);
    // Ho urs part from the timestamp

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();

    
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    const formattedTime = `${day} ${month} ${year}   ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
    return formattedTime;

  }
  return (
    <div className="tranaction-list-item">
      <p>timestamp: { convertDate(timestamp) }</p>
      <p>from: { from }</p>
      <p>to: { to }</p>
      <p>amount: { value }</p>
      <p>confirmations: { confirmations }</p>
      <p>hash: { hash }</p>
    </div>
  )
};

export default TransactionListItem;