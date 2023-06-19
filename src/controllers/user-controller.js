const { StatusCodes } = require("http-status-codes");
const { UserService } = require("../services");
const SuccessResponse = require("../utils/common/success-response");
const ErrorResponse = require("../utils/common/error-response");

async function getAllUsers(req, res) {
  try {
    const response = await UserService.GetAllUser();
    SuccessResponse.data = response;
    // return res.status(StatusCodes.OK).json(SuccessResponse);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}
async function getUser(req, res) {
  try {
    const id = req.params.id;
    const response = await UserService.GetUser(id);
    SuccessResponse.data = response;
    // res.status(StatusCodes.OK).json(SuccessResponse);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  getAllUsers,
  getUser,
};
