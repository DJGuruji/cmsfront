import React from 'react';

const Mybranch = () => {
  const branches = [
    { id: 1, name: 'Main Branch', location: 'New York' },
    { id: 2, name: 'Westside Branch', location: 'California' },
    { id: 3, name: 'Eastside Branch', location: 'Florida' }
  ];

  return (
    <div className="mybranch-container">
      <h2 className="text-xl font-bold">My Branches</h2>
      <ul>
        {branches.map((branch) => (
          <li key={branch.id} className="border p-2 mb-2">
            {branch.name} - {branch.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mybranch;
