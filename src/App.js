import './App.css';
import { useState, useEffect, useRef } from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home'
import domToImage from 'dom-to-image';

function App() {

  const initialInputs = () => {
    const data = localStorage.getItem('userInput')
    return data ? JSON.parse(data) : {
      name: 'Your Name',
      userName: 'your_username',
      profilePic: 'https://img.freepik.com/free-icon/user_318-150866.jpg',
      socialPlatform: 3,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna nec mauris congue, id consequat elit venenatis. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam et sapien at tellus sollicitudin accumsan.`,
      selectBg: 2,
      rounded: 10
    }
  }


  const [userDetails, setUserDetails] = useState(initialInputs())
  useEffect(() => {
    localStorage.setItem('userInput', JSON.stringify(userDetails))
  }, [userDetails])

  const divRef = useRef(null);

  const downloadImage = () => {
    if (divRef.current) {
      domToImage.toJpeg(divRef.current)
        .then((dataURL) => {
          const link = document.createElement('a');
          link.download = 'your_post';
          link.href = dataURL;
          link.click();
        })
        .catch((error) => {
          console.error('Error converting div to image:', error);
        });
    }
  };

  return (
    <div className="container">
      <Header downloadImage={downloadImage} />
      <Sidebar userDetails={userDetails} setUserDetails={setUserDetails} />
      <Home userDetails={userDetails} divRef={divRef} />
    </div>
  );
}

export default App;
