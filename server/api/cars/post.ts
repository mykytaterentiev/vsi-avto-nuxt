import { defineEventHandler, sendError, createError } from 'h3';
import { carPartSchema } from '../../models/CarPart';
import { connectToDatabase } from '../../db';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const validation = carPartSchema.safeParse(body);

    if (!validation.success) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid data' });
    }

    const collection = await connectToDatabase();
    const result = await collection.insertOne(validation.data);

    return { message: 'Car part added', result };
  } catch (error) {
    if (error instanceof Error) {
      sendError(event, error);
    } else {
      sendError(event, createError({ statusCode: 500, statusMessage: 'Unknown error' }));
    }
  }
});
