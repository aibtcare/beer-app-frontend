import React from "react"
import "./App.css"
import API from "./api"

import BeerSearch from "./beer-search/BeerSearch"

class App extends React.Component {
	state = {
		beer: []
	}
	async componentDidMount() {
		const res = await API.getBeerByName("bud*")
		console.log(res)
	}
	render() {
		return (
			<header>
				<p>Beer Tracker</p>
				<BeerSearch />
			</header>
		)
	}
}

export default App
