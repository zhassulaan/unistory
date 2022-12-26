import React from "react";

function Input(id: any, placeholder: string, value: string, onchange: any) {
	return (
		<input
			type="text"
			name={ id }
			className="input"
			id={ id }
			placeholder={ placeholder }
			value={ value }
			onChange={ onchange }
		/>
	)
}

export default Input;