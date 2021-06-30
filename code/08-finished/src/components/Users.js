import { Component } from 'react';

import User from './User';
import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  componentDidUpdate() {

    //this how i handel error in js
/*
    try {
      someCodeWhichMightFail()
    } catch (err) {
      // handle error
    }

    // i can use this method here but if i want to handel the error in some way else
    this will cant help me  i need error boundary
*/
    if (this.props.users.length === 0) {
      throw new Error('No users provided!'); // genarete error and passe it to stack(so pased throw componant(will be runed)) if now one handelit will crash my app
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
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
