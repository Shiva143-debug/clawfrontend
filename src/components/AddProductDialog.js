import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { addProduct } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AddProductDialog = ({ close }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stock,setStock]= useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('stock', stock);
        formData.append('image', image);

        const token = localStorage.getItem('token');

        try {
            await addProduct(token,formData);
            alert('Product added successfully');
            close(); // Close the dialog
        } catch (err) {
            setError('Failed to add product');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formProductDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formProductStock">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formProductImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                />
            </Form.Group>
            {error && <p className="text-danger">{error}</p>}
            <Button variant="primary" type="submit" className='mt-3'>
                Add Product
            </Button>
        </Form>
    );
};

export default AddProductDialog;
