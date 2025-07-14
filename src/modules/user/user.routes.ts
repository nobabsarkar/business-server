import express from "express";
import { AuthControllers } from "./user.controller";

const router = express.Router();

router.post(
  "/register",
  // validateRequest(AuthValidation.registerValidationSchema),
  AuthControllers.registerUser
);

export const AuthRoutes = router;
