// server/api/reviews/post.ts
import { defineEventHandler, readBody, sendError, createError } from 'h3';
import { connectToDatabase } from '~/server/db';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Simple validation
    if (!body || !body.name || !body.message || !body.rating) {
      throw createError({ statusCode: 400, statusMessage: 'Missing required fields' });
    }

    // Connect to the 'reviews' collection
    const collection = await connectToDatabase('reviews');
    const result = await collection.insertOne({
      name: body.name,
      message: body.message,
      rating: body.rating,
      createdAt: new Date(),
    });

    return { message: 'Review added', result };
  } catch (error) {
    if (error instanceof Error) {
      sendError(event, error);
    } else {
      sendError(event, createError({ statusCode: 500, statusMessage: 'Unknown error' }));
    }
  }
});
