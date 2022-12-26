import React from "react";
import Button from "./Button";
import styled from "styled-components";

function Modal(props: any) {
	return (
		// Modal window
		<>
			<Container></Container>
			<Wrapper>
				<h1 className="title">metamask extention</h1>

				<p className="text">
					Системное модальное окно, на фронт 
					переносить не нужно. Вроде как не 
					делается кастомным, поэтому должна 
					быть фукнция, которая вызывает 
					расширение Google Chrome
				</p>

				{/* Notify you to download extensions */}
				<Button text={ "Skip this step" } action={ props.close } />
			</Wrapper>
		</>
	);
};

const Container = styled.section`
	position: fixed;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: var(--clr-black);
	opacity: 0.5;
	z-index: 2;
`

const Wrapper = styled.div`
	position: fixed;
	width: 26.375rem;
	height: 22.0625rem;
	background-color: var(--clr-primary-4);
	text-align: center;
	margin: 8% 30%;
	padding: 3rem 3.75rem 3.625rem;
	z-index: 3;

	.title {
		line-height: 2.6875rem;
		margin-bottom: 1.5rem;
	}

	.btn {
		width: 8.0625rem;
		margin: 3rem auto 0;
	}
`

export default Modal;