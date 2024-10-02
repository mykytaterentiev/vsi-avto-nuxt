import { z } from 'zod';

export const carPartSchema = z.object({
  name: z.string().min(1, 'Потрібно вказати ім\'я'),
  phone: z.string()
    .min(10, 'Телефон повинен містити не менше 10 цифр')
    .max(14, 'Телефон повинен містити не більше 14 цифр'),
  make: z.string().min(1, 'Марка автомобіля обов\'язкова'),
  model: z.string().min(1, 'Модель автомобіля обов\'язкова'),
  year: z.number().min(1900, 'Рік випуску повинен бути не раніше 1900 року'),
  vin: z.string().length(17, 'VIN-код повинен складатися з 17 символів'),
  request: z.string().min(1, 'Потрібно вказати запит'),
  createdAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Невірний формат дати",
  })
});

export type CarPart = z.infer<typeof carPartSchema>;
