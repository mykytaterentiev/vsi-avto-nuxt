// /api/cars/delete.ts
import { defineEventHandler, readBody, createError } from 'h3';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '~/server/db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { _id } = body; // Get the _id from the request body

  if (!_id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing car part ID' });
  }

  const collection = await connectToDatabase('carparts');
  await collection.deleteOne({ _id: new ObjectId(_id) });

  return { success: true, message: 'Car part deleted successfully!' };
});
