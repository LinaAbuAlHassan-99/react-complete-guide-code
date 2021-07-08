// i added in comp becuse will not load as page will be in the pages
import { Link } from "react-router-dom";
//css modules
import classes from './MainNavigation.module.css';//
const MainNavigation = () => {
  // not <a></a> becuse will send new request and load page
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup"> New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites"> My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
