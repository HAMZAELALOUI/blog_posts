import React from "react";
import Button from "./Button";

interface SearchBarProps {
  placeholder: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  return (
    <div className="mt-6">
      <input
        type="search"
        placeholder={placeholder}
        className="p-3 rounded-md border border-gray-300 mr-2"
        onChange={onSearch} // Attach the onChange event
      />
      <Button>Search</Button>
    </div>
  );
};

export default SearchBar;
