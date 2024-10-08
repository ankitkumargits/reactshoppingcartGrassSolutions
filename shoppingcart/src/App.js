import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import LoginContext from "./components/context/LoginContext";
import Dashboard from "./components/Dashboard";
import ProductInsert from "./components/ProductInsert";
import ProductUpdate from "./components/ProductUpdate";
import FrontendLogin from "./components/FrontendLogin";
import FrontendReg from "./components/FrontendReg";
import UserDashboard from "./components/UserDashboard";
import CartMain from "./components/CartMain";


const App = () => {
	const [loginuser, setLoginuser] = useState(localStorage.getItem("loginname"));
	const [loginstatus, setLoginstatus] = useState(localStorage.getItem("loginstatus"));
	
	const [cart, setCart] = useState("");

	useEffect(()=> {
		const cart = localStorage.getItem("cart");
		setCart(JSON.parse(cart));
	}, []); 

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart])
	
	return (
		<>
			<Router>
				<LoginContext.Provider value={{ loginuser, setLoginuser, loginstatus, setLoginstatus, cart, setCart}}>
					<Header />
					<Routes>
						{/* Frontend User All Routes */}
						<Route path="/" element={<FrontendLogin />} />
						<Route path="/frontendreg" element={<FrontendReg />} />
						<Route path="/userdashboard" element={<UserDashboard />} />
						<Route path="/maincart" element={<CartMain />} />
						{/* Admin All Routes */}
						<Route path="/admin/" element={<AdminLogin />} />
						<Route path="/admin/dashboard" element={<Dashboard />} />
						<Route path="/admin/productinsert" element={<ProductInsert />} />
						<Route path="/admin/productupdate/:id" element={<ProductUpdate />} />
					</Routes>
					<Footer />
				</LoginContext.Provider>
			</Router>
		</>
	);
};

export default App;
