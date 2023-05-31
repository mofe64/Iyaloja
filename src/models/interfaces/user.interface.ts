export interface IUser {
  _id: String;
  username?: String;
  firstname: String;
  lastname: String;
  password: String;
  email: String;
  userType: UserType;
  phoneNumber: String;
  bankDetails?: IBankDetails;
  emailVerified: Boolean;
}

interface IBankDetails {
  bankName: String;
  accountName: String;
  accountNumber: String;
}

export enum UserType {
  BUSINESSOWNER = "BusinessOwner",
  BUSINESSCUSTOMER = "BusinessCustomer",
  BUSINESSSTAFF = "BusinessStaff",
  ADMIN = "Admin",
}
