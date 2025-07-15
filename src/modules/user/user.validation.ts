// import { z } from "zod";

// const createUserValidationSchema = z.object({
//   name: z.string({ required_error: "Name is required" }),
//   email: z
//     .string({ required_error: "Email is required" })
//     .email({ message: "Invalid email" }),
//   password: z.string({ required_error: "Password is required" }),
//   profilePhoto: z.string().optional(),
//   role: z.enum(["ADMIN", "USER"]).default("USER"),
// });

// export const UserValidation = {
//   createUserValidationSchema,
// };

import { z } from "zod";

export const createUserValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email format" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be 6 character" }),
  profilePhoto: z.string().url().optional(),
  role: z.enum(["ADMIN", "USER"]).default("USER"),
});

export const UserValidation = {
  createUserValidationSchema,
};
