import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import User from "./pages/UserPage";

// to get list of users from local-storage
const getLocalItems = () => {
	let list = localStorage.getItem('lists');

	if (list) {
		return JSON.parse(localStorage.getItem('lists') || '{}');
	} else {
		return [];
	}
}

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
	const items: any = getLocalItems();
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
		<Router>
			<Routes>
				<Route path="/" element={ <Home account={ defaultAccount } connect={ connectWalletHandler } user={ user } items={ items } /> } />
				<Route path="/user" element={ <User account={ defaultAccount } connect={ connectWalletHandler } user={ user } items={ items } /> } />
			</Routes>
      </Router>
    </div>
  );
}

export default App;