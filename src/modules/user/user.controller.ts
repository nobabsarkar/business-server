import { StatusCodes } from "http-status-codes";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { UserServices } from "./user.service";

// const registerUser = catchAsync(async (req, res) => {
//   const result = await AuthServices.registerUser(req.body);

//   sendResponse(res, {
//     statusCode: StatusCodes.OK,
//     success: true,
//     message: "User registered in successfully!",
//     data: result,
//   });
// });

export const createUserFromDB = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "User registered successfully!",
    data: result,
  });
});

export const UserControllers = {
  createUserFromDB,
};
