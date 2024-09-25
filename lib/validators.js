import { z } from 'zod';
export const userNameSchema = z.object({
    userName: z
        .string()
        .min(3)
        .max(20)
        .regex(/^[a-zA-Z0-9_-]+$/, "username only contains letters and numbers and underscores"),
})


export const eventSchema = z.object({

})