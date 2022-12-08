import Image from "../images/fv.png";
const Home = () => {
  return (
    <section id="home" className="wrapper">
      <img className="fv-img" src={Image} alt="" />
      <div id="logo">
        <div id="logo-content">
          <p>rinne</p>
          <p>Jumpei Suko</p>
        </div>
      </div>
      <p>2022 Jumpei Suko All Rights Reserved.</p>
    </section>
  )
}

export default Home