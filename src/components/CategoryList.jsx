import { useEffect, useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"


const CategoryList = () => {

    const [categories, setCategoryList] = useState([
        { id: 1, categoryName: 'Category 1', price: 500 },
        { id: 2, categoryName: 'Category 2', price: 600 },
        { id: 3, categoryName: 'Category 3', price: 700 },
        { id: 4, categoryName: 'Category 4', price: 800 },
        { id: 5, categoryName: 'Category 5', price: 900 },
        { id: 6, categoryName: 'Category 6', price: 1000 },
    ])
    return (
        <div>
            <h1> Category List</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>CategoryName</th>
                        <th>price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.categoryName}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link className="btn btn-info btn-sm" to="/Category/4"> view Details</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryList
