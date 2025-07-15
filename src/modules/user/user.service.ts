import { User } from "../user/user.model";
import { TUser } from "./user.interface";

const createUserIntoDB = async (payload: TUser) => {
  const user = await User.create(payload);

  return user;
};

export const UserServices = {
  createUserIntoDB,
};
