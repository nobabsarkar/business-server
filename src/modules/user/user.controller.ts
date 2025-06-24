import { StatusCodes } from "http-status-codes";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { UserServices } from "./user.service";

const userRegistration = catchAsync(async (req, res) => {
  console.log(req.body);

  const user = await UserServices.createUserIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User Created Successfully",
    data: user,
  });
});

export const UserControllers = {
  userRegistration,
};
