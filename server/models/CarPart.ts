import { z } from 'zod';

export const carPartSchema = z.object({
  name: z.string().min(1, 'Необходимо указать имя'),
  phone: z.string()
  .min(10, 'Телефон должен быть не менее 10 цифр')
  .max(14, 'Телефон должен быть не более 14 цифр'),
  make: z.string().min(1, 'Марка автомобиля обязательна'),
  model: z.string().min(1, 'Модель автомобиля обязательна'),
  year: z.number().min(1900, 'Год выпуска должен быть не ранее 1900 года'),
  vin: z.string().length(17, 'Винкод должен состоять из 17 символов'),
  request: z.string().min(1, 'Необходимо указать запрос'),
  createdAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Неверный формат даты",
  })
});

export type CarPart = z.infer<typeof carPartSchema>;
