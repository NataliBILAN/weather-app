import React from "react";

export default function InputSearch({ onChange, onSubmit }) {
  return (
    <form action="" className="search-form">
      <input
        className="search-input shadow"
        type="text"
        placeholder="Type a city..."
        onChange={onChange}
      />
      <button type="submit" className="search-button" onSubmit={onSubmit}>
        Search
      </button>
    </form>
  );
}
