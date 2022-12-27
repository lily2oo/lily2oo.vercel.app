import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Data from './Photos.js'
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const PhotosDetail = () => {
  const { paramsId } = useParams();
  const data = Data.find(({ id }) => id === paramsId);
  const navigate = useNavigate();
  // const prev = Number(data.id) + 1;
  // const next = Number(data.id) - 1;


  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  countRef.current = count;

  useEffect(() => {
    for (let i = 0; i < data.images.length; i++) {
      const img = new Image();
      img.src = data.images[i];
    }
  }, [])

  function decrementCount() {
    gsap.timeline({ repeat: 0 })
      .to("#photosDetail__image", { opacity: 0, duration: 0.25 })
      .to("#photosDetail__image", { opacity: 1, duration: 0.25 }, "+=0.125")
    const photosDetailImage = document.getElementById("photosDetail__image");
    countRef.current--;

    if (0 > countRef.current) {
      countRef.current = data.images.length - 1;
    }
    setTimeout(() => {
      photosDetailImage.src = data.images[countRef.current];
    }, 375);
  };

  function incrementCount() {
    gsap.timeline({ repeat: 0 })
      .to("#photosDetail__image", { opacity: 0, duration: 0.25 })
      .to("#photosDetail__image", { opacity: 1, duration: 0.25 }, "+=0.125")
    const photosDetailImage = document.getElementById("photosDetail__image");
    countRef.current++;

    if (countRef.current > data.images.length - 1) {
      countRef.current = 0;
    }
    setTimeout(() => {
      photosDetailImage.src = data.images[countRef.current];
    }, 375);
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
        {/* <Link to={`/photos/detail/${prev}`} className='prev'><p className='link'>prev</p></Link>
        <Link to={`/photos/detail/${next}`} className='next'><p className='link'>prev</p></Link> */}
      </section>
    </>
  )
}

export default PhotosDetail