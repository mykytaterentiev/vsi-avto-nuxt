// server/api/cars/get.ts
import { defineEventHandler, sendError } from 'h3';
import { connectToDatabase } from '~/server/db';

export default defineEventHandler(async (event) => {
  try {
    // Connect to the 'carparts' collection
    const collection = await connectToDatabase('carparts');
    const carParts = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return carParts;
  } catch (error) {
    if (error instanceof Error) {
      sendError(event, error);
    } else {
      sendError(event, createError({ statusCode: 500, statusMessage: 'Unknown error' }));
    }
  }
});
