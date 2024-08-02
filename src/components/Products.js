import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, addProductToCart } from '../api';
import AddProductDialog from './AddProductDialog';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import "../App.css"
import Header from './Header';

const Products = () => {
    const [products, setProducts] = useState([]);
    // const [user,setUser] = useState(null);
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const role = location.state?.role || localStorage.getItem('role');
    

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response.data);
        };

        // const fetchUser = async()=>{
        //     const response = await getUser();
        //     setUser(response.data)
        // }
        fetchProducts();
        // fetchUser();
    }, []);

    const handleShowDialog = () => setShowDialog(true);
    const handleCloseDialog = () => {
        setShowDialog(false);
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response.data);
        };
        fetchProducts();
    }



    const handleAddToCart = async (productId) => {
        const token = localStorage.getItem('token');
        await addProductToCart(token, productId, 1);
        alert('Product added to cart');
        navigate("/cart" )
    };

    return (
        <div>
            <Header />
            {/* <h2>Products</h2> */}
            <div style={{display:"flex",flexDirection:"column"}}>

            {role === "admin" &&
            <button onClick={handleShowDialog} style={{float:"right"}} className='mb-5'>Add New Product</button>
            }

            <ul className='list-of-items'>
                {products.map((product) => (
                    <li key={product._id}>
                       <div className='product'>
                            <img src={product.image} alt="image" style={{ width: '300px', height: '400px',marginBottom:"10px" }} />
                            <div>
                        
                        <h5>{product.name}</h5>
                        <h6>₹{product.price}</h6>
                        <p>{product.description}</p>
                        </div>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Button onClick={() => handleAddToCart(product._id)}>Add to Cart</Button>
                        </div>
                        </div>
                    </li>
                ))}
            </ul>

            </div>

            <Modal show={showDialog} onHide={handleCloseDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProductDialog close={handleCloseDialog} />
                </Modal.Body>
            </Modal>
       
        </div>
    );
};

export default Products;
