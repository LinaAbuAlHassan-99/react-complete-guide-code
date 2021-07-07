import { MongoClient } from 'mongodb'; //DB mango Altise

// /api/new-meetup // if request trigger this path then this fun will execute
// POST /api/new-meetup


// server side code only run in server 
//never contain react comp


async function handler(req, res) {
  if (req.method === 'POST') {//only post request will treger here
    const data = req.body;//data i want to store
// i can use try catch to handel error
// connect to our DB
//becuse its alowys run on server side then its sequre i can add my pass
//MongoClient obj allow us to connect i need to put the username and password //meetups data base name
    const client = await MongoClient.connect(
      'mongodb+srv://maximilian:arlAapzPqFyo4xUk@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();//hold of DB
//'meetups' the name of collection i can name it what i want
    const meetupsCollection = db.collection('meetups');// work with collection (attribut,tabels) and doc (enty)

    const result = await meetupsCollection.insertOne(data);//insert data to DB

    console.log(result);//result obj of genarated id

    client.close();
      //return responce 
    res.status(201).json({ message: 'Meetup inserted!' });//201 to inform insert secsesfoly
  }
}

export default handler;
