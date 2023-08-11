import { useState } from 'react';
import './App.css';

function App() {
  const images = [
    "https://img.ixbt.site/live/images/original/02/48/98/2023/02/15/5436708224.jpg",
    "https://photo-pict.com/wp-content/uploads/2019/05/krasivaya-ava-devushke-63-e1523998753652.jpg",
    "https://fotorelax.ru/wp-content/uploads/2016/02/Beautiful-photos-and-pictures-on-different-topics-01.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
  ];



  const [currentIndex, setCurrentIndex] = useState(0);

  const nextButtonClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevButtonClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const sliderStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
    display: `flex`,
    flexDirection: `row`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    width: `1000px`,
    height: `600px`,
  };


  return (
    <div>
      <h1>Slider</h1>
      <div className='slider' style={sliderStyle} >
        <button onClick={prevButtonClick}>Prev</button>
        <button onClick={nextButtonClick}>Next</button>
      </div>
    </div>
  );
}

export default App;