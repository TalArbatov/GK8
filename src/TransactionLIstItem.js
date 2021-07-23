import React from 'react';

const TransactionListItem = ({
  timestamp,
  from,
  to,
  value,
  confirmations,
  hash,
  transactionIndex
}) => {

  const convertDate = timestamp => {
    const date = new Date(timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    return `${day} ${month} ${year}   ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
  };

  return (
    <div className="tranaction-list-item">
      <p className="transaction-index">#{ transactionIndex }</p>
      <p><b>timestamp:</b> { convertDate(timestamp) }</p>
      <p><b>from:</b> { from }</p>
      <p><b>to:</b> { to }</p>
      <p><b>amount:</b> { value }</p>
      <p><b>confirmations:</b> { confirmations }</p>
      <p><b>hash:</b> { hash }</p>
    </div>
  );
};

export default TransactionListItem;