import { StatusCodes } from "http-status-codes";
import config from "../../app/config";
import AppError from "../../app/errors/AppError";
import { createToken } from "../../app/utils/verifyJWT";
import { USER_ROLE } from "../user/user.constant";
import { User } from "../user/user.model";
import { TLoginUser, TRegisterUser } from "./auth.interface";

// const registerUser = async (payload: TRegisterUser) => {
//   //   if (!payload) {
//   //     throw new AppError(StatusCodes.BAD_REQUEST, "Payload is required");
//   //   }

//   const user = await User.isUserExistsByEmail(payload?.email);

//   if (user) {
//     throw new AppError(StatusCodes.NOT_FOUND, "This user is already exist!");
//   }

//   payload.role = USER_ROLE?.USER;

//   const newUser = await User.create(payload);

//   const jwtPayload = {
//     name: newUser.name,
//     email: newUser.email,
//     mobileNumber: newUser.mobileNumber,
//     role: newUser?.role,
//     profilePhoto: newUser.profilePhoto,
//   };

//   const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_secret as string,
//     config.jwt_access_expires_in as string
//   );

//   //   const refreshToken = createToken(
//   //     jwtPayload,
//   //     config.jwt_refresh_secret as string,
//   //     config.jwt_refresh_expires_in as string
//   //   );

//   return {
//     accessToken,
//     // refreshToken,
//   };
// };

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByEmail(payload?.email);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "This user is not found!");
  }

  const jwtPayload = {
    name: user.name,
    email: user.email,
    mobileNumber: user.mobileNumber,
    role: user.role,
    profilePhoto: user.profilePhoto,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  //   const refreshToken = createToken(
  //     jwtPayload,
  //     config.jwt_refresh_secret as string,
  //     config.jwt_refresh_expires_in as string
  //   );

  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUser,
};
