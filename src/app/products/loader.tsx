import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
}
