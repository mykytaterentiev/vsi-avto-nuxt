import { z } from 'zod';

export const carPartSchema = z.object({
  name: z.string(),
  phone: z.string(),
  make: z.string(),
  model: z.string(),
  year: z.number(),
  vin: z.string(),
  request: z.string(),
  createdAt: z.date().default(() => new Date())
});

export type CarPart = z.infer<typeof carPartSchema>;
