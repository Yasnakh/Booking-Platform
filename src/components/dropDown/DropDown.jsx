import React from "react";
import "./dropDown.css";

const Dropdown = ({ options, onSelect }) => {
  return (
    <select className="dSelect" onChange={(e) => onSelect(e.target.value)}>
      {options.map((option) => (
        <option className="dOption" key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;