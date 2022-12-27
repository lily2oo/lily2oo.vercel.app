import {useEffect } from 'react'
import { Link } from 'react-router-dom'


const PhotosInner = ({ items }) => {

    return (
        <>
            {items.map((item, index) => {
                return (
                    <Link to={`/photos/detail/${item.id}`} className='photos__inner' key={index}>
                        <img className='photos__img' src={`${item.thumb}`} alt="" />
                        <div className='mask'>
                            <img className='photos__img' src={`${item.thumb}`} alt="" />
                            <div className="mask-overlay"></div>
                            <div className="mask-textbox">
                                <p className="mask-ttl">{item.title}</p>
                            </div>
                            <div className="mask-border"></div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default PhotosInner