import MeetupList from "../components/meetups/MeetupList";
//fetch data from firebase(GET)//load data from BE (API)

//use state here becuse i want to change the state when i have responce data
import { useState, useEffect } from "react";
// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ]; // i pass loadedMeetups rather it

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  // i want directly to fetch data from DB
  //without  useEffect this fetch will re evalute when comp reevaluate
  //[]//only when run for the first time
  //react will execute when comp execute so i need to put dependancyies
  useEffect(() => {
    setIsLoading(true);
    fetch("url to send request to(he use fire base)")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // translate te data to array
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key], // for thr given key i want the data
          };

          meetups.push(meetup);
        }

        setIsLoading(false); //once we have a data we stop loading
        //setLoadedMeetups(data); //not correct to set data like this //the problem when fetch data from fire base we get obj and ids act like proparity
        // and here we exept array so i needto transform the data
        setLoadedMeetups(meetup);
      });
  }, []); //here no dependancy nothing will change
  //rule to add dependancy
  // all external values our function(useefect function) depend on //ex:props
  // use State function will alowse be fixed so dont need to put them

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }
  //from list of data (DUMMY_DATA) -> to list of jsx element // here from array of object to array of li elements
  //array can render in react {[<li>item1</li>]}
  //map for every obj in the array
  //list inreact require id key={meetup.id}
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};
export default AllMeetupsPage;

// when i the state change the request send and when request sen mean new update so change the sate so fetch gian and so on
// so infinite loop occure and i dont need this so i use useEffect hoc
