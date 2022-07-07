import React from "react";

export default function InputSearch({
  onChange,
  onClick,
  onKeyDown,
  isEmpty,
  handleResetButtonClick,
  value,
  onFocusHandle,
}) {
  return (
    <div className="search-form">
      <input
        className="search-input shadow"
        type="text"
        placeholder="Type a city..."
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        onFocus={onFocusHandle}
      />
      {isEmpty === false && (
        <button
          type="reset"
          className="reset-button"
          onClick={handleResetButtonClick}
        >
          &times;
        </button>
      )}
      <button className="search-button" onClick={onClick}>
        Search
      </button>
    </div>
  );
}
