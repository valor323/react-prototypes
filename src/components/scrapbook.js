import React from 'react';
import './scrapbook.css';
import imageData from './image_data';
import ScrapBookImage from './scrapbook_images';

export default props => {
    const images = imageData.map((item,index)=>{
        return <ScrapBookImage key={index} about={item}/>
    });
    return (
        <div className="scrapbook-container">
            {images}
        </div>
    )
}