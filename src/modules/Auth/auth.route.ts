import express from "express";
import { AuthControllers } from "./auth.controller";

const router = express.Router();

router.post(
  "/login",
  //   validateRequest(AuthValidation.loginValidationSchema)
  AuthControllers.loginUser
);

export const LoginRoutes = router;
