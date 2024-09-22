import { connectToDatabase } from '~/server/db';
import { ObjectId } from 'mongodb';

export default defineEventHandler(async (event) => {
  const { id, isApproved } = await readBody(event);
  const db = await connectToDatabase('reviews');

  // Ensure the ID is correctly cast to an ObjectId for MongoDB
  await db.updateOne({ _id: new ObjectId(id) }, { $set: { isApproved } });

  return { success: true };
});
