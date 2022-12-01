import React from "react";

const FormElement = (props) => {
  return (
    <div>
      <span className="input-group-addon">
        <i className="fa fa-paper-plane"></i>
      </span>
      <input
        type="text"
        className={props.className}
        name={props.name}
        placeholder={props.placeholder}
        required
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormElement;
