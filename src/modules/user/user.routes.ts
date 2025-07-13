import express from "express";
import { USER_ROLE } from "./user.constant";
import { UserControllers } from "./user.controller";
import validateRequest from "../../app/middleweres/validateRequest";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.userRegister
);

export const AuthRoutes = router;
