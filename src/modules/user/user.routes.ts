import express from "express";
import validateRequest from "../../app/middleweres/validateRequest";
import { UserValidation } from "./user.validation";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUserFromDB
);

export const AuthRoutes = router;
