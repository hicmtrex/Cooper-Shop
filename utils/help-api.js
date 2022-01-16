import axios from 'axios';

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/products');
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getTopProducts = async () => {
  try {
    const { data } = await axios.get(
      'http://localhost:3000/api/products/top-products'
    );
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/products/${id}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
