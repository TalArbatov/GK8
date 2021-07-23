import React from 'react';

const TransactionListItem = ({
  timestamp,
  fromAddress,
  toAddress,
  value,
  confiramtions,
  hash
}) => {
  return (
    <div>
      <p>Hello world { timestamp }</p>
    </div>
  )
};

export default TransactionListItem;