import React, { useState } from 'react';
import axios from 'axios';

const EditProfileForm = ({ user }) => {
  const [formData, setFormData] = useState({
    profilePhoto: user.profilePhoto,
    department: user.department,
    email: user.email
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://your-backend-api-url/users/${user.id}`, formData);
      // Handle success, update UI or show a success message
      console.log('Profile updated successfully');
      setShowForm(false); // Close the form after successful update
    } catch (error) {
      // Handle errors, show an error message to the user
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md">
            <input type="text" name="profilePhoto" value={formData.profilePhoto} onChange={handleChange} className="block w-full border-gray-300 rounded-md mb-2" placeholder="Profile Photo URL" />
            <input type="text" name="department" value={formData.department} onChange={handleChange} className="block w-full border-gray-300 rounded-md mb-2" placeholder="Department" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full border-gray-300 rounded-md mb-2" placeholder="Email" />
            <div className="mt-4 flex justify-end">
              <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>Save</button>
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setShowForm(true)}>Edit Profile</button>
    </div>
  );
};

export default EditProfileForm;