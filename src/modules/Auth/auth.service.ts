import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";

const loginUserIntoDB = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByEmail(payload?.email);

  return user;
};

export const AuthServices = {
  loginUserIntoDB,
};
