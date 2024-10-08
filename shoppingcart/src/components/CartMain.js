import React, { useContext, useEffect, useState } from 'react'
import LoginContext from './context/LoginContext';

const CartMain = () => {
    const [cartItems, setCartItems] = useState([]);
    const { cart } = useContext(LoginContext);
    useEffect(() => {
        if (!cart.items) {
            return
        }
        fetch('/frontendapi/cartitems', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ids: Object.keys(cart.items) })
        }).then((res) => { return res.json(); })
            .then((data) => {
                // console.log(data);
                setCartItems(data);
            })
    }, [])

    return (
        <>
            <section id="mainCart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {cart !== "" ?
                                <div>
                                    <div>
                                        <h2 className='text-center' id='cart-title'>Your Cart</h2>
                                    </div>
                                    <table className="table table-hover">
                                        <thead className="table-dark">
                                            <tr className='text-center'>
                                                <th>S No.</th>
                                                <th>Product Name</th>
                                                <th>Product Description</th>
                                                <th>Product Price</th>
                                                <th>Product Quantity</th>
                                            </tr>
                                        </thead>
                                        {cartItems.map((results, sno) => (
                                            <tbody>
                                                <tr className="text-center" key={results._id}>
                                                    <td>{sno + 1}</td>
                                                    <td>{results.name}</td>
                                                    <td>{results.desc}</td>
                                                    <td>{results.price}</td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                                :
                                <div>
                                    <h2 className='text-center'>No Cart Items </h2>
                                </div>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartMain