// index css is public for all the files no need to importing it

// if i want more than one react i need to create new file Todo.js rather than copy this div in the number i want
//now i just add <Todo /> as much as i want

import Todo from "./components/Todo";
// passing data for Todo so the title can change with every Todo as i want i need to pass value (attribute)
// to make it configrable

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="welcome" />
      <Todo text=" To" />
      <Todo text="React" />

    </div>
  );
}

export default App;
