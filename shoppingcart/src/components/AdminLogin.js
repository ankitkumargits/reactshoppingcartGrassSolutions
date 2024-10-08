import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginContext from './context/LoginContext';

const AdminLogin = () => {

    const { setLoginuser, setLoginstatus } = useContext(LoginContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(username, password);
        const bodyData = { username, password };
        fetch('/api/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
        })
            .then((res) => { return res.json(); })
            .then((data) => {
                // console.log(data);
                if (data.username) {
                    localStorage.setItem("loginname", data.username)
                    setLoginuser(localStorage.getItem("loginname"));
                    localStorage.setItem("loginstatus", "1");
                    setLoginstatus(localStorage.getItem("loginstatus"));
                    navigate("/admin/dashboard");
                } else {
                    setMessage("wrong credentials");
                    navigate("/admin/");
                }
            })
    }
    return (
        <>
            <section id="adLogin">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <section>
                                <div>
                                    <h2 className='text-center'>Admin Panel</h2>
                                </div>
                                <div>
                                    <h4 className='text-center'>{message} </h4>
                                </div>
                                <form method='post' onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username"
                                            value={username}
                                            onChange={(e) => { setUsername(e.target.value) }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            value={password}
                                            onChange={(e) => { setPassword(e.target.value) }}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary form-control mb-3">Submit</button>
                                </form>
                            </section>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminLogin;