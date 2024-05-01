import { useState } from "react";
import axios from "axios";

const DeleteButton = ({ itemId }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      setShowConfirmation(false);

      await axios.delete(`http://your-backend-api-url/items/${itemId}`);
    } catch (error) {}
  };

  return (
    <div>
      {showConfirmation ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Are you sure you want to delete?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <button
        className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
        onClick={() => setShowConfirmation(true)}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
