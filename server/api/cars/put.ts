// /api/cars/put.ts
import { defineEventHandler, readBody, createError } from 'h3';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '~/server/db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Get the updated data
  const { _id, ...updateData } = body; // Extract the _id and remaining data to update

  if (!_id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing car part ID' });
  }

  const collection = await connectToDatabase('carparts');
  await collection.updateOne({ _id: new ObjectId(_id) }, { $set: updateData });

  return { success: true, message: 'Car part updated successfully!' };
});
