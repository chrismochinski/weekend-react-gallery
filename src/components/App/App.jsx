import {useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {

  let[galleryList, setGalleryList] = useState([]); //does this work with images???

  useEffect(() => {
    getGallery()
  }, []);
  
//GET gallery
const getGallery = () => {
  axios({
    method: 'GET',
    url: '/list'
  }).then((response) => {
    //response.data is what we sent here from the server
    console.log(response.data);
    //insert "setsomething(response.data) here"
  }).catch((error) => {
    console.log('Error getting gallery on CLIENT side:', error)
  })
}

//PUT gallery for like updates


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My European Tour Gallery</h1>
        </header>
        <p>My European Tour Gallery</p>
        
        



      </div>
    );
}

export default App;
