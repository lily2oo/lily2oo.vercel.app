import { Link } from "react-router-dom";

const WorksInner = ({ item }) => {
  return (
    <>
      <img className="works__decoration" src="/images/gear.png" alt="" />
      <img className="works__decoration" src="/images/gear.png" alt="" />
      {item.map((Val) => {
        return (
          <Link to={`/works/detail/${Val.id}`} key={Val.id} state={{ id: "id" }} className='works__inner'>
            <img src={`${process.env.PUBLIC_URL}/${Val.thumb}`} alt="" />

            <div className="works__mask">
              <img src={`${process.env.PUBLIC_URL}/${Val.thumb}`} alt="" />
              <div className="works__mask-overlay"></div>
              <div className="works__mask-textbox">
                <p className="works__mask-ttl">{Val.title}</p>
                <p className="works__mask-txt">▷checkin</p>
              </div>
              <div className="works__mask-border"></div>
            </div>
          </Link>
        )
      })
      }
    </>
  )
}

export default WorksInner