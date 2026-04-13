import React from 'react';
import ProductManagement from './ProductManagement';

const ProductForm = ({handleAddProducts}) => {
    const handleOnSubmit=(e)=>{
            e.preventDefault();
            const item=(e.target.item.value)
            const price=(e.target.price.value)
            const quantity=(e.target.quantity.value)

            const cartObj = {
                item,
                price,
                quantity
            }
            
            handleAddProducts(cartObj)
        }
    return (
        
        <div>
            <form action="" onSubmit={handleOnSubmit}>
                <input type="text" name='item' placeholder='Item'/>
                <br />
                <input type="text" name='price' placeholder='price'/>
                <br />
                <input type="text" placeholder='quantity' name='quantity' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ProductForm;