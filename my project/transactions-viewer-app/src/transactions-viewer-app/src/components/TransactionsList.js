import React, { useEffect, useState } from 'react';
import transactionsData from '../data/transactions.json';
import Transaction from './Transaction';

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <Transaction transaction={transaction} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;