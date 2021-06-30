import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  //will re render 3 time because i call it 3 time 
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
