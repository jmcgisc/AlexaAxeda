// src/components/ui/card.jsx
import React from "react";

export const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div className={`p-4 md:p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};
