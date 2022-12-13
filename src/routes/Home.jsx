import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  countRef.current = count;

  useEffect(() => {
    const images = [
      'images/fv.png',
      'images/fv2.png',
    ]
    const fvImage = document.getElementById("fv-img");
    function changeImage() {
      setCount((prevState) => prevState + 1);
      console.log(countRef.current);
      if(countRef.current >= images.length -1){
        setCount(0);
      }
      fvImage.src = images[countRef.current];
    };
    changeImage();
    setInterval(changeImage, 8000);
  }, []);

  return (
    <section id="home" className="wrapper">
      <img id="fv-img" className="fv-img" src="" />
      <div id="logo">
        <div id="logo-content">
          <p>lily2oo</p>
          <p>Jumpei Suko</p>
        </div>
      </div>
      <p>2022 Jumpei Suko All Rights Reserved.</p>
    </section>
  )
}


export default Home