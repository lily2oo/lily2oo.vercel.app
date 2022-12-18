import { Link, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import Data from './Data'

const WorksDetail = () => {
  const { paramsId } = useParams();
  console.log(paramsId)
  const data = Data.find(({ id }) => id === paramsId);
  console.log(data);
  useEffect(()=>{
    if (data.category === "movie") {
      console.log("movie");
      document.getElementById('worksDetail__wrap').innerHTML = "<iframe width='560' height='315' src=" + `${data.image}` + " title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
      // document.getElementById('worksDetail__wrap').innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/Zs0JoPXo0jQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    } else{
      document.getElementById('worksDetail__wrap').innerHTML = "<img className='worksDetail__image' src=" + `/${data.image}` + " />";
    }
  },[]);

  return (
    <section className="wrapper" id="worksDetail">
      <h2>{data.category}</h2>
      <h2>{data.title}</h2>
      <div id='worksDetail__wrap' className='worksDetail__wrap'>
        <img className='worksDetail__image' src={`/${data.image}`} alt="" />
      </div>
      <p>{data.sentence}</p>
      <Link to={`/works/`}><p>back to works</p></Link>
    </section>
  )
}

export default WorksDetail