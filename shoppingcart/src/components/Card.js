import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import LoginContext from './context/LoginContext';

const Card = (props) => {
    const { cardItems } = props;

    const { cart, setCart } = useContext(LoginContext);

    function handleCart(e, cardItems) {
        // console.log(cardItems)
        let _cart = { ...cart };

        if (!_cart.items) {
            _cart.items = {};
        }

        if (_cart.items[cardItems._id]) {
            _cart.items[cardItems._id] += 1;
        } else {
            _cart.items[cardItems._id] = 1;
        }

        if(!_cart.totalItems){
            _cart.totalItems = 1;
        }else {
            _cart.totalItems += 1;
        }
        setCart(_cart)
        // console.log(_cart);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="logo192.png" style={{ width: "100px" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{cardItems.name}</h5>
                                <p className="card-text">{cardItems.desc}</p>
                                <p className="card-text">{cardItems.price}</p>
                                <Link to={"/"}><button className="btn btn-primary me-2">View Details</button></Link>
                                <button className="btn btn-danger" onClick={(e) => { handleCart(e, cardItems) }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card