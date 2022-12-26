import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import User from "./pages/UserPage";

const getLocalItem = () => {
	let user = localStorage.getItem('user');

	if (user) {
		return JSON.parse(localStorage.getItem('user') || '{}');
	} else {
		return ['', '', ''];
	}
}

function App() {
	const [defaultAccount, setDefaultAccount] = useState(null);
	const user: string[] = getLocalItem();

	window.onload = (event) => {
		isConnected();
	};
			 
	async function isConnected() {
		const accounts = await window.ethereum.request({method: 'eth_accounts'});       
		if (accounts.length) {
			setDefaultAccount(accounts[0])
			console.log(`You're connected to: ${accounts[0]}`);
		} else {
			console.log("Metamask is not connected");
		}
	}

	const connectWalletHandler = () => {
		if (window.ethereum) {
			// if metamask exists
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then((result: any) => {
				accountChangedHandler(result[0]);
			})
		} else {
			console.log('Please, install MetaMask');
		}
	}

	const accountChangedHandler = (newAccount: any) => {
		setDefaultAccount(newAccount);
	}

  return (
    <div className="App">
		{/* <Router>
			<Routes>
				<Route path="/unistory" element={ <Home account={ defaultAccount } connect={ connectWalletHandler } user={ user } /> } />
				<Route path="/user" element={ <User account={ defaultAccount } connect={ connectWalletHandler } user={ user } /> } />
			</Routes>
      </Router> */}
		<h1>ih</h1>
    </div>
  );
}

export default App;