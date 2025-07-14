import express from "express";
import { AuthRoutes } from "../../modules/user/user.routes";
import { LoginRoutes } from "../../modules/Auth/auth.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/auth",
    route: LoginRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
