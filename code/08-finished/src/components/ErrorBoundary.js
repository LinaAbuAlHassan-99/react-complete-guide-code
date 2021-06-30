import { Component } from "react";
// must be a class based componant
// Not all app crach if something come error no handel it just like try catch
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  //componentDidCatch-> can be added to any class based compnant and make it error boundary
  // where child comp throw(genarete error) this will triggerd
  componentDidCatch(error) {
    //componentDidCatch -> life cycle method
    console.log(error); //error ->the error throw 'No users provided!'
    this.setState({ hasError: true });
  }

  render() {
    // if there is an error i want to return something (here i can handel the error)
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children; // i do this to wrap the comp genarate the erroe wull erroe boundary (like UserFibder.js in our code)
  }
}

export default ErrorBoundary;
