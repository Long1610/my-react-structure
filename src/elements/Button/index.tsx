import React from "react";
interface button {
  onClick: () => void;
  title: string;
}
const Button = ({ onClick, title }: button) => {
  return (
    <>
      <button onClick={onClick}>{title}</button>
    </>
  );
};

export default Button;
