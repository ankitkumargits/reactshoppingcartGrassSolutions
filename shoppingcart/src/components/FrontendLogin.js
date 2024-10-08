import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginContext from './context/LoginContext';

const FrontendLogin = () => {

    const { loginuser, setLoginuser, loginstatus, setLoginstatus } = useContext(LoginContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const bodyData = { username, password };
        fetch("/frontendapi/frontendlogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
        })
            .then((res) => { return res.json(); })
            .then((data) => {
                // console.log(data);
                if (data.username) {
                    localStorage.setItem("loginname", data.username);

                    setLoginuser(localStorage.getItem("loginname"));

                    localStorage.setItem("loginstatus", "1");
                    setLoginstatus(localStorage.getItem("loginstatus"));
                        navigate("/userdashboard");
                } else {
                    setMessage("failed to login...");
                }
            })
    }

    return (
        <>
            <section id='userLogin'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <section>
                                <div>
                                    <h2 className='text-center'>Login</h2>
                                </div>
                                <div className="my-3">
                                    <h3 className='text-center'> {message} </h3>
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
                                <div className="my-2">
                                    <Link to={"/frontendreg"}>You don't have an account.? go here </Link>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FrontendLogin