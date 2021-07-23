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
      from={ trn.from }
      to={ trn.to }
      value={ trn.value }
      confirmations={ trn.confirmations }
      hash={ trn.hash }
      />
  ))
  return transactionList;
};

export default TransactionList;