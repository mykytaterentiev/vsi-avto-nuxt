// server/api/contact/get.ts
import { defineEventHandler, sendError, createError } from 'h3';
import { connectToDatabase } from '~/server/db'; // Import the db connection function

export default defineEventHandler(async (event) => {
  try {
    // Connect to the 'contact' collection
    const collection = await connectToDatabase('contact');

    // Retrieve all contact requests
    const contactRequests = await collection.find().toArray();

    // Return the retrieved contact requests
    return contactRequests;
  } catch (error) {
    console.error('Error fetching contact requests:', error);
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Internal server error' }));
  }
});
