import React from 'react';

const TransactionListItem = ({
  timestamp,
  fromAddress,
  toAddress,
  value,
  confiramtions,
  hash,
  key
}) => {
  return (
    <div>
      <p>Trn number: { key }</p>
      <p>timestamp: { timestamp }</p>
      <p>from: { fromAddress }</p>
      <p>to: { toAddress }</p>
      <p>amount: { value }</p>
      <p>confirmations: { confiramtions }</p>
      <p>hash: { hash }</p>
    </div>
  )
};

export default TransactionListItem;