import { MongoClient } from 'mongodb';//will not execute in cliant becuse i use it in server side(getStaticProps)

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

//get the stored data (GET) fetch('/api/meetups)// but this redundunt becuse we send req to our API
//we dont need to end request we use the code
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://maximilian:arlAapzPqFyo4xUk@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();//find all the document(entry).to array to have array doc 

  client.close();//close the connection with DB

  return {
    props: {// i cant return meetups directly i need to transfare it also becuse i d is obj and give us error so i need to string in it
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
