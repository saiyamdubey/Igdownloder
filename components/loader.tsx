import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-row gap-2 h-fit ">
      <div className="w-8 h-8 rounded-full bg-red-600 animate-ping"></div>
      <div className="w-8 h-8 rounded-full bg-blue-600 animate-ping [animation-delay:-.3s]"></div>
      <div className="w-8 h-8 rounded-full bg-purple-600 animate-ping [animation-delay:-.6s]"></div>
      <div className="w-8 h-8 rounded-full bg-blue-600 animate-ping [animation-delay:-.9s]"></div>
      <div className="w-8 h-8 rounded-full bg-red-600 animate-ping [animation-delay:-1s]"></div>
    </div>
    // <div className="flex flex-row gap-2">
    //   <div className="w-8 h-15 bg-blue-700 animate-spin  [animation-delay:-0.0s]"></div>
    //   <div className="w-8 h-15  bg-blue-700 animate-spin [animation-delay:-0.3s]"></div>
    //   <div className="w-8 h-15  bg-blue-700 animate-spin [animation-delay:-0.5s]"></div>
    //   <div className="w-8 h-15 bg-blue-700 animate-spin [animation-delay:-0.7s]"></div>
    //   <div className="w-8 h-15  bg-blue-700 animate-spin [animation-delay:-0.9s]"></div>
    //   <div className="w-8 h-15  bg-blue-700 animate-spin [animation-delay:-1.1s]"></div>
    // </div>
  );
};

export default Loader;
