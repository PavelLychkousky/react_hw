import React from 'react';

import TogglerItem from './TogglerItem'

function Toggler (props) {
  const options = props.options.map((option) =>
    <TogglerItem key={option.key} option={option} onChange={props.onChange}
                 selectedValue={props.selectedValue}/>
  );

  return (
    <div className="toggler">
      {options}
    </div>
  );
}

export default Toggler;