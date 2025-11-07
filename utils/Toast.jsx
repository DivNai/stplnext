import React, { useState, useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  const getToastClass = () => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      case "warning":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div
      className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg ${getToastClass()} transition-all transform z-[200]`}
    >
      <div className="flex items-center">
        <div className="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m2 0h2m-6-6h2m-2 12h2m0-6h2"
            />
          </svg>
        </div>
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-3 text-white focus:outline-none"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
