import React from "react";

export default function InputSearch({ onChange, onClick, onKeyDown }) {
  return (
    <div className="search-form">
      <input
        className="search-input shadow"
        type="text"
        placeholder="Type a city..."
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button className="search-button" onClick={onClick}>
        Search
      </button>
    </div>
  );
}
