/* eslint-disable no-useless-escape */
import { Schema, model } from "mongoose";
import { USER_ROLE } from "./user.constant";
import { IUserModel, TUser } from "./user.interface";
import bcryptjs from "bcryptjs";

const userSchema = new Schema<TUser, IUserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.keys(USER_ROLE),
      required: true,
    },
    email: {
      type: String,
      required: true,
      //validate email
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select("+password");
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcryptjs.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, IUserModel>("User", userSchema);
