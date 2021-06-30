import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
//it will not re evaluate becuase i make the value of demo output fixed
// so i use memo
// but still print  console.log('Button RUNNING'); becuse its props value still change
// props change because when i re evaluate App the toggle function re create so it seam like new value passe to props
 // new function re created for js so i'm passe new props
 