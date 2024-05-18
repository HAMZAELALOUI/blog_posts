import React from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  const handleSearch = () => {
    console.log("Search initiated");
  };
  return (
    <header className="bg-white py-8">
      <div className="container mx-auto text-center mt-16">
        <h1 className="text-5xl font-bold text-gray-800">Next in AI</h1>
        <p className="mt-4 text-xl text-gray-600">
          Simple breakdowns of the day’s most important AI news.
        </p>
        <SearchBar placeholder="Search articles" onSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
