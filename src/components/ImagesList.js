import React from 'react';
//import './ImagesList.css';

const ImagesList =(props)=>{
	console.log(props)
	const images =props.images.map((image)=>{
		return <img key={image.id} src={image.webformatURL} alt="" />
	})

	return(
		<div>
			{images}
		</div>
		)
}

export default ImagesList;