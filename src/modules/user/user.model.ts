import { Model, model, Schema } from "mongoose";
import { IUserModel, TUser } from "./user.interface";

// type UserModel = Model<TUser> & {
//   isUserExistsByEmail(email: string): Promise<TUser | null>;
// };

const userSchema = new Schema<TUser>(
  {
    // id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
    },
    // status: { type: String, enum: USER_STATUS, default: "in-progress" },
    // isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// userSchema.statics.isUserExistsByEmail = async function (email: string) {
//   return await this.findOne({ email }).select("+password");
// };

userSchema.statics.isUserExistsByEmail = async function (
  email: string
): Promise<TUser | null> {
  return await this.findOne({ email }).lean();
};

export const User = model<TUser, IUserModel>("User", userSchema);
