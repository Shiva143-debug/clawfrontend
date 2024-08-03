// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getProducts, addProductToCart,deleteProduct } from '../api';
// import AddProductDialog from './AddProductDialog';
// import { Button, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useLocation } from 'react-router-dom';
// import { RiDeleteBinLine } from "react-icons/ri";
// import { GrUpdate } from "react-icons/gr";
// import "../App.css"
// import Header from './Header';

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     // const [user,setUser] = useState(null);
//     const [showDialog, setShowDialog] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const role = location.state?.role || localStorage.getItem('role');
//     console.log(role)

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const response = await getProducts();
//             setProducts(response.data);
//         };

//         fetchProducts();
//     }, []);

//     const handleShowDialog = () => setShowDialog(true);

//     const handleCloseDialog = () => {
//         setShowDialog(false);
//         const fetchProducts = async () => {
//             const response = await getProducts();
//             setProducts(response.data);
//         };
//         fetchProducts();
//     }



//     const handleAddToCart = async (productId) => {
//         const token = localStorage.getItem('token');
//         await addProductToCart(token, productId, 1);
//         alert('Product added to cart');
//         // navigate("/cart" )
//     };


//     const onRemoveItem= async (productId)=>{
//         const token = localStorage.getItem('token');
//         try {
//             const response = await deleteProduct(productId, token);
//             console.log(response.message);
//             alert('Product removed successfully');
//             const fetchProducts = async () => {
//                 const token = localStorage.getItem('token');
//                 try {
//                     const response = await getProducts(token);
//                     setProducts(response.data);
//                 } catch (error) {
//                     console.error('Failed to fetch products:', error);
//                 }
//             };
//             fetchProducts();
//         } catch (error) {
//             console.error('Failed to remove product:', error);
//             alert('Failed to remove product');
//         }
//     }

//       const onUpdateItem = ()=>{
//          setShowDialog(true)
//       }

//     return (
//         <div>
//             <Header />
//             {/* <h2>Products</h2> */}
//             <div style={{display:"flex",flexDirection:"column"}}>

//             {role === "admin" &&
//             <button onClick={handleShowDialog} style={{float:"right"}} className='mb-5'>Add New Product</button>
//             }

//             <ul className='list-of-items'>
//                 {products.map((product) => (
//                     <li key={product._id}>
//                        <div className='product'>
//                             <img src={product.image} alt="image" style={{ width: '300px', height: '400px',marginBottom:"10px" }} />
//                             <div>
                        
//                         <h5>{product.name}</h5>
//                         <h6>₹{product.price}</h6>
//                         <p>{product.description}</p>
//                         </div>
//                         <div style={{display:"flex"}}>
//                         <Button onClick={() => handleAddToCart(product._id)}>Add to Cart</Button>
//                         {role === "admin" &&
//                         <>
//                         <RiDeleteBinLine onClick={() => onRemoveItem(product._id)}  size={40} style={{marginTop:"10px"}}/>
//                         <GrUpdate onClick={() => onUpdateItem(product._id)}  size={40} style={{marginTop:"10px"}}/>
//                         </>
// }
//                         </div>
//                         </div>
//                     </li>
//                 ))}
//             </ul>

//             </div>

//             <Modal show={showDialog} onHide={handleCloseDialog}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add Product</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <AddProductDialog close={handleCloseDialog} />
//                 </Modal.Body>
//             </Modal>
       
//         </div>
//     );
// };

// export default Products;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, addProductToCart, deleteProduct } from '../api';
import AddProductDialog from './AddProductDialog';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import "../App.css";
import Header from './Header';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMode, setDialogMode] = useState('add');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const role = location.state?.role || localStorage.getItem('role');
    console.log(role);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    const handleShowAddDialog = () => {
        setDialogMode('add');
        setSelectedProduct(null);
        setShowDialog(true);
    };

    const handleShowUpdateDialog = (product) => {
        setDialogMode('update');
        setSelectedProduct(product);
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response.data);
        };
        fetchProducts();
    };

    const handleAddToCart = async (productId) => {
        const token = localStorage.getItem('token');
        await addProductToCart(token, productId, 1);
        alert('Product added to cart');
    };

    const onRemoveItem = async (productId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await deleteProduct(productId, token);
            console.log(response.message);
            alert('Product removed successfully');
            const fetchProducts = async () => {
                const token = localStorage.getItem('token');
                try {
                    const response = await getProducts(token);
                    setProducts(response.data);
                } catch (error) {
                    console.error('Failed to fetch products:', error);
                }
            };
            fetchProducts();
        } catch (error) {
            console.error('Failed to remove product:', error);
            alert('Failed to remove product');
        }
    };

    return (
        <div>
            <Header />
            <div style={{ display: "flex", flexDirection: "column" }}>
                {role === "admin" &&
                    <button onClick={handleShowAddDialog} style={{ float: "right" }} className='mb-5'>Add New Product</button>
                }

                <ul className='list-of-items'>
                    {products.map((product) => (
                        <li key={product._id}>
                            <div className='product'>
                                <img src={product.image} alt="image" style={{ width: '300px', height: '400px', marginBottom: "10px" }} />
                                <div>
                                    <h5>{product.name}</h5>
                                    <h6>₹{product.price}</h6>
                                    <p>{product.description}</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Button onClick={() => handleAddToCart(product._id)}>Add to Cart</Button>
                                    {role === "admin" &&
                                        <>
                                            <RiDeleteBinLine onClick={() => onRemoveItem(product._id)} size={40} style={{ marginTop: "10px" }} />
                                            <GrUpdate onClick={() => handleShowUpdateDialog(product)} size={40} style={{ marginTop: "10px" }} />
                                        </>
                                    }
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Modal show={showDialog} onHide={handleCloseDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>{dialogMode === 'add' ? 'Add Product' : 'Update Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProductDialog close={handleCloseDialog} product={selectedProduct} mode={dialogMode} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Products;
