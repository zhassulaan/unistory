import React, { useState, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";
import close from "../assets/close.svg";

// to get list of users from local-storage
const getLocalItems = () => {
	let list = localStorage.getItem('lists');

	if (list) {
		return JSON.parse(localStorage.getItem('lists') || '{}');
	} else {
		return [];
	}
}

function Registration(props: any) {
	// data from our form (input tags)
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	// set of datas in one array
	const [data, setData] = useState<any>({id: 0, username: '', email: '', address: ''});
	const [items, setItems] = useState<any>(getLocalItems());
	const [user, setUser] = useState<any>(props.user);
	// Error message
	const [error, setError] = useState({})

	// get data from backend if we don't have it
	useEffect(() => {
		fetch('https://new-backend.unistory.app/api/data')
			.then(response => response.json())
			.then(res => (items.length === 0) ? setItems(res.items) : null)
			.catch(err => setError(err))
  	}, []);	

	// this function checks if our list of users already have current user
	function exists(data: any): any {
		let exist = false;

		{ items.map((item: any) => {
			if (item.username === data.username && item.email === data.email && item.address === data.address) 
				exist = true;
		}) }
		return exist;
	}

	// this function submits information (name and email)
	function submitItem(e: any)  {
		e.preventDefault();
		if (name !== '' && email !== '') {
			const newData: any = {id: items.length + 1, username: name, email: email, address: props.account};
			console.log(data);
			console.log(newData);
			
			setData(newData);
		}
	}
	
	// this function adds saved data about current user to list (table)
	function addItem(e: any)  {
		e.preventDefault();
		if (!exists(data)) {
			const newArray = [...items, data];
			setItems(newArray);
		}
	}
	
	// this function removes current user from list (table)
	function deleteItem(e: any) {
		e.preventDefault();
		const updatesItems = items.filter((item: any) => {
			return (item.username !== data.username || item.email !== data.email || item.address !== data.address);
		});
		setItems(updatesItems);
	}

	// User that will be displayed on User Page
	function saveUser(e: any) {
		e.preventDefault();
		document.location.href="/user";
		setUser(items[e.target.id - 1]);
	}

	useEffect(() =>{
		localStorage.setItem('user', JSON.stringify(user))
		localStorage.setItem('lists', JSON.stringify(items))
	}, [user, items])

	return (
		<div className="content">
			{/* Form zone */}
			<FormBox>
				<h1 className="title">Beta test registration</h1>

				<p className="text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>

				<FormTitle>Name</FormTitle>
				{ (data.username !== '') ?
					<AccountInfo>{ data.username }</AccountInfo>
						:
					<input
						type="text"
						name="name"
						className={ props.account ? "input" : "input disabled" }
						id="name"
						placeholder="We will display your name in participation list "
						value={ name }
						onChange={ (e) => setName(e.target.value) }
						disabled={ props.account ? false : true }
					/>
				}

				<FormTitle>Email</FormTitle>
				{ (data.email !== '') ?
					<AccountInfo>{ data.email }</AccountInfo>
						:	
					<input
						type="text"
						name="email"
						className={ props.account ? "input" : "input disabled" }
						id="email"
						placeholder="We will display your email in participation list "
						value={ email }
						onChange={ (e) => setEmail(e.target.value) }
						disabled={ props.account ? false : true }
					/>
				}
				
				{ props.account ?
					(data.username !== '' && data.email !== '') ?
						(!exists(data)) ?
							// If user filled in form but didn't add information into the table
							<Button text={ "List me to the table" } action={ addItem } />							
								:
							// If user already registered disable button
							<Button text={ "List me to the table" } disabled={ true } />							
							:
						// If user connected metamask
						<Button text={ "Get early access" } action={ submitItem } />
						:
					// If user didn't connected metamask account
					<Button text={ "Connect Metamask" } action={ props.connect } />
				}

				{ !props.account ? <h6>You need to connect wallet before registration</h6> : null }
			</FormBox>
			
			{/* Table zone */}
			{ data.username !== '' ?
				<TableBox>
					<h1 className="title">Participation listing (enable only for participants)</h1>

					{/* Table header */}
					<div className="header">
						<h4 className="title text1">Name</h4>
						<h4 className="title text2">Email</h4>
						<h4 className="title text3">Wallet</h4>
					</div>

					{/* Table */}
					<ul className={ exists(data) ? "table acc" : "table " }>
						
						{ items?.slice(0).reverse().map((item: any) => (
							(item.username === data.username && item.email === data.email && item.address === data.address) ?
								<li className="row current">
									{/* Current account */}
									<p className="text text1">{ item.username }</p>
									<p className="text text2">{ item.email }</p>
									<p className="text text3">{ item.address }</p>
									<img src={close} alt="close button" className="close btn" onClick={ deleteItem } />
								</li>
									:
								<a href="/user" id={ item.id } onClick={ saveUser }>
									<li className="row" id={ item.id }>
										{/* Other accounts */}
										<p className="text text1" id={ item.id }>{ item.username }</p>
										<p className="text text2" id={ item.id }>{ item.email }</p>
										<p className="text text3" id={ item.id }>{ item.address }</p>
									</li>
								</a>
							))
						}
					</ul>
				</TableBox>
					:
				null
			}
		</div>
	);
}

const FormBox = styled.section`
	width: 26.3125rem;
	height: 43.0625rem;
	margin-top: 2.1875rem;

	.title {
		color: var(--clr-primary-1);
	}

	.text {
		width: 25.3125rem;
		margin: 1.125rem 0;
	}

	.input {
		width: 26.3125rem;
		height: 2.625rem;
		background-color: transparent;
		border: 1px solid var(--clr-white);
		border-radius: 1.875rem;
		padding-left: 1.125rem;
	}
	
	.input:focus {
		outline: none;
		border: 1px solid var(--clr-primary-1);
  	}

	.btn {
		width: 10.0625rem;
		margin: 1.75rem 0 0.75rem;
	}

	.disabled {
		opacity: 0.5;
	}
	
	.btn.disabled,
	.btn.disabled:hover {
		background-color: var(--clr-primary-1);
	}
`

const FormTitle = styled.h4`
	padding: 1.125rem 0 0.5rem;
`

const AccountInfo = styled.h2`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis
`

const TableBox = styled.section`
	width: 47.1875rem;
	margin-top: 2.1875rem;
	
	.header {
		margin-top: 1.1875rem;
	}

	.table {
		height: 34.375rem;
		width: 40.25rem;
		overflow: scroll;
		
		::-webkit-scrollbar {
			width: 0.1875rem;
		}
		
		/* Track */
		::-webkit-scrollbar-track {
			background: var(--clr-white);
			opacity: 0.5;
			background-color: transparent;
		}
		
		/* Handle */
		::-webkit-scrollbar-thumb {
			background: var(--clr-primary-1);
			border-radius: 0.125rem;
		}

		::-webkit-scrollbar-corner {
			background-color: transparent;
		 }
	}

	.acc {
		width: 43.625rem;
	}

	.header,
	.row {
		position: relative;
		display: flex;
		padding: 1rem 0;
	}

	.row::before {
		position: absolute;
		content: "";
		width: 100%;
		height: 0.0625rem;
		background-color: var(--clr-white);
		top: 0;
	}
	
	.acc .row::before {
		width: calc(100% - 1.875rem);
	}

	.text {
		line-height: 1.125rem;
		font-size: 14px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}	

	.row.current .text {
		color: var(--clr-primary-1);
	}

	.text1 {
		width: 11.6875rem;
	}

	.text2 {
		width: 16.0625rem;
	}

	.text3 {
		width: 12.1875rem;
	}

	.close {
		margin: 0 1.875rem 0 auto;
		cursor: pointer;
	}
`

export default Registration;