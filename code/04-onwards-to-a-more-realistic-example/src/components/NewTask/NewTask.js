import { useState } from 'react';
/* insert data */
import Section from '../UI/Section';
import TaskForm from './TaskForm';
// alown // mean the same thing shared
/* here ther is a shared logic with(App) with some deferances so i need cousto hooks  */
const NewTask = (props) => {
  const [isLoading, setIsLoading] = useState(false);//
  const [error, setError] = useState(null);//

  const enterTaskHandler = async (taskText) => {
    setIsLoading(true);//
    setError(null);//
    try {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
//error handling 
      if (!response.ok) {//
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
