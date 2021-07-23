import React from 'react';
import TransactionListItem from './TransactionLIstItem';

const TransactionList = ({
  transactions
}) => {
  console.log(transactions)
  const transactionList = transactions.map((trn, index) => (
    <TransactionListItem 
      key={ index }
      timestamp={ trn.timeStamp }
      />
  ))
  return transactionList;
};

export default TransactionList;