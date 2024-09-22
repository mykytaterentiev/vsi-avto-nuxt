import { connectToDatabase } from '~/server/db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event); 
  const db = await connectToDatabase('users'); 

  const user = await db.findOne({ username: body.username });
  if (!user) {
    throw createError({ statusCode: 401, message: 'User not found' });
  }

  if (body.password !== user.password) {
    throw createError({ statusCode: 401, message: 'Invalid password' });
  }

  if (user.isAdmin) {
    return { message: 'Admin access granted' };
  } else {
    throw createError({ statusCode: 403, message: 'Access denied' });
  }
});
