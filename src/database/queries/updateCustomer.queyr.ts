import CustomerModel from "../models/Customer.model";

export default async function updateCustomer(update: CustomerUpdateDto) {
  const updates: CustomerUpdate & { id?: string } = { ...update };
  delete updates.id;
  try {
    const data = await CustomerModel.findByIdAndUpdate(update.id, updates, {
      new: true,
    });
    console.info(data);
    return { data };
  } catch (error) {
    console.error(error);
    console.info(update);
    return { error };
  }
}
