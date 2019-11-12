import React from "react"
import "./App.css"
import API from "./api"

import TextInput from "./components/TextInput"

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
				<TextInput />
			</header>
		)
	}
}

export default App
