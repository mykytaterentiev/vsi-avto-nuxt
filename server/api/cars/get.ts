import { defineEventHandler, sendError } from 'h3';
import { connectToDatabase } from '../../db';

export default defineEventHandler(async (event) => {
  try {
    const collection = await connectToDatabase();
    const carParts = await collection.find({}).toArray();

    return carParts;
  } catch (error) {
    if (error instanceof Error) {
      sendError(event, error);
    } else {
      sendError(event, createError({ statusCode: 500, statusMessage: 'Unknown error' }));
    }
  }
});
