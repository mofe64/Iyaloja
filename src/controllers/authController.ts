import { Request, Response, NextFunction } from "express";
import catchAsync from "../util/helpers/catchAsync";
import { IAdminRegistrationRequest } from "./authController.interface";
import User from "../models/core/User";
import { UserType } from "../models/interfaces/user.interface";
import AppError from "../util/helpers/appError";

export const adminRegister = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("admin register call ...");
    const adminRegRequest: IAdminRegistrationRequest = req.body;
    if (adminRegRequest.password !== adminRegRequest.confirmPassword) {
      return next(new AppError("Passwords do not match", 404));
    }
    const admin = await User.create({
      username: adminRegRequest.username,
      firstname: adminRegRequest.firstname,
      lastname: adminRegRequest.lastname,
      email: adminRegRequest.email,
      password: adminRegRequest.password,
      userType: UserType.ADMIN,
    });
    return res.status(201).json({
      success: true,
      timeStamp: new Date(),
    });
  }
);

export const businessOwnerRegister = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {}
);
