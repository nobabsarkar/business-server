import { z } from "zod";
const userValidationSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  mobileNumber: z.string().min(1, "Mobile number is required"),
  role: z.enum(["ADMIN", "USER"]),
});

export const UserValidation = {
  userValidationSchema,
};
