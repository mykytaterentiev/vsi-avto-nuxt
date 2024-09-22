// /api/reviews/put.ts
import { defineEventHandler, readBody, createError } from 'h3';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '~/server/db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { _id, ...updateData } = body;

  if (!_id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing review ID' });
  }

  const collection = await connectToDatabase('reviews');
  await collection.updateOne({ _id: new ObjectId(_id) }, { $set: updateData });

  return { success: true, message: 'Review updated successfully!' };
});
