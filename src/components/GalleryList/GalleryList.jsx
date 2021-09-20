import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css';


function GalleryList({ galleryArray, getGallery }) {

    let [isPhotoClicked, setIsPhotoClicked] = useState(false);


    //PUT - to add likes ...is this supposed to stay on the app.jsx page?
    const addLike = (galleryID) => {
        console.log('adding Like to photo with galleryID:', galleryID)
        axios({
            method: 'PUT',
            url: 'gallery/like/' + galleryID
        }).then(function (response) {
            console.log('Adding like to photo with ID:', galleryID)
            getGallery();
        }).catch(function (error) {
            console.log('error in CLIENT-side PUT function:', error)
        })
    } // end PUT function to add a like (working)

    // below - map looping through contents of gallery
    return (

        <ul className="list">

            {galleryArray.map(photo => (
                <GalleryItem
                    key={photo.id}
                    photo={photo}
                    isPhotoClicked={isPhotoClicked}
                    setIsPhotoClicked={setIsPhotoClicked}
                    addLike={addLike}
                />
            ))}
        </ul>

    )

}

export default GalleryList; // export to App