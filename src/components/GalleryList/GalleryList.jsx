import { useState } from 'react';
import React from 'react';
import axios from 'axios';

function GalleryList({ galleryArray, getGallery }) {

    let [isPhotoClicked, setIsPhotoClicked] = useState(false);


    //PUT - to add likes
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



    return (

        <ul>

            {galleryArray.map(gallery => (<li key={gallery.id}>

                {
                    isPhotoClicked
                        ?
                        <h3 onClick={() => setIsPhotoClicked(!isPhotoClicked)}>{gallery.description}</h3>
                        :
                        <img onClick={() => setIsPhotoClicked(!isPhotoClicked)} src={gallery.path} width="200px" />
                }

                <br />
                <button onClick={() => addLike(gallery.id)}>Like</button>
                Likes: {gallery.likes} <br /><br />
            </li>)
            )}
        </ul>


    )

}

export default GalleryList;