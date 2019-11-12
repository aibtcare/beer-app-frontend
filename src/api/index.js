import axios from "axios"

const getBeerByName = async name => {
	const res = await axios.get("/api/search-beer/name", {
		params: {
			name
		}
	})
	return res.data
}

export default {
	getBeerByName
}
