import React, { useState, useRef } from "react";
import Input from "../components/Input";
import Select from "react-select";

const ComplaintForm = ({ onImagesUpdate }) => {
  const options = [
    { value: "CSE", label: "CSE" },
    { value: "ECE", label: "ECE" },
    { value: "EEE", label: "EEE" },
    { value: "MECH", label: "MECH" },
    { value: "CIVIL", label: "CIVIL" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);

  const [user, setUser] = useState({
    title: "",
    discription: "",
    department: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setSelectedImage(file);
      setUser({ ...user, [name]: file });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newImageData = { image: selectedImage };
    setSubmittedData([...submittedData, newImageData]);
    onImagesUpdate([...submittedData, newImageData]);
    setSelectedImage(null); 
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-20 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-200 p-5 rounded-lg "
      >
        <span className="flex justify-center">
          <h1 className="text-lg">Add Complaints</h1>
        </span>
        <label className="block text-gray-700 font-bold" htmlFor="image">
          Title:
        </label>
        <Input
          type="text"
          name="title"
          value={user.title}
          onChange={handleInputChange}
          placeholder="Complaint Title"
        />
        <label className="block text-gray-700 font-bold" htmlFor="image">
          Discription:
        </label>
        <textarea
          name="description"
          value={user.description}
          onChange={handleInputChange}
          placeholder="Complaint Description"
          rows="4"
          className="border p-2 block w-full resize-none rounded-md" 
        />
        <label className="block text-gray-700 font-bold" htmlFor="image">
          To Branch:
        </label>
        <Select
          options={options}
          onChange={(selectedOption) =>
            setUser({ ...user, branch: selectedOption.value })
          }
        />

        <label className="block text-gray-700 font-bold" htmlFor="image">
          Upload Image:
        </label>
        <Input
          id="inputFile"
          type="file"
          name="file"
          onChange={handleInputChange}
          placeholder="Upload File"
        />
        <span className="flex justify-center">
          <button
            type="submit"
            className="w-3/4 bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </span>
        {submittedData.map((data, index) => (
          <DisplayFile key={index} selectedData={data} />
        ))}
      </form>
    </div>
  );
};

const DisplayFile = ({ selectedData }) => {
  return (
    <div className="mt-4">
      <img
        src={URL.createObjectURL(selectedData.image)}
        alt={`Uploaded Image`}
        className="mt-2 rounded"
        style={{ maxWidth: "500px" }}
      />
    </div>
  );
};

export { DisplayFile, ComplaintForm };
