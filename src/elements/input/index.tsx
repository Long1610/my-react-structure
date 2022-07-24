import React from "react";

interface input {
  onChange: () => void;
  type: string;
}
const Input = ({ onChange, type }: input) => {
  return (
    <>
      <input type={type} onChange={onChange} />
    </>
  );
};

export default Input;
