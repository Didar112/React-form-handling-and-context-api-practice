import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTbale from './ProductTbale';


const ProductManagement = () => {
    const [items, setItems] = useState([])
    const handleAddProducts=(newProduct)=>{
        setItems([...items, newProduct])
    }
    return (
        <div>
            <ProductForm handleAddProducts={handleAddProducts}></ProductForm>
            <ProductTbale items={items}></ProductTbale>
        </div>
    );
};

export default ProductManagement;