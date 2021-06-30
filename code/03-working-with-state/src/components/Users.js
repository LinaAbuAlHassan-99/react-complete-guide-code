import { Component } from "react";

import User from "./User";
import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
// to manage toggleUsersHandler function
//i need to initialize(defined) the state and updated whre needed
// in class the initial state is alyes opject in comp can be any thing
class Users extends Component {
  //to defined state ineed constrocter
  constructor() {
    super();
    this.state = {// alwyse object becuse only one state can create not like comp i use useState as i want 
      showUsers: true,
      more: "Test",
    };
  }
  //method
  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT! this to change the state
    //to update the state and alwyse tacke object // alwayse marge the state the new with the last not like comp override  
    //return object
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }
// to make this in render he same in the class i need bind(this)
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
