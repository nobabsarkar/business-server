import { StatusCodes } from "http-status-codes";
import config from "../../app/config";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { AuthServices } from "./user.service";

const registerUser = catchAsync(async (req, res) => {
  const result = await AuthServices.registerUser(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User registered in successfully!",
    data: result,
  });
});

export const AuthControllers = {
  registerUser,
};
