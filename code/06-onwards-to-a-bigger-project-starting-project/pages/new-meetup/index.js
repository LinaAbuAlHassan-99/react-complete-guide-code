//our-domain/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
//import Layout from "../../components/layout/Layout";
const NewMwwtupPage = () => {
  const addMeetupHandler = (enterdMeetupData) => {
    console.log(enterdMeetupData);
  };

  return (

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
 
  );
};

export default NewMwwtupPage;
