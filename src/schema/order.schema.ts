import { z } from "zod";

export const createOrderSchema = z.object({
  customerId: z.number(),
});

export const updateOrderSchema = z.object({
  status: z.string(),
});
