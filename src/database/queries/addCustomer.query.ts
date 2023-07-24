import CustomerModel from "../models/Customer.model";

export default async function addCustomer(customer: Customer) {
  try {
    const data = await CustomerModel.create(customer);
    console.log(data);
    return { data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
