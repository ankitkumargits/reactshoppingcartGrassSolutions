import React from 'react'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { products } = props;
    return (
        <>
            <tr className="text-center">
                <td>{products.name}</td>
                <td>{products.desc}</td>
                <td>{products.price}</td>
                <td>{products.status}</td>
                <td>
                    <Link to={`/admin/productupdate/${products._id}`}>
                        <button className='btn btn-primary'>Update</button>
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default Product