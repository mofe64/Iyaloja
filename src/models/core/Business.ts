import { IBusiness } from "../interfaces/business.interface";
import { model, Schema } from "mongoose";

const businessSchema: Schema = new Schema<IBusiness>({
  name: {
    type: String,
    required: [true, "Please provide the business name"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  staffList: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Business = model<IBusiness>("Business", businessSchema);
export default Business;
