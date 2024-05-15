import React from "react";
import Button from "./Button";

interface SearchBarProps {
  placeholder: string;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  return (
    <div className="mt-6">
      <input
        type="search"
        placeholder="Search articles"
        className="p-3 rounded-md border border-gray-300 mr-2"
      />
      <Button>Search</Button>
    </div>
  );
};

export default SearchBar;
