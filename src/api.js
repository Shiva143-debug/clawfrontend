import axios from 'axios';

const API_URL = 'https://knowledgeable-tidy-eclipse.glitch.me';

const register = async (email, password, role) => {
    return axios.post(`${API_URL}/register`, { email, password, role });
};

const login = async (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

const addProduct = async (token,formData) => {
    return axios.post(`${API_URL}/products`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization': token 
        }
    });
};


const getProducts = async () => {
    return axios.get(`${API_URL}/products`);
};


const addProductToCart = async (token, productId, quantity) => {
    return axios.post(`${API_URL}/cart`, { productId, quantity }, {
        headers: { Authorization: token }
    });
};

const getCart = async (token) => {
    return axios.get(`${API_URL}/cart`, {
        headers: { Authorization: token }
    });
};

const placeOrder = async (token) => {
    return axios.post(`${API_URL}/order`, {}, {
        headers: { Authorization: token }
    });
};

const getOrders = async (token) => {
    return axios.get(`${API_URL}/orders`, {
        headers: { Authorization: token }
    });
};

const makePayment = async (token, totalAmount, paymentMethod) => {
    return axios.post(`${API_URL}/payment`, { totalAmount, paymentMethod }, {
        headers: { Authorization: token }
    });
};

const deleteCartItem = async (productId, token) => {

    return axios.delete(`${API_URL}/cart/${productId}`, {
        headers: { Authorization: token }
    });
};

const deleteProduct = async (productId, token) => {

    return axios.delete(`${API_URL}/products/${productId}`, {
        headers: { Authorization: token }
    });
};

const updateProduct = async (productId, productData, token) => {
    return await axios.put(`${API_URL}/products/${productId}`, productData, {
        headers: { Authorization: token }
    });
};
export {
    register,
    login,
    addProduct,
    getProducts,
    addProductToCart,
    getCart,
    placeOrder,
    getOrders,
    makePayment,
    deleteCartItem,
    deleteProduct,
    updateProduct
};
