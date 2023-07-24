import CustomerModel from "../models/Customer.model";

export default async function findCustomer(name: string) {
  try {
    const search = new RegExp(name, "i");
    const data = await CustomerModel.find({
      $or: [{ firstName: search }, { lastName: search }],
    }).exec();
    console.info(data);
    console.info(`${data.length} matches`);
    return { data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
