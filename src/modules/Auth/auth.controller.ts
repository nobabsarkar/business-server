import { StatusCodes } from "http-status-codes";
import sendResponse from "../../app/utils/sendResponse";
import config from "../../app/config";
import catchAsync from "../../app/utils/catchAsync";
import { AuthServices } from "./auth.service";

const registerUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { accessToken } = result;

  res.cookie("refreshToken", {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User registered in successfully!",
    data: {
      accessToken,
    },
  });
});

export const AuthControllers = {
  registerUser,
};
