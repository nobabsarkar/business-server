// import { TErrorSources, TGenericErrorResponse } from "../../interface/error";

import { TGenericErrorResponse } from "../../interface/error";

// const handleDuplicateError = (err: any): TGenericErrorResponse => {
//   const match = err.message.match(/"([^"]+)"/)[1];

//   const errorSources: TErrorSources = [
//     {
//       path: "",
//       message: `${match} is already exits`,
//     },
//   ];

//   const statusCode = 400;

//   return {
//     statusCode,
//     message: "Invalid ID",
//     errorSources,
//   };
// };

// export default handleDuplicateError;

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const duplicateField = Object.keys(err?.keyValue || {})[0];
  const value = err?.keyValue?.[duplicateField];

  const errorMessage = `${value} is already exists`;

  return {
    statusCode: 400,
    message: "Invalid ID",
    errorSources: [
      {
        path: duplicateField,
        message: errorMessage,
      },
    ],
  };
};

export default handleDuplicateError;
