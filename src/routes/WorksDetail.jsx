import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Data from './Works'

const WorksDetail = () => {
  const { paramsId } = useParams();
  const data = Data.find(({ id }) => id === paramsId);
  const isMovie = data.category === "movie";
  const isWeb = data.category === "web";
  const isStory = data.category === "story";
  const isDesign = data.category === "design";

  useEffect(() => {
    // imgSizeChange();
  }, []);
  
  const img = new Image();
  img.src = '/'+data.image;

  img.onload = () => {
    const size = {
      width: img.naturalWidth,
      height: img.naturalHeight,
    };
  
    URL.revokeObjectURL(img.src);
    console.log(size);

    if (data.category !== "movie") {
      const img = document.getElementById('worksDetail__image');
      console.log(size.width);
      if (size.width <= size.height) {
        img.className += 'vertically_long';
      } else if (size.width > size.height) {
        img.className += 'horizontally_long';
      }
    }
  };

  return (
    <section className="wrapper" id="worksDetail">
      <div id='worksDetail__contentWrap' className='worksDetail__imageWrap'>
        {isWeb ? (
          <a id='worksDetail__webLink' href={`${data.url}`}><img id='worksDetail__image' src={`/${data.image}`} /></a>
        ) : (isMovie ? (
          <div id='worksDetail__movieWrap'><iframe loading='lazy' width='100%' height='100%' allowfullscreenn='1' src={`https://www.youtube-nocookie.com/embed/${data.image}?controls=1&autoplay=1&mute=1&loop=1&playlist=${data.image}&rel=0`} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe></div>
        ) : (
          <img id='worksDetail__image' src={`/${data.image}`} alt="" />
        ))}
      </div>
      <h2 id='worksDetail__title'>[{data.title}]</h2>
      <p id='worksDetail__sentence' className={`${data.lang}`}>{data.sentence.split('\n').map((t, index) => (<span key={index}>{t}<br /></span>))}</p>
      <Link id='worksDetail__link' to={`/works/`}><p>checkout◁</p></Link>
    </section>
  )
}

export default WorksDetail