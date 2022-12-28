import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Data from './Works'
import gsap from 'gsap';

const WorksDetail = () => {
  const { paramsId } = useParams();
  const data = Data.find(({ id }) => id === paramsId);
  const isMovie = data.category === "movie";
  const isWeb = data.category === "web";
  const navigation = useNavigate();

  useEffect(() => {
    imgSizeChange();
  }, []);

  useEffect(()=>{
    gsap.fromTo("#worksDetail__contentWrap",{
      opacity:0
    },{
      opacity:1,
      duration:1,
    })
  })


  function imgSizeChange() {
    const img = new Image();
    img.src = '/' + data.content;

    img.onload = () => {
      const size = {
        width: img.naturalWidth,
        height: img.naturalHeight,
      };

      URL.revokeObjectURL(img.src);

      if (data.category !== "movie") {
        const img = document.getElementById('worksDetail__image');
        if (size.width <= size.height) {
          img.className += 'vertically_long';
        } else if (size.width > size.height) {
          img.className += 'horizontally_long';
        }
      }
    };
  }

  return (
    <section className="wrapper" id="worksDetail">
      <div id='worksDetail__contentWrap'>
        {isWeb ? (
          <div id='worksDetail__webWrap' className='link'>
            <a id='worksDetail__webLink' href={`${data.url}`} target="_blank">
              <img id='worksDetail__image' src={`/${data.content}`} />
              <div id="worksDetail__webFilter">
                <p>View Site▷</p>
              </div>
            </a>
          </div>
        ) : (isMovie ? (
        // 動画をvideoに差し替え
          <div id='worksDetail__movieWrap'>
            <video src={`/${data.content}`} controls autoPlay muted loop playsInline width="100%" preload='auto'></video>
            {/* <iframe loading='lazy' width='100%' height='100%' allowfullscreenn='1' src={`https://www.youtube-nocookie.com/embed/${data.content}?controls=1&autoplay=1&mute=1&loop=1&playlist=${data.content}&rel=0`} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe> */}
          </div>
        ) : (
          <img id='worksDetail__image' src={`/${data.content}`} alt="" />
        ))}
      </div>
      <h2 id='worksDetail__title'>{data.title}</h2>
      <div>
        <p id='worksDetail__sentence' className={`${data.lang}`}>{data.sentence.split('\n').map((t, index) => (<span key={index}>{t}<br /></span>))}</p>
      </div>
      <p id='worksDetail__link' className='link' onClick={() => { navigation(-1) }}>checkout◁</p>
    </section>
  )
}

export default WorksDetail