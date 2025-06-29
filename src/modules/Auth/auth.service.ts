// import { User } from "../user/user.model";
// import { TLoginUser } from "./auth.interface";

import { StatusCodes } from "http-status-codes";
import AppError from "../../app/errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import { createToken } from "../../app/utils/verifyJWT";
import config from "../../app/config";

// const loginUserIntoDB = async (payload: TLoginUser) => {
//   const user = await User.isUserExistsByEmail(payload?.email);

//   return user;
// };

// export const AuthServices = {
//   loginUserIntoDB,
// };

const loginUserIntoDB = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload?.email });
  // const user = await User.findOne(payload?.email);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "This user is not found!");
  }

  const jwtPayload = {
    email: user.email,
    mobileNumber: user.mobileNumber,
    role: user.role,
    // status: user.status,
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
  loginUserIntoDB,
};
