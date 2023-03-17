import React from 'react'


const Search = ({ search }) => {
	return (
		<div className="search">
			<input className="input" type="text" />
			<button className="button" onClick={search}>
				Search
			</button>
		</div>
	)
}

export default Search