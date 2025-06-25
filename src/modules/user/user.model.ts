import { Model, model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import { UserStatus } from "./user.constant";

type UserModel = Model<TUser> & {
  isUserExistsByEmail(email: string): Promise<TUser | null>;
};

const userSchema = new Schema<TUser>(
  {
    // id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["admin", "user"],
    },
    status: { type: String, enum: UserStatus, default: "in-progress" },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await this.findOne({ email }).select("+password");
};

export const User = model<TUser, UserModel>("User", userSchema);
