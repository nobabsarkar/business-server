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

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await this.findOne({ email }).select("+password");
};

export const User = model<TUser, IUserModel>("User", userSchema);
