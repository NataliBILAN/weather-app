import React from "react";

export default function Form() {
  return (
    <form action="" className="search-form">
      <input
        className="search-input shadow"
        type="text"
        placeholder="Type a city..."
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
