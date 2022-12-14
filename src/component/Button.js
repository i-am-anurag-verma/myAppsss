import React from 'react';
import './button.css'

const Button = (props) => {
  return (
    <div className="form-group">
            <button type="button" className="btn btn-primary btn-lg" onClick={props.onclick} disabled={props.isDisabled}>{props.children}</button>
        </div>
  )
}

export default Button