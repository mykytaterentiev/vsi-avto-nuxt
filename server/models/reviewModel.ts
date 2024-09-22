import { z } from 'zod';

export const reviewSchema = z.object({
  name: z.string(),
  message: z.string().min(10, 'Message should be at least 10 characters'),
  rating: z.number().min(1).max(5),
  createdAt: z.date().optional(),
  isApproved: z.boolean().default(false),
});
