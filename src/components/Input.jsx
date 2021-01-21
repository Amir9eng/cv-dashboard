import React from "react";
import "./Input.scss";

function Input({ name, question }) {
  return (
    <div>
      <input type="text" name={name} />
    </div>
  );
}

export default Input;
