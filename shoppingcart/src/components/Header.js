import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginContext from './context/LoginContext'


const Header = () => {
    const { loginuser, setLoginuser, loginstatus, setLoginstatus, cart } = useContext(LoginContext);
    const navigate = useNavigate();

    function handleLogout() {
        const a = localStorage.getItem("loginname");
        setLoginuser(localStorage.removeItem("loginname"))
        setLoginstatus(localStorage.removeItem("loginstatus"));
        if (a === "admin") {
            navigate("/admin/");
        } else {
            navigate("/");
        }

    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to="/userdashboard">Navbar</Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            {loginstatus ?
                                                <>
                                                    <li className="nav-item">
                                                        <Link className="nav-link active" aria-current="page" to="/userdashboard">Home</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className='nav-link'>Welcome to {loginuser} </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/">Contact us</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/maincart">Cart: {cart.totalItems}</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                                                    </li>
                                                </>
                                                :
                                                <h2>{loginstatus} </h2>
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header