import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";

const loginUserIntoDB = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByEmail(payload?.email);

  if (!user) {
    return "null user";
  }

  return user;
};

export const AuthServices = {
  loginUserIntoDB,
};
