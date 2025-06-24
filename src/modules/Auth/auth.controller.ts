import { StatusCodes } from "http-status-codes";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUserFromDB = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User login successfully!",
    data: result,
  });
});

export const AuthControllers = {
  loginUserFromDB,
};
