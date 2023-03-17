import React from 'react'

const Picture = ({ data }) => {
	return (
		<div className="picture">
			<p>{data.photographer}</p>
			<div className="imageContainer">
				<img src={data.src.large} alt="" />
			</div>
			<p>
				<a href={data.src.large} target="_blank" rel="noreferrer">
					下載
				</a>
			</p>
		</div>
	)
}

export default Picture
