import React from 'react';

const ProductTbale = ({items}) => {



    return (
        <div>
            <h3>Total Products: {items.length}</h3>
            <h3>Product Table</h3>
            <table style={{marginRight:"auto",
                marginLeft:"auto",
            }}>
                <tr>
                    <th>Serial</th>
                    <th>Item name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                
            {
                items.map((item, index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.item}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                </tr>)
            }
            </table>
        </div>
    );
};

export default ProductTbale;