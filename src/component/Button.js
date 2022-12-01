import React from 'react'

const Button = (props) => {
  return (
    <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">{props.children}</button>
        </div>
  )
}

export default Button