import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  countRef.current = count;
  const images = [
    'images/photos/amayadori/amayadori2.webp',
    'images/photos/haneda/haneda2.webp',
    'images/photos/koenji/koenji2.webp',
    'images/photos/maruta/maruta1.webp',
    'images/photos/maruta/maruta2.webp',
    'images/photos/rainy/rainy5.webp',
    'images/photos/reflect/reflect11.webp',
    'images/photos/summer/summer4.webp',
    'images/photos/time/time1.webp',
    'images/photos/time/time2.webp',
    'images/photos/time/time3.webp',
    'images/photos/time/time4.webp',
  ]
  useEffect(() => {
    const homeImage = document.getElementById("home__image");
    countRef.current = Math.floor(Math.random() * images.length);
    homeImage.src = images[countRef.current];
    setTimeout(function () {
      homeImage.classList.add('show');
    }, 200);
    const interval = setInterval(changeImage, 8000);
    return () => clearInterval(interval);
  }, []);

  function changeImage() {
    const homeImage = document.getElementById("home__image");
    homeImage.classList.remove('show');
    setTimeout(function () {
      countRef.current = Math.floor(Math.random() * images.length);
      homeImage.src = images[countRef.current];
    }, 800)
    setTimeout(function () {
      homeImage.classList.add('show');
    }, 800);
  };

  return (
    <section id="home" className="wrapper">
      <div id="home__imageWrap">
        <img id="home__image" className="home__image" src="" />
      </div>
      <div className="link" id="logo">
        <div id="logo__text">
          <p>lily2oo</p>
          <p>Jumpei Suko</p>
        </div>
      </div>
      <p>2022 Jumpei Suko All Rights Reserved.</p>
    </section>
  )
}


export default Home