import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList.jsx'
import Header from '../Header/Header.jsx'
import axios from 'axios';
import './App.css';


function App() {

  let [galleryArray, setGalleryArray] = useState([]); //does this work with images???

  //sets photo to clicked - this makes it the img vs the description

  useEffect(() => {
    getGallery()
  }, []);



  // GET GALLERY request 
  // galleryItems from gallery.router.js is the response
  const getGallery = () => {
    axios.get('/gallery').then((response) => {
      console.log('response from gallery.router.js', response.data);
      // take the data from the response and assign it to the famousPeopleArray
      setGalleryArray(response.data);
    }).catch((error) => {
      console.log(error);
    })
  } // end GET function (to populate photos on dom - working)



  //pass in array into the GalleryList (Props)
  // once in GalleryList, loop through array and pass each individual array, via props into GalleryItem

  //setup your image TAG - source = item 



  return (

    <div className="App">

      <Header />

      <GalleryList
        galleryArray={galleryArray}
        getGallery={getGallery}
      />

    </div>
  );
}

export default App;
