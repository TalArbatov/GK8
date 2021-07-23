import React from 'react';

const TransactionListItem = ({
  timestamp,
  from,
  to,
  value,
  confirmations,
  hash,
}) => {
  return (
    <div>
      <p>timestamp: { timestamp }</p>
      <p>from: { from }</p>
      <p>to: { to }</p>
      <p>amount: { value }</p>
      <p>confirmations: { confirmations }</p>
      <p>hash: { hash }</p>
    </div>
  )
};

export default TransactionListItem;