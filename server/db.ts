import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside the .env file');
}

const client = new MongoClient(uri);

export const connectToDatabase = async (collectionName: string) => {
  try {
    await client.connect();
    console.log(`Connected to MongoDB, accessing ${collectionName} collection`);

    const db = client.db('vsiavto'); // We keep the database constant
    const collection = db.collection(collectionName); // Use the collection name dynamically

    return collection;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};
