import React from "react";
import "./Input.scss";

function Input({ type, name, placeholder }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="text-xs Area"
      />
    </div>
  );
}

export default Input;
