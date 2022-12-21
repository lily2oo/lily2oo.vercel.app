import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Data from './Photos.js'

const PhotosDetail = () => {
  const { paramsId } = useParams();
  const data = Data.find(({ id }) => id === paramsId);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  countRef.current = count;
  const navigate = useNavigate();

  useEffect(() => {
  }, [])

  function changeImage() {
    const photosDetailImage = document.getElementById("photosDetail__image");
    setCount((prevState) => prevState + 1);

    if (countRef.current >= data.images.length - 1) {
      setCount(0);
    }
    photosDetailImage.src = data.images[countRef.current];

  }

  return (
    <>
      <section className="wrapper" id="photosDetail">
        <div id='photosDetail__imageWrap'>
          <img id='photosDetail__image' src={`${data.thumb}`} onClick={() => { changeImage() }} />
        </div>
        <h2 id='photosDetail__title'>{data.title}</h2>
        <div>
          <p id='photosDetail__sentence'>{data.sentence}</p>
        </div>
        <p id='photosDetail__link' onClick={() => { navigate(-1) }}>checkout◁</p>
      </section>
    </>
  )
}

export default PhotosDetail