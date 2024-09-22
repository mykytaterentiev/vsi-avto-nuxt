// /api/contact/put.ts
import { defineEventHandler, readBody, createError } from 'h3';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '~/server/db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { _id, ...updateData } = body;

  if (!_id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing contact ID' });
  }

  const collection = await connectToDatabase('contact');
  await collection.updateOne({ _id: new ObjectId(_id) }, { $set: updateData });

  return { success: true, message: 'Contact request updated successfully!' };
});
