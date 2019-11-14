import React from "react"
import "../App.css"

export default ({ id, name, nameDisplay, description, abv }) => {
	return (
		<div className={"Beer-preview"}>
			<p>{name}</p>
			<p>{`${abv}%`}</p>
		</div>
	)
}
