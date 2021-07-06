import { Route } from 'react-router-dom';// not limeted to define route in one place i can router it whrer ever i need
//nod when this route active its route will be routerd also
// if wlcome page active this path will be active 
// if i put here rout to /products this will never be active becuse i cant be active from welcome to rrout start with products (fro,m /welcome i cant go to /product)
// products start from the original path not from welcome oath
// work with nested route (inside the page i'd like to have route)
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      //i want to go to ewlcome and then new user 
      <Route path="/welcome/new-user">// would be active if i in welcome page
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
