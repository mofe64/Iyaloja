import { model, Schema } from "mongoose";
import { IUser, UserType } from "../interfaces/user.interface";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema: Schema = new Schema<IUser>({
  username: {
    type: String,
  },
  firstname: {
    type: String,
    minLength: [3, "Firstname cannot be less than 3 characters"],
    required: [true, "Please provide the firstname value"],
  },
  lastname: {
    type: String,
    minlength: [3, "lastname cannot be less than 3 characters"],
    required: [true, "Please provide the lastname value"],
  },
  password: {
    type: String,
    minlength: [8, "Password must cannot be less than 8 characters"],
    required: [true, "Please provide a password value"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    validate: [validator.isEmail, "Email provided is not valid"],
  },
  phoneNumber: {
    type: String,
  },
  bankDetails: {
    accountName: {
      type: String,
    },
    accountNumber: {
      type: String,
    },
    bankName: {
      type: String,
    },
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  userType: {
    type: String,
    enum: [
      UserType.ADMIN,
      UserType.BUSINESSCUSTOMER,
      UserType.BUSINESSOWNER,
      UserType.BUSINESSSTAFF,
    ],
    required: [true, "User must have a provided user type"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = model<IUser>("User", userSchema);
export default User;
