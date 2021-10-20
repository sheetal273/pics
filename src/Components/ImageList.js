import './imageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) => {

    const imagesList = props.imagesList.map((image) => {
        return <ImageCard key={image.id} image={image}  />
    });

    return <div className="image-list">{imagesList}</div>;
};

export default ImageList;