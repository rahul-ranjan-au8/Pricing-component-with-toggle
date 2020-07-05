import React from "react";
import "../styles/options.css";

const Options = (props) => {
  return (
    <div className="options-div">
      <span className="options-texts">Anually</span>

      <label className="switch">
        <input type="checkbox" onClick={props.onClick} />
        <span className="slider round"></span>
      </label>

      <span className="options-texts">Monthly</span>
    </div>
  );
};

export default Options;
