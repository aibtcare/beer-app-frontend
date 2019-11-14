import React from "react"

import API from "../api"
import TextInput from "../components/TextInput"
import BeerPreview from "../components/BeerPreview"

class BeerSearch extends React.Component {
	state = {
		textValue: "",
		beerData: []
	}

	searchBeer = async beerName => {
		const beerData = (await API.getBeerByName(`${beerName}*`)) || []
		this.setState({ beerData })
	}

	handleText = async textValue => {
		if (textValue.length >= 3) this.searchBeer(textValue)

		this.setState({ textValue })
	}

	mapBeerData = () => {
		return this.state.beerData.map(
			({ id, name, nameDisplay, description, abv }) => {
				return (
					<BeerPreview
						key={id}
						id={id}
						name={name}
						nameDisplay={nameDisplay}
						description={description}
						abv={abv}
					/>
				)
			}
		)
	}
	render() {
		return (
			<div>
				<p>BeerSearch</p>
				<TextInput
					value={this.state.textValue}
					handleChange={this.handleText}
				/>
				{this.mapBeerData()}
			</div>
		)
	}
}

export default BeerSearch
