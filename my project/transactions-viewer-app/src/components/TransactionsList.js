import React, { useEffect, useState } from 'react';
import transactionsData from '../data/transactions.json';

const TransactionsList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Simulating fetching data from a JSON file
        setTransactions(transactionsData);
    }, []);

    return (
        <div>
            <h2>Transaction History</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        <p><strong>Amount:</strong> {transaction.amount}</p>
                        <p><strong>Sender:</strong> {transaction.sender}</p>
                        <p><strong>Receiver:</strong> {transaction.receiver}</p>
                        <p><strong>Date:</strong> {transaction.date}</p>
                        <p><strong>Type:</strong> {transaction.type}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionsList;