import { Model } from "mongoose";

export interface TUser {
  id?: string;
  email: string;
  password: string;
  mobileNumber: string;
  role: "ADMIN" | "USER";
}

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser>;
}
