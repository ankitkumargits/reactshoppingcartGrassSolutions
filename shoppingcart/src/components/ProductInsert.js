import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Adminleft from './Adminleft'

const ProductInsert = () => {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const bodyData = { name, desc, price};
        fetch("/api/addproduct", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyData)
        })
        .then((res)=> { return res.json();})
        .then((data) => {
            console.log(data);
            if(data._id !== ""){
                navigate("/admin/dashboard/");
            }
            navigate("/admin/productinsert/");
        })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <Adminleft />
                    <div className="col-md-9">
                        <h2 className='text-center'>Add new product here</h2>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="my-3">
                                <label htmlFor="name" className='form-label'>Product Name</label>
                                <input type="text" className='form-control' 
                                value={name}
                                onChange={((e)=> { setName(e.target.value);})}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="desc" className='form-label'>Product Description</label>
                                <input type="text" className='form-control' 
                                value={desc}
                                onChange={((e)=> { setDesc(e.target.value);})}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="price" className='form-label'>Product Price</label>
                                <input type="text" className='form-control' 
                                value={price}
                                onChange={((e)=> { setPrice(e.target.value);})}
                                />
                            </div>
                            <div className="my-3">
                                <button type="submit" className='btn btn-primary form-control'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInsert