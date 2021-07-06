// component not pages beacuse its will not loaded by route
//like this new request send so i need to fix ths to still SAps///
import { Link } from "react-router-dom"; ///
// i want to hilighet the active page(link)
import { NavLink } from "react-router-dom";
//activeClassName={classes.active}  this class active ancore.active (a.active)
//import css to have the styles
const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            //<Link to="/welcome">Welcome</Link>///
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink> 
          </li>
          <li>
            <NavLink activeClassName={classes.active}  to="/products">Products</NavLink>/// rather than a href="/products"
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
