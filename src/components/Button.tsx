import React from "react";
import styled from "styled-components";

function Button(props: any) {
	return (
		<Btn className={ props.disabled ? "btn disabled" : "btn" } onClick={ props.action }>
			<h5>{ props.text }</h5>
		</Btn>
	)
}

const Btn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2.375rem;
	border-radius: 1.875rem;
	background-color: var(--clr-primary-1);
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	:hover {
		background-color: var(--clr-primary-2);
	}

	:active {
		background-color: var(--clr-primary-1);
		opacity: 0.5;
	}
`

export default Button;