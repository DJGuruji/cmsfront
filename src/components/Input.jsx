import React, { useState } from "react";



const Input = ({ type, name, onChange, placeholder ,value,InnerRef}) => {
  return (
    <div>
      <input
        className="p-2 w-full rounded-md my-1 inputbody border"
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        required={true}
        ref={InnerRef}
      />
    </div>
  );
};

export default Input;
