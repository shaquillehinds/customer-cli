interface Customer {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

interface CustomerUpdate {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

interface CustomerUpdateDto extends CustomerUpdate {
  id: string;
}
