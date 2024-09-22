import { z } from 'zod';

export const carPartSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string()
  .min(10, 'Phone number must be at least 10 digits')
  .max(14, 'Phone number must be at most 14 digits'),
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  year: z.number().min(1900, 'Year must be a valid number'),
  vin: z.string().length(17, 'VIN must be exactly 17 characters'),
  request: z.string().min(1, 'Request details are required'),
  createdAt: z.date().default(() => new Date())
});

export type CarPart = z.infer<typeof carPartSchema>;
