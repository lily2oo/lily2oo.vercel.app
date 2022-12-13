import { Link } from "react-router-dom";

const Works_content = ({ item }) => {
  return (
    <>
      {item.map((Val) => {
        return (
          <Link to={`/works/detail/${Val.id}`} key={Val.id} state={{ id: "id" }} className='Works-content'>
            <img src={`${process.env.PUBLIC_URL}/${Val.thumb}`} alt="" />
            <div className="upperFilter">
              <p>{Val.title}</p>
              <p>▷saisei</p>
            </div>
          </Link>
        )
      })
      }
    </>
  )
}

export default Works_content