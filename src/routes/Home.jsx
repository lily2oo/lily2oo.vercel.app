const Home = () => {
  return (
    <section id="home" className="wrapper">
      {/* <img className="fv-img" src={Image} alt="" /> */}
      <img className="fv-img" src={`${process.env.PUBLIC_URL}/images/fv.png`} alt="" />
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