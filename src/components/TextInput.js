import React from "react"

const TextInput = ({ value, handleChange }) => {
	return (
		<section>
			<input
				className={"Text-input"}
				value={value}
				onChange={event => handleChange(event.target.value)}
			/>
		</section>
	)
}

export default TextInput
