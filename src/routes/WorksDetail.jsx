import { Link, useParams } from 'react-router-dom';
import Data from './Data'

const WorksDetail = () => {
  const {paramsId} = useParams();
  console.log(paramsId)
  const data = Data.find(({ id }) => id === paramsId);
  console.log(data)

  return (
    <section className="wrapper" id="worksDetail">
      <h2>{data.title}</h2>
      <img className='worksDetail__image' src={`/${data.image}`} alt="" />
      <p>{data.sentence}</p>
      <Link to={`/works/`}><p>back to works</p></Link>
    </section>
  )
}

export default WorksDetail