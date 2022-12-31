import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

const WorksInner = ({ item }) => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 420 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 420 })
    return isMobile ? children : null
  }
  return (
    <>
      <img className="works__decoration" src="/images/gear.png" alt="" />
      <img className="works__decoration" src="/images/gear.png" alt="" />
      {item.map((Val) => {
        return (
          <div key={Val.id} className='works__inner'>
            <Desktop>
            <img src={`${process.env.PUBLIC_URL}/${Val.thumb}`} alt="" />
            <div className="works__mask mask">
              <img src={`${process.env.PUBLIC_URL}/${Val.thumb}`} alt="" />
              <div className="works__mask-overlay mask-overlay"></div>
              <div className="works__mask-textbox mask-textbox">
                <p className="works__mask-ttl mask-ttl">{Val.title}</p>
                <p className="works__mask-txt mask-txt">▷checkin</p>
              </div>
              <div className="works__mask-border mask-border" ></div>
            </div>
            </Desktop>
            <Mobile>
            <img src={`${process.env.PUBLIC_URL}/${Val.spthumb}`} alt="" />
            <div className="works__mask mask">
              <img src={`${process.env.PUBLIC_URL}/${Val.spthumb}`} alt="" />
              <div className="works__mask-overlay mask-overlay"></div>
              <div className="works__mask-textbox mask-textbox">
                <p className="works__mask-ttl mask-ttl">{Val.title}</p>
                <p className="works__mask-txt mask-txt">▷checkin</p>
              </div>
              <div className="works__mask-border mask-border" ></div>
            </div>      
            </Mobile>
            <Link to={`/works/detail/${Val.id}`} key={Val.id} state={{ id: "id" }} id={Val.id} className='works__link link'>
            </Link>
          </div>
        )
      })
      }
    </>
  )
}

export default WorksInner