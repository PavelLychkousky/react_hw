import React from 'react';

import styles from './Button.less';

function Button(props) {
  return (
    <div className="btn">
      {props.title}
    </div>
  );
}

export default Button;