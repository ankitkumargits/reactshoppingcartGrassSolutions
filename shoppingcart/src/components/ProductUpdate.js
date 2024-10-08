import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Adminleft from './Adminleft'

const ProductUpdate = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/${id}`)
            .then((res) => { return res.json(); })
            .then((data) => {
                // console.log(data);
                setName(data.name);
                setDesc(data.desc);
                setPrice(data.price);
                setStatus(data.status);
            });
    }, [])

    function handleSubmit(e){
        e.preventDefault();
        const formData = { name, desc, price, status };
        fetch(`/api/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then((res) => { return res.json(); })
        .then((data) => {
            // console.log(data);
            if(data.message === "successfully updated") {
                navigate('/admin/dashboard');
            }else {
                navigate(`/admin/productupdate/${id}`);
            }
        })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <Adminleft />
                    <div className="col-md-9">
                        <div>
                            <h2 className='text-center'>Product Update here</h2>
                            <Link to={"/admin/productinsert/"}><button type="submit" className='btn btn-primary form-control'>Add here</button></Link>
                        </div>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className='my-3'>
                                <label htmlFor="name" className='form-label'>Product Name</label>
                                <input type="text" className="form-control" value={name}
                                    onChange={(e) => { setName(e.target.value); }}
                                />
                            </div>
                            <div className='my-3'>
                                <label htmlFor="name" className='form-label'>Product Desc</label>
                                <input type="text" className="form-control"
                                    value={desc}
                                    onChange={(e) => { setDesc(e.target.value); }}
                                />
                            </div>
                            <div className='my-3'>
                                <label htmlFor="name" className='form-label'>Product Price</label>
                                <input type="text" className="form-control"
                                    value={price}
                                    onChange={(e) => { setPrice(e.target.value); }}
                                />
                            </div>
                            <div className='my-3'>
                                <label htmlFor="name" className='form-label'>Product Status</label>
                                <select value={status} className="form-select"
                                    onChange={(e) => { setStatus(e.target.value) }}>
                                    <option value="publish" >Publish</option>
                                    <option value="unpublish">Unpublish</option>
                                </select>
                            </div>
                            <div className="my-3">
                                <button type="submit" className='btn btn-primary form-control'>Click Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductUpdate