import NewMeetupForm from "../components/meetups/NewMeetupForm";
//send http request I can do that inNewMeetupForm but the code their is to big
import { useHistory } from "react-router-dom";

const NewMeetupsPage = () => {
  const history = useHistory();
  const AddMeetupHandler = (meetupData) => {
    // /meetups become table in firebase ,json requierd by firebase
    fetch("url to send request to(he use fire base) /meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      //feedbach to user that successes ex:navigate away

      history.replace("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
};
export default NewMeetupsPage;
