import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Data from './Photos.js'

const PhotosDetail = () => {
  const { paramsId } = useParams();
  const data = Data.find(({ id }) => id === paramsId);
  const navigate = useNavigate();


  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  countRef.current = count;

  useEffect(() => {
  }, [])

  function decrementCount() {
    const photosDetailImage = document.getElementById("photosDetail__image");
    countRef.current--;

    if (0 > countRef.current) {
      countRef.current = data.images.length - 1;
    }

    console.log(countRef.current);
    photosDetailImage.src = data.images[countRef.current];
  };

  function incrementCount() {
    const photosDetailImage = document.getElementById("photosDetail__image");
    countRef.current++;

    if (countRef.current > data.images.length - 1) {
      countRef.current = 0;
    }
    console.log(countRef.current);
    photosDetailImage.src = data.images[countRef.current];
  };

  return (
    <>
      <section className="wrapper" id="photosDetail">
        <div id="photosDetail__slider">
          <div className='triangle link' onClick={decrementCount}></div>
          <div className='triangle link' onClick={incrementCount}></div>
          <div id='photosDetail__imageWrap'>
            <img id='photosDetail__image' src={`${data.images[0]}`} />
          </div>
        </div>
        <h2 id='photosDetail__title'>{data.title}</h2>
        <div>
          <p id='photosDetail__sentence'>{data.sentence}</p>
        </div>
        <p id='photosDetail__link' className='link' onClick={() => { navigate(-1) }}>checkout◁</p>
      </section>
    </>
  )
}

export default PhotosDetail