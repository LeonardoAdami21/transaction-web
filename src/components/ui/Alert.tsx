import React from "react";

interface AlertProps {
  message: string;
  type: "success" | "error";
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const baseClasses = "mb-6 px-4 py-3 rounded-lg border";
  const typeClasses = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
  };
  return <div className={`${baseClasses} ${typeClasses[type]}`}>{message}</div>;
};

export default Alert;
