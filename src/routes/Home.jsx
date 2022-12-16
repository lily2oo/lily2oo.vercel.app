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
    changeImage();
    setInterval(changeImage, 8000);
  }, []);

  function changeImage() {
    const homeImage = document.getElementById("home__image");
    setCount((prevState) => prevState + 1);
    console.log(countRef.current);
    if(countRef.current >= images.length -1){
      setCount(0);
    }
    homeImage.src = images[countRef.current];
  };

  return (
    <section id="home" className="wrapper">
      <img id="home__image" className="home__image" src="" />
      <div id="logo">
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