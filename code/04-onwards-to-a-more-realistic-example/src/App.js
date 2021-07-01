import React, { useEffect, useState,useCallback } from "react";
/* here ther is a shared logic with(NewTask) with some deferances so i need cousto hooks  */
import useHttp from "./hooks/use-http";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  /*
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]); // spasific fpr app compso not deldet it

  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
*/

  const [tasks, setTasks] = useState([]); // spasific fpr app compso not deldet it

  const transformTasks = useCallback((taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, taskObj: data[taskKey].text });
    }

    setTasks(loadedTasks);
  },[]);
//change its name  sendRequest: fetchTasks
  const {isLoading, error, sendRequest: fetchTasks} = useHttp(
    transformTasks
  );

// or other method on file 6
  useEffect(() => {
    fetchTasks({ url: "https://react-http-6b4a6.firebaseio.com/tasks.json" } )}, [fetchTasks]); // this will create infinite loop becuse the state re set with this state so the como re render
// so i need to wrap use-http.js with call back 
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
