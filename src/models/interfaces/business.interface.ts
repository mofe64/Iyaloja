import { Types } from "mongoose";
import { IUser } from "./user.interface";

export interface IBusiness {
  _id: String;
  name: String;
  owner: Types.ObjectId;
  address?: IAddress;
  staffList: Types.ObjectId[];
}

export interface IAddress {
  street: String;
  city: String;
  state: String;
  zipCode: String;
  country: String;
}
