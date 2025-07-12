import { Model } from "mongoose";

export interface TUser {
  id?: string;
  email: string;
  password: string;
  mobileNumber: string;
  role: "ADMIN" | "USER";
}

// export interface IUserModel extends Model<TUser> {
//   isUserExistsByEmail(email: string): Promise<TUser>;
// }

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(id: string): Promise<TUser>;

  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;

  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
