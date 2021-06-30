import { Component } from "react";
import classes from "./User.module.css";
//class comp can work with function comp
//react will call render to rendert the jsx ( the code,return)
//to accsess props i need componrnt and this.props
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
/*
const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};
*/
export default User;
