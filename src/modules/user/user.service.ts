import { User } from "../user/user.model";
import { TUser } from "./user.interface";

const registerUser = async (payload: TUser) => {
  const user = await User.create(payload);

  return user;
};

export const AuthServices = {
  registerUser,
};
