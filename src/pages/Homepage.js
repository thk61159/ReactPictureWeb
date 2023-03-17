import React, { useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import Picture from '../components/Picture'

const Homepage = () => {
	let [data, setData] = useState(null)
	const auth = 'A92scxBZZvNfaebQlDUG6GO8I8nKclcKWymDM8t2wn4ysFccyg3ePRdw'
	const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15'
	const search = async () => {
		let result = await axios.get(initialURL, {
			headers: { Authorization: auth },
		})
		console.log(result)
		setData(result.data.photos)
  }
  
	return (
		<div style={{ minHeight: '100vh' }}>
			<Search search={search} />
			<fiv className="pictures">
				{data &&
					data.map(d => {
						return <Picture data={d} />
					})}
			</fiv>
		</div>
	)
}

export default Homepage
