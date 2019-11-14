import React from "react"
import TextInput from "../components/TextInput"
import API from "../api"

class BeerSearch extends React.Component {
	state = {
		textValue: ""
	}

	handleText = async textValue => {
		if (textValue.length >= 3) {
			console.log("send backend search request...")
		}

		this.setState({ textValue })
	}
	render() {
		return (
			<div>
				<p>BeerSearch</p>
				<TextInput
					value={this.state.textValue}
					handleChange={this.handleText}
				/>
			</div>
		)
	}
}

export default BeerSearch
