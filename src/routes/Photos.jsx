import React, {useState} from 'react'
import photos from './Photos.js'
import PhotosInner from './PhotosInner.jsx'

const Photos = () => {

  const [items, setItems] = useState(photos)
  return (
    <section id="photos" className="wrapper">
      <div id="photos__wrap">
        <PhotosInner items = {items} />
      </div>
    </section>
  )
}

export default Photos