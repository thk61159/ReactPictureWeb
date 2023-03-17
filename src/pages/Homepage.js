import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import Picture from '../components/Picture'

const Homepage = () => {
	let [input, setInput] = useState('')
	let [data, setData] = useState(null)
  let [page, setPage] = useState(1)
  let [currentSearch, setCurrentSearch] = useState('')
	const auth = process.env.REACT_APP_KEY
	//根據API規定給予參數
	const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15'
	let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`
	const search = async url => {
		let result = await axios.get(url, {
			headers: { Authorization: auth },
		})
    setData(result.data.photos)
    setCurrentSearch(input)
	}
  const morePicture = async () => {
		let newURL
    setPage(page + 1)
		//closure 問題 因為setPage改變的事此function之外的page state
		if (currentSearch === '') {
			newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`
		} else {
			newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
				page + 1
			}`
		}
		let result = await axios.get(newURL, {
			headers: { Authorization: auth },
		})
		setData(data.concat(result.data.photos))
	}
	//ㄧ進入網站就顯示精選圖片
	useEffect(() => {
		console.log('執行useEffect')
		search(initialURL)
	}, [])
	return (
		<div style={{ minHeight: '100vh' }}>
			<Search
				search={() => {
					search(searchURL)
				}}
				setInput={setInput}
			/>
			<div className="pictures">
				{data &&
					data.map((d, i) => {
						return <Picture data={d} key={i} />
					})}
			</div>
			<div className="morePicture">
				<button onClick={morePicture}>更多</button>
			</div>
		</div>
	)
}

export default Homepage
