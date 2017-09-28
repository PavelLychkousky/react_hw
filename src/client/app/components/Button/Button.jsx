import React from 'react';

import styles from './Button.less';

function Button(props) {
  return (
    <div className="btn" onClick={props.onClick}>
      {props.title}
    </div>
  );
}

export default Button;