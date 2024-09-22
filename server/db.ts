import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config(); 

const uri = process.env.MONGODB_URI; 

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside the .env file');
}

const client = new MongoClient(uri);

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('vsiavto'); 
    const collection = db.collection('carparts'); 

    return collection;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};
