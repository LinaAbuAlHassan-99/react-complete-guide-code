// our-domain.com/new-meetup
import { useRouter } from 'next/router';//

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
//send request apiroute
function NewMeetupPage() {
  const router = useRouter();
// as normal request 
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {//the path of apirouter
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),//data i want to store in database
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');//to navigate to the root after response 
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;