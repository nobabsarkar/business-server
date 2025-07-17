import { StatusCodes } from "http-status-codes";
import AppError from "../../app/errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import { createToken } from "../../app/utils/verifyJWT";
import config from "../../app/config";
import { TUser } from "../user/user.interface";

const loginUser = async (payload: TLoginUser) => {
  // const user = await User.findOne(payload?.email);

  const user = await User.isUserExistsByEmail(payload?.email);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "This user is not found!");
  }

  // if (!(await User.isPasswordMatched(payload?.password, user?.password)))
  //   throw new AppError(StatusCodes.FORBIDDEN, "Password do not matched");

  const jwtPayload = {
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUser,
};
