import { Link } from "react-router-dom";

const Works_content = ({ item }) => {
  return (
    <>
      {item.map((Val) => {
        return (
          <Link to={`/works/detail/${Val.id}`} key={Val.id} state={{ id: "id" }} className='Works-content'>
            <img src={`${process.env.PUBLIC_URL}/${Val.thumb}`} alt="" />

            <div className="upperFilter">
              <img src={`${process.env.PUBLIC_URL}/${Val.thumb}`} alt="" />
              <div className="filter"></div>
              <div className="text-box">
                <p className="title">{Val.title}</p>
                <p className="caption">▷checkin</p>
              </div>
              <div className="border"></div>
            </div>
          </Link>
        )
      })
      }
    </>
  )
}

export default Works_content