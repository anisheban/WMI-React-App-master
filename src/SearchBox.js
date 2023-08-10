import React from "react";

const SearchBox = ({ value, onChange, onClear }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className="clear-button" onClick={onClear}>
          Clear Search
        </button>
      )}
    </div>
  );
};

export default SearchBox;
