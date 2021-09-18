import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import axios from 'axios';
import './App.css';


function App() {

  let [galleryArray, setGalleryArray] = useState([]); //does this work with images???

  useEffect(() => { //on load
    getGallery() //.....get gallery
  }, []);


  // GET GALLERY request 
  // galleryItems from gallery.router.js = response over here
  const getGallery = () => {
    axios.get('/gallery').then((response) => {
      console.log('response from gallery.router.js', response.data);
      // take the data from the response and assign it to the famousPeopleArray
      setGalleryArray(response.data);
    }).catch((error) => {
      console.log(error);
    })
  } // end GET function

  //PUT - to add likes
  const addLike = (galleryID) => {
    console.log('adding Like to photo with galleryID:', galleryID)
    axios({
      method: 'PUT',
      url: 'gallery/like/' + galleryID
    }).then(function(response) {
      console.log('Adding like to photo with ID:', galleryID)
      getGallery();
    }).catch(function(error) {
      console.log('error in CLIENT-side PUT function:', error)
    })
    

  } // end PUT function


  // do the get from router
  //pass in array into the GalleryList (Props)
  // once in GalleryList, loop through array and pass each individual array, via props into GalleryItem

  //setup your image TAG - source = item 


  return (

    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My European Tour Gallery</h1>
      </header>
      <p>React Photo Gallery</p>

      <GalleryItem />


      <ul>
        {galleryArray.map(gallery =>
        (<li
          key={gallery.id}><img src={gallery.path} width="200px" /> 
          <br />
          <button onClick={() => addLike(gallery.id)}>Like</button>
           Likes: {gallery.likes} <br /><br />
        </li>)
        )}
      </ul>


    </div>
  );
}

export default App;
