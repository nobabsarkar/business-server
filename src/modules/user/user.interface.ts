import { Model } from "mongoose";

export interface TUser {
  // id: string;
  email: string;
  password: string;
  mobileNumber: string;
  role: "ADMIN" | "USER";
  // status: "in-progress" | "blocked";
  // isDeleted: boolean;
}

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser>;
}
