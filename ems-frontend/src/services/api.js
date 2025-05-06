import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async (searchTerm = '') => {
  try {
    const isUUID = /^[\da-f]{8}-([\da-f]{4}-){3}[\da-f]{12}$/i.test(searchTerm);

    if (isUUID) {
      const response = await api.get(`/products/${searchTerm}`);
      return response.data.data; 
    }

    const response = await api.get(`/products${searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : ''}`);
    
    if (response.data.status === 'SUCCESS') {
      return response.data.data; 
    } else {
      console.error(response.data.message); 
      return [];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Function to get product by ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    if (response.data.status === 'SUCCESS') {
      return response.data.data; 
    } else {
      console.error(response.data.message); 
      return null;
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
