import React, { useState } from 'react';

const Settings = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    alert(`Settings Updated! Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="settings-container ">
      <h2 className="text-xl font-bold">Settings</h2>
      <form onSubmit={handleUpdate} className="settings-form w-1/2 mt-24 ">
        <div className="mb-4">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter new email"
          />
        </div>
        <div className="mb-4">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter new password"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-md hover:rounded-lg text-white p-2">
          Update Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
