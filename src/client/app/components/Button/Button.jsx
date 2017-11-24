import React from 'react';


function Button(props) {
  return (
    <div className="btn" onClick={props.onClick}>
      {props.title}
    </div>
  );
}

export default Button;