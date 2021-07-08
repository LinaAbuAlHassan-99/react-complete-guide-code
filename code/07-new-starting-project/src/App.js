import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeerups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
//wrap the content by layout
import Layout from "./components/layout/Layout";
//domain/path
//localhost:3000/path

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
