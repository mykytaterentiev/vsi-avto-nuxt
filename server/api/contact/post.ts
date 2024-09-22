// server/api/contact/post.ts
import { defineEventHandler, sendError, createError } from 'h3';
import { contactSchema } from '~/server/models/contactSchema'; // Import the Zod schema
import { connectToDatabase } from '~/server/db'; // Import the db connection function

export default defineEventHandler(async (event) => {
  try {
    // Parse and validate the request body
    const body = await readBody(event);

    // Validate with Zod
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.errors.map(err => err.message);
      return sendError(event, createError({ statusCode: 400, statusMessage: errors.join(', ') }));
    }

    // Connect to the 'contact' collection in the database
    const collection = await connectToDatabase('contact');

    // Insert the validated data into the 'contact' collection
    await collection.insertOne({
      name: result.data.name,
      email: result.data.email,
      message: result.data.message,
      createdAt: new Date(),
    });

    // Respond with success
    return { message: 'Contact request submitted successfully' };
  } catch (error) {
    console.error('Error processing contact request:', error);
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Internal server error' }));
  }
});
