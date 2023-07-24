import CustomerModel from "../models/Customer.model";

interface ListCustomersProps {
  limit?: number;
  skip?: number;
}

export default async function listCustomers(props: ListCustomersProps) {
  const { limit = 20, skip = 0 } = props;
  try {
    const data = await CustomerModel.find({}, {}, { limit, skip }).exec();
    console.info(data);
    return { data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
