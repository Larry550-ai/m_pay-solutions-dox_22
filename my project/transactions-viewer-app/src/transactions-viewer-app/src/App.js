import React, { useState } from 'react';
import PinEntry from './components/PinEntry';
import TransactionsList from './components/TransactionsList';
import ConfirmationMessage from './components/ConfirmationMessage';

const CORRECT_PIN = '1234'; // You can change this PIN

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [confirmation, setConfirmation] = useState('');

  const handlePinSubmit = (pin) => {
    if (pin === CORRECT_PIN) {
      setAuthenticated(true);
    } else {
      alert('Incorrect PIN. Please try again.');
    }
  };

  // Simulate a transaction for demo
  const handleSimulateTransaction = () => {
    setConfirmation('Transaction successful! Confirmation sent.');
  };

  return (
    <div>
      <h1>M/pay - Transactions Viewer</h1>
      {!authenticated ? (
        <PinEntry onSubmit={handlePinSubmit} />
      ) : (
        <>
          <button onClick={handleSimulateTransaction}>Simulate Transaction</button>
          {confirmation && (
            <ConfirmationMessage
              message={confirmation}
              onClose={() => setConfirmation('')}
            />
          )}
          <TransactionsList />
        </>
      )}
    </div>
  );
}

export default App;
