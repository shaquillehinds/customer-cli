import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  firstName: { type: String, required: true, index: true },
  lastName: { type: String, required: true, index: true },
  email: { type: String, required: true, index: true },
  phone: { type: String, required: true, index: true },
});

export default mongoose.model("Customer", CustomerSchema);
