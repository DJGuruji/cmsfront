import React from 'react';

const Notification = () => {
  const notifications = [
    { id: 1, message: 'Your complaint #123 has been resolved.', date: '2024-10-25 10:00 AM' },
    { id: 2, message: 'New update on complaint #456.', date: '2024-10-24 2:30 PM' },
    { id: 3, message: 'Your complaint #789 is being processed.', date: '2024-10-23 9:00 AM' }
  ];

  return (
    <div className="notification-container">
      <h2 className="text-xl font-bold">Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="border p-2 mb-2">
            {notification.message} - {notification.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
