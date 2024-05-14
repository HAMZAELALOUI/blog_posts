// components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800">Next in AI</h1>
        <p className="mt-4 text-xl text-gray-600">
          Simple breakdowns of the day’s most important AI news.
        </p>
        <div className="mt-6">
          <input
            type="search"
            placeholder="Search articles"
            className="p-3 rounded-md border border-gray-300 mr-2"
          />
          <button className="p-3 rounded-md bg-red-500 text-white">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
