import axios from 'axios';

const API_URL = 'http://localhost:5000';

const register = async (email, password, role) => {
    return axios.post(`${API_URL}/register`, { email, password, role });
};

const login = async (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

const addProduct = async (token,formData) => {
    return axios.post(`${API_URL}/products`, formData, {
        // headers: {Authorization: token}
        headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization': token 
        }
    });
};


const getProducts = async () => {
    return axios.get(`${API_URL}/products`);
};


const getUser = async () => {
    return axios.get(`${API_URL}/user`);
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

const makePayment = async (token, amount, paymentMethod) => {
    return axios.post(`${API_URL}/payment`, { amount, paymentMethod }, {
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
    getUser
};
