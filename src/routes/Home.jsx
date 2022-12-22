import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  countRef.current = count;
  const images = [
    'images/photos/amayadori/amayadori2.webp',
    'images/photos/koenji/koenji2.webp',
    'images/photos/maruta/maruta2.webp',
    'images/photos/rainy/rainy5.webp',
    'images/photos/reflect/reflect11.webp',
    'images/photos/summer/summer4.webp',
    'images/photos/noname/noname2.webp',
    'images/photos/noname/noname3.webp',
    'images/photos/noname/noname4.webp',
    'images/photos/noname/noname5.webp',
  ]
  useEffect(() => {
    const homeImage = document.getElementById("home__image");
    countRef.current = Math.floor(Math.random() * images.length);
    homeImage.src = images[countRef.current];
    console.log(countRef.current);
    for(let i=0; i<images.length; i++){
      const img = new Image();
      img.src = images[i];
      console.log(i);
    }
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
      while (true) {
        let num = Math.floor(Math.random() * images.length);
        if (num !== countRef.current) {
          countRef.current = num;
          homeImage.src = images[countRef.current];
          console.log(countRef.current);
          break;
        }
      }
    }, 1000)
    setTimeout(function () {
      homeImage.classList.add('show');
    }, 1000);
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