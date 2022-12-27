import React, { useState, useEffect } from 'react'
import photos from './Photos.js'
import PhotosInner from './PhotosInner.jsx'
import gsap from 'gsap';

const Photos = () => {
  useEffect(() => {
    gsap.set("#photos__loading", {
      autoAlpha:0,
    })
    gsap.set(".photos__inner", {
      opacity: 0,
      y: 0,
      rotate: 5,
      transformOrigin: "left top",
    })
    // gsap.to("#photos__loading", {
    //   autoAlpha:0,
    //   duration:1,
    // }, "+=0.1")
    gsap.to(".photos__inner", {
      opacity: 1,
      y: 0,
      rotate: 0,
      duration: 0.5,
      ease: "back.out(2)",
      stagger: 0.07,
    }, "+=0.1")
  }, []);

  const [items, setItems] = useState(photos)
  return (
    <section id="photos" className="wrapper">
      {/* <div id="photos__loading">
        <p>photos</p>
      </div> */}
      <div id="photos__wrap">
        <PhotosInner items={items} />
      </div>
    </section>
  )
}

export default Photos