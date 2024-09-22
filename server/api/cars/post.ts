import { defineEventHandler, readBody, sendError, createError } from 'h3';
import { carPartSchema } from '~/server/models/carPart';
import { connectToDatabase } from '~/server/db';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate body using Zod schema
    const validation = carPartSchema.safeParse(body);

    if (!validation.success) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid data', data: validation.error.errors });
    }

    // Connect to the 'carparts' collection
    const collection = await connectToDatabase('carparts');
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
