import React from 'react';

const LeftSide: React.FC = () => {
  return (
    <div className="hidden md:flex w-1/2 bg-black items-center justify-center py-12 px-6 h-full transition-all duration-500 ease-in-out">
      <div className="text-left w-full max-w-md">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight whitespace-nowrap">
          Welcome to <span className="text-green-600">Deloai</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mt-4">
          Your coding journey begins here
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
