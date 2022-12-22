import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  countRef.current = count;
  const images = [
    'images/home/home1.png',
    'images/home/home2.png',
  ]
  useEffect(() => {
    const interval = setInterval(changeImage, 8000);
    return () => clearInterval(interval);
  }, []);

  function changeImage() {
    const homeImage = document.getElementById("home__image");
    homeImage.classList.remove('show');
    setTimeout(function(){
      countRef.current++;
      if(countRef.current > images.length -1){
        countRef.current = 0;
      }
      homeImage.src = images[countRef.current];
    }, 800)
    setTimeout(function(){
      homeImage.classList.add('show');
    }, 800);
  };

  return (
    <section id="home" className="wrapper">
      <img id="home__image" className="home__image show" src={`${images[countRef.current]}`} />
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