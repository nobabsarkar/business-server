import { Model, model, Schema } from "mongoose";
import { IUserModel, TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.statics.isUserExistsByEmail = async function (email: string) {
//   return await User.findOne({ email }).select("+password");
// };

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select("+password");
};

// userSchema.statics.isPasswordMatched = async function (
//   plainTextPassword,
//   hashedPassword
// ) {
//   return await bcryptjs.compare(plainTextPassword, hashedPassword);
// };

userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: number,
  jwtIssuedTimestamp: number
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = model<TUser, IUserModel>("User", userSchema);
