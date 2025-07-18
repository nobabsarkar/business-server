/* eslint-disable no-useless-escape */
import { Schema, model } from "mongoose";
import { USER_ROLE } from "./user.constant";
import { TUser, UserModel } from "./user.interface";
import bcryptjs from "bcryptjs";

const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    profilePhoto: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: Object.keys(USER_ROLE),
      required: true,
    },
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  const existingUser = await User.findOne({ email });
  return existingUser;
};

// userSchema.statics.isUserExistsByEmail = async function (email: string) {
//   return await User.findOne({ email }).select("+password");
// };

// userSchema.statics.isPasswordMatched = async function (
//   plainTextPassword,
//   hashedPassword
// ) {
//   return await bcryptjs.compare(plainTextPassword, hashedPassword);
// };

export const User = model<TUser, UserModel>("User", userSchema);
