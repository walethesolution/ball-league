import { MongoClient } from 'mongodb';

// Replace with your MongoDB connection string
const uri = "mongodb+srv://walethesolution:rwtSZV5YeEjwUd60@cluster0.lkavgmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!uri) {
  throw new Error("Please add your MongoDB URI to the environment variables.");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
