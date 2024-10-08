import React, { useEffect, useState } from 'react'
import Card from './Card'

const UserDashboard = () => {

    const [product, setProduct] = useState([]);
    const fetchall = () => {
        fetch("/frontendapi")
            .then((res) => { return res.json(); })
            .then((data) => {
                // console.log(data);
                setProduct(data);
            })
    }

    useEffect(() => {
        fetchall();
    }, [])

    return (
        <>
            <section>
                {product.map((result) => (
                    <div id="cardItem" key={result._id}>
                        <Card cardItems={result} />
                    </div>
                ))}
            </section>
        </>
    )
}

export default UserDashboard