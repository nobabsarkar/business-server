import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../app/middleweres/validateRequest";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/register",
  //   validateRequest(UserValidation.userValidationSchema),
  UserControllers.userRegistration
);

export const UserRoutes = router;
