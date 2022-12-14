import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink activeclassname="activePage" to={`/`}><p>lily2oo</p></NavLink>
      </div>
      <nav>
        <ul>
          <li><NavLink activeclassname="active" to={`/works/`}>works</NavLink></li>
          <li><NavLink activeclassname="active" to={`/photos/`}>photos</NavLink></li>
          {/* <li><NavLink activeclassname="active" to={`/prototypes/`}>prototypes</NavLink></li> */}
          {/* <li><NavLink activeclassname="active" to={`/persona/`}>persona</NavLink></li> */}
          <li><NavLink activeclassname="active" to={`/about/`}>about</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header