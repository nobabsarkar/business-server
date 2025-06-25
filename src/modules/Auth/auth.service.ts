import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";

const loginUserIntoDB = async (payload: TLoginUser) => {
  console.log(payload?.email);
  const user = await User.isUserExistsByEmail(payload?.email);

  console.log(user);

  return user;
};

export const AuthServices = {
  loginUserIntoDB,
};
