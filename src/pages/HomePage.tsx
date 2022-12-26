import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import Registration from "../components/Registration";

function HomePage(props: any) {
	const [modal, setModal] = useState(true);
	
	const handleClose = async(event: MouseEvent) => {
		event.preventDefault();
		document.body.style.overflow = 'unset';
		setModal(!modal);
	}

	return (
		<div className="container">
			{/* Modal window */}
			{ modal ? <Modal close={ handleClose } /> : null }
			{/* Header */}
			<Header account={ props.account } connect={ props.connect } />
			
			<Hero />
			{/* <Registration account={ props.account } connect={ props.connect } user={ props.user } items={ props.items } /> */}
		</div>
	);
};

export default HomePage;