/* eslint-disable no-unused-vars */
import { HydratedDocument, Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export type TUser = {
  name: string;
  role: keyof typeof USER_ROLE;
  email: string;
  password: string;
  profilePhoto?: string;
};

export interface UserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser | null>;
}
