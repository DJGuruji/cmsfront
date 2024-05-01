import React from "react";

const UserDetails = () => {
  return (
    <div className="flex justify-center items-center ml-20 lg:ml-52 xl:ml-52 lg:w-3/4 xl:w-3/4 h-full mt-20 ">
      <div className="mt-3 p-10 rounded-md border-2 ">
        <h1 className="text-xl p-1">Give Permissions</h1>
 <form action="" method="post">
 <span className="flex mt-5">
          <input type="checkbox" name="" id="" className="p-2 " />
          <h1 className="p-2">User Management</h1>
        </span>
        <span className="flex">
          <input type="checkbox" name="" id="" className="p-2 " />
          <h1 className="p-2">Add User </h1>
        </span>
        <span className="flex justify-center">
        <input  className="p-2 bg-blue-500 rounded-md hover:bg-blue-600 mt-2 w-3/4 text-center text-white"  type="submit" value="Save" />
        </span>
 </form>

      </div>
    </div>
  );
};

export default UserDetails;
