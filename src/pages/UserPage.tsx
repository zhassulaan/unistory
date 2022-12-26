import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import mars from "../assets/3553-2.png";

function UserPage(props: any) {
	return (
		props.account ?
			<div className="container">
				{/* Header */}
				<Header account={ props.account } connect={ props.connect } />
				
				{/* User Page content */}
				<Wrapper>
					<h1 className="title">Personal data</h1>

					{/* Main Information */}
					<ul>
						<li className="info">
							<h2>Name</h2>
							<h4 className="account-info">{ props.user.username }</h4>
						</li>

						<li className="info">
							<h2>Email</h2>
							<h4 className="account-info">{ props.user.email }</h4>
						</li>

						<li className="info">
							<h2>Wallet</h2>
							<h4 className="account-info">{ props.user.address }</h4>
						</li>
					</ul>

					{/* Image */}
					<div className="image">
						<img src={ mars } alt="mars" />
					</div>
				</Wrapper>
			</div>
				:
			<div className="container"></div>
	);
};

const Wrapper = styled.section`
	position: relative;
	margin-top: 6rem;

	.title {
		font-size: 3rem;
		margin-bottom: 3rem;
	}

	.info {
		margin-top: 1.375rem;
	}
	
	.account-info {
		margin-top: 0.5rem;
	}

	.image {
		position: absolute;
		top: -5.1875rem;
		right: -16.625rem;
	}
`

export default UserPage;