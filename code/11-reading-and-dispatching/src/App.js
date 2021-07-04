import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  //the state whether the user is login or not is not local state
  //its application mater not one componant so we can manage it with contxt or redux
  //auth inside the config and is auth inside the initial state
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}//if not authinticated
      {isAuth && <UserProfile />} //if authinticated
      <Counter />
    </Fragment>
  );
}

export default App;
