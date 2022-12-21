import React from 'react'
import { Link } from 'react-router-dom'


const PhotosInner = ({ items }) => {

    return (
        <>
            {items.map((item, index) => {
                return (
                    <Link to={`/photos/detail/${item.id}`} className='photos__inner' key={index}>
                        <img className='photos__img' src={`${item.thumb}`} alt="" />
                    </Link>
                )
            })}
        </>
    )
}

export default PhotosInner