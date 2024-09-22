// server/api/reviews/get.ts
import { defineEventHandler, sendError } from 'h3';
import { connectToDatabase } from '~/server/db';

export default defineEventHandler(async (event) => {
  try {
    // Connect to the 'reviews' collection
    const collection = await connectToDatabase('reviews');
    const reviews = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return reviews;
  } catch (error) {
    if (error instanceof Error) {
      sendError(event, error);
    } else {
      sendError(event, createError({ statusCode: 500, statusMessage: 'Unknown error' }));
    }
  }
});
