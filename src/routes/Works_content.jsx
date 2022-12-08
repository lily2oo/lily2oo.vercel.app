import { Link } from "react-router-dom";

const Works_content = ({item}) => {
  return (
    <>
      {item.map((Val) => {
        return (
          <Link to={`/works/detail/${Val.id}`} key={Val.id} state={{id: "id"}}>
            <div className='Works_content'>
              <div className="square">
                <img src={`http://localhost:3000/src/${Val.thumb}`} alt="" />
                <p>{Val.title}</p>
              </div>
              {/* <Works_description image={`${image}`} thumb={`${thumb}`} title={`${title}`} sentence={`${sentence}`} /> */}
            </div>
          </Link>
        )
      })
      }
    </>
  )
}

// const Works_content = (props) => {
//   const num = props.num;
//   const work = Data.data[num];
//   const kind = work.kind;
//   const image = work.image;
//   const thumb = work.thumb;
//   const title = work.title;
//   const sentence = work.sentence;
//   return (
//     <Link to={`/works/detail/${num}`}>
//       <div className='Works_content'>
//         <div className="square">
//           <img src={thumb} alt="" />
//           <p>{title}</p>
//         </div>
//         {/* <Works_description image={`${image}`} thumb={`${thumb}`} title={`${title}`} sentence={`${sentence}`} /> */}
//       </div>
//     </Link>
//   )
// }

export default Works_content