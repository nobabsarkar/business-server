/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import AppError from "../errors/AppError";
import { USER_ROLE } from "../../modules/user/user.constant";

export const createToken = (
  jwtPayload: {
    email: string;
    mobileNumber?: string;
    role: keyof typeof USER_ROLE;
    // status: keyof typeof USER_STATUS;
  },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

export const verifyToken = (
  token: string,
  secret: string
): JwtPayload | Error => {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error: any) {
    throw new AppError(401, "You are not authorized!");
  }
};
