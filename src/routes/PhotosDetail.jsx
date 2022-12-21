import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Data from './Photos.js'

const PhotosDetail = () => {
  const { paramsId } = useParams();
  const data = Data.find(({ id }) => id === paramsId);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  countRef.current = count;

  useEffect(() => {
    // changeImage();
    // setInterval(changeImage, 8000);
  }, [])

  function changeImage() {
    const photosDetailImage = document.getElementById("photosDetail__image");
    setCount((prevState) => prevState + 1);

    if (countRef.current >= data.images.length -1) {
      setCount(0);
    }
    photosDetailImage.src = data.images[countRef.current];

  }

  return (
    <>
      <section className="wrapper" id="photosDetail">
        <img id='photosDetail__image' src={`${data.thumb}`} onClick={changeImage}/>
        <h2 id='photosDetail__title'>[{data.title}]</h2>
        <p id='photosDetail__sentence'>{data.sentence}</p>
        <Link id='worksDetail__link' to={`/photos/`}><p>checkout◁</p></Link>
      </section>
    </>
  )
}

export default PhotosDetail