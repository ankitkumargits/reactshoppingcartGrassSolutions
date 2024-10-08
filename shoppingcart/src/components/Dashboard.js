import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Adminleft from './Adminleft'
import Product from './Product';

const Dashboard = () => {
    const [product, setProduct] = useState([]);

    const fetchData = () => {
        fetch("/api/products")
            .then((res) => { return res.json(); })
            .then((data) => {
                // console.log(data);
                setProduct(data);
            })
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <Adminleft />
                    <div className="col-md-9">
                        <div>
                            <h2 className='text-center'>Product Management</h2>
                            <Link to={"/admin/productinsert/"}><button type="submit" className='btn btn-primary form-control'>Add here</button></Link>
                        </div>
                        <div className='my-3'>
                            <label htmlFor="fetchall" className='form-label'>See all product here</label>
                        </div>
                        <section>
                            <table className="table table-hover">
                                <thead className="table-dark">
                                    <tr className='text-center'>
                                        <th>Product Name</th>
                                        <th>Product Description</th>
                                        <th>Product Price</th>
                                        <th>Product Status</th>
                                        <th>Product Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((result) => (
                                            <Product key={result._id} products={result} />
                                        ))
                                    }
                                </tbody>
                            </table>

                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard