import React, { useState } from 'react'
import { Link } from "react-router-dom"


const ProductList = () => {


    const [products, setProducts] = useState([
        { id: 1, productName: 'Product 1', price: 500 },
        { id: 2, productName: 'Product 2', price: 600 },
        { id: 3, productName: 'Product 3', price: 700 },
        { id: 4, productName: 'Product 4', price: 800 },
        { id: 5, productName: 'Product 5', price: 900 },
        { id: 6, productName: 'Product 6', price: 1000 },
    ])


    return (
        <div>
            <h1>Product List </h1>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link className='btn btn-info' to="/products/4" ></Link>
                                </td>
                            </tr>

                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ProductList
