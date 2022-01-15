import React from "react";

const Button: React.FC = ({ children }) => {
  return (
    <button className="font-lg bg-slate-100 rounded px-3 py-1 hover:bg-slate-200 duration-200 active:bg-slate-400 ">
      {children}
    </button>
  );
};

export default Button;
