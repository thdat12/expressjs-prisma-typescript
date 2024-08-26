import { z } from "zod";

export const createCustomerSchema = z.object({
  name: z.string(),
});

export const updateCustomerSchema = z.object({
  name: z.string(),
});
