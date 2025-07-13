import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface TUser {
  id?: string;
  email: string;
  password: string;
  mobileNumber: string;
  role: "ADMIN" | "USER";
}

export type TRegisterUser = {
  name: string;
  email: string;
  mobileNumber: string;
  password: string;
  role: keyof typeof USER_ROLE;
};

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser>;
}
