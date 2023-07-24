import CustomerModel from "../models/Customer.model";

export default async function deleteCustomer(id: string) {
  try {
    const data = await CustomerModel.findByIdAndDelete(id).exec();
    console.info(data);
    return { data: data?.toObject() || {} };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
