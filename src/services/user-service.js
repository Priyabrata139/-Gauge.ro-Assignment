const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const userRepository = new UserRepository();

async function GetAllUser() {
  try {
    const Useres = await userRepository.getAll();
    return Useres;
  } catch (error) {
    throw new AppError(
      "Something went wrong while festching the users data ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function GetUser(id) {
  try {
    const User = await userRepository.get(id);
    return User;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The user you requested is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Something went wrong while festching the user data ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  GetAllUser,
  GetUser,
};
