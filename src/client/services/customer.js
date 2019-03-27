import axios from 'axios';

export const fetchCustomerInfo = () => (
  axios('http://localhost:3000/customers')
);

export const postCustomerInfo = info => (
  axios.post('http://localhost:3000/customers', info)
);
