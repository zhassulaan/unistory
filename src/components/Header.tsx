import React from "react";
import Button from "./Button";
import styled from "styled-components";

function Header(props: any, user: boolean) {
	return (
		<Wrapper>
			{/* Logo zone */}
			{/* If you press logo window will be reloaded */}
			<a href="">
				<Logo>
					<h5>Logo</h5>
				</Logo>
			</a>

			{/* ID zone */}
			{ props.account ?
				<Id>{ props.account }</Id>
					:
				<Button text={ "Connect Metamask" } action={ props.connect } />
			}
		</Wrapper>
	);
}

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4.5rem;

	h5 {
		font-weight: 400;
	}

	.btn {
		width: 10.0625rem;
		height: 2.4375rem;
		margin: 0.1875rem 0 0;
	}
`

const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 12.4375rem;
	height: 2.75rem;
	border: 1px dashed var(--clr-primary-6);
	background-color: var(--clr-primary-5);
	cursor: pointer;
`

const Id = styled.h5`
	width: 9.0625rem;
	color: var(--clr-primary-1);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis
`

export default Header;