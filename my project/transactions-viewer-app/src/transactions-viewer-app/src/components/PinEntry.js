import React, { useState } from 'react';

const PinEntry = ({ onSubmit }) => {
  const [pin, setPin] = useState('');

  const handleChange = (e) => {
    setPin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pin);
    setPin('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter PIN:
        <input
          type="password"
          value={pin}
          onChange={handleChange}
          maxLength={4}
          pattern="\d*"
          required
        />
      </label>
      <button type="submit">Unlock</button>
    </form>
  );
};

export default PinEntry;