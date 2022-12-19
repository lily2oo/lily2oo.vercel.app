import { Link, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import Data from './Data'

const WorksDetail = () => {
  const { paramsId } = useParams();
  console.log(paramsId);
  const data = Data.find(({ id }) => id === paramsId);
  console.log(data);
  useEffect(()=>{
    if (data.category === "movie") {
      document.getElementById('worksDetail__contentWrap').innerHTML = "<div id='worksDetail__movieWrap'><iframe loading='lazy' width='100%' height='100%' allowfullscreen='1' src=" + `https://www.youtube-nocookie.com/embed/${data.image}?controls=1&autoplay=1&mute=1&loop=1&playlist=${data.image}&rel=0` + " frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";
    } else if (data.category === "web") {
      document.getElementById('worksDetail__contentWrap').innerHTML = "<a id='worksDetail__webLink' href='" + `${data.url}` + "'><img class='worksDetail__image' src=" + `/${data.image}` + " /></a>";
    } else{
      document.getElementById('worksDetail__contentWrap').innerHTML = "<img class='worksDetail__image' src=" + `/${data.image}` + " />";
    }
  },[]);

  return (
    <section className="wrapper" id="worksDetail">
      <h2 id='worksDetail__category'>{data.category}</h2>
      <h2 id='worksDetail__title'>{data.title}</h2>
      <div id='worksDetail__contentWrap' className='worksDetail__imageWrap'>
        <img className='worksDetail__image' src={`/${data.image}`} alt="" />
      </div>
      <p id='worksDetail__sentence'>{data.sentence}</p>
      <Link to={`/works/`}><p>back to works</p></Link>
    </section>
  )
}

export default WorksDetail