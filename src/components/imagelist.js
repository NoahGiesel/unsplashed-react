import React from "react" 
import "./imagelist.css"
import ImageCard from "./imagecard"

const imagelist = props => {
    const images = props.listImages.map(image => {
        return <ImageCard key={image.id} immagines={image} />
    })
    return (
        <div className="image-list"> 
            {images}
        </div>
    )
}



export default imagelist;