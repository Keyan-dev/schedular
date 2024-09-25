import { z } from 'zod';
export const userNameSchema = z.object({
    userName: z
        .string()
        .min(3,"username has minimum of 3 letters")
        .max(20,"username has maximum of 20 letters")
        .regex(/^[a-zA-Z0-9_-]+$/, "username only contains letters and numbers and underscores"),
})
export type userFormType= z.infer<typeof userNameSchema>;

export const eventSchema = z.object({
    title:z.string().min(1,"Title is required").max(100,"Title must be 100 character or less"),
    description:z.string().min(1,"Description is required").max(500,"Description must be 500 character or less"),
    duration:z.number().int().positive("Duration must be a positive number"),
    isPrivate:z.boolean()
})
export type eventSchemaType=z.infer<typeof eventSchema>