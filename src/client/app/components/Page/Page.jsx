import React from 'react';

import Logo from '../Logo'

function Page(props) {
  return (
    <div className="page">
      {props.children}
      <div className="footer">
        <Logo />
      </div>
    </div>
  );
}

export default Page;