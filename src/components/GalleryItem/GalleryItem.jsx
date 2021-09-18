import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({photo, addLike}) {

    let [isPhotoClicked, setIsPhotoClicked] = useState(false);

    return(
        
        
        <li key={photo.id} className="picture">

        {
            isPhotoClicked
                ?
                <div className="description"><h3 onClick={() => setIsPhotoClicked(!isPhotoClicked)}>{photo.description}</h3></div>
                :
                <img onClick={() => setIsPhotoClicked(!isPhotoClicked)} src={photo.path} width="200px" />
        }

        
        <button onClick={() => addLike(photo.id)}>Like</button>
        <div className="likesNumber">
            {photo.likes} 
        </div>
    </li>)

    
}

export default GalleryItem;
