import React,{useState} from "react";
import musk from "/musk.jpg";
import DeleteButton from "./DeleteProfileButton";
import EditProfileForm from "./EditProfileForm";

const Profile = () => {


  return (
    <div className="flex flex-col ml-20 lg:ml-52 xl:ml-52 lg:w-3/4 xl:w-3/4 h-full  mt-20 ">
    <div className="mt-3">
      <h1 className="text-xl ">user Profile</h1>
      <span>
        <img className="rounded-full w-20 h-20 mt-2" src={musk} alt="profile" />
      </span>
      <h1 className="p-2">User Name</h1>
      <h1 className="p-2">Branch</h1>
      <span className="p-1">example@gmail.com</span>
      <span className="flex ">
      <button className="p-1 mr-3 bg-slate-200 hover:bg-slate-300 rounded-md w-20">Edit</button>
     
      {/* <button className="bg-red-500 ml-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" o>Delete</button>
          
           <EditProfileForm></EditProfileForm> */}
           <DeleteButton></DeleteButton>
      </span>
      </div>
    </div>
  );
};

export default Profile;
