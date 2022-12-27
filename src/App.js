import './App.css';
import './fonts/Antro_Vectra.otf'
import Header from './routes/Header';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Works from "./routes/Works.jsx";
import WorksDetail from './routes/WorksDetail';
import Photos from "./routes/Photos.jsx";
import PhotosDetail from './routes/PhotosDetail';
import Persona from './routes/Persona';
import About from "./routes/About.jsx";
import useLocationChange from "./fooks/useLocationChange.tsx"
import gsap from 'gsap';


const App = () => {

  useLocationChange((location) => {
    window.scrollTo(0, 0);
    const cursor = document.getElementById('cursor');
    // document.addEventListener('mousemove', function (e) {
    //   cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    // });
    // let link = document.querySelectorAll('a, .link');
    // for (var i = 0; i < link.length; i++) {
    //   link[i].addEventListener('mouseover', function (e) {
    //     cursor.classList.add('cursor--hover');
    //   });
    //   link[i].addEventListener('mouseout', function (e) {
    //     cursor.classList.remove('cursor--hover');
    //   });
    //   cursor.classList.remove('cursor--hover');
    // }
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const speed = 0.15;

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    window.addEventListener("mousemove", (event) => {
      const rectSize = 10;
      mouse.x = event.x - rectSize / 2;
      mouse.y = event.y - rectSize / 2;
    });

    gsap.ticker.add(() => {
      if (mouseLock === true) {
        return;
      }
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      xSet(pos.x);
      ySet(pos.y);
    });

    let mouseLock = false;

    document.querySelectorAll("a, .link").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        const size = 15;
        gsap.to(cursor, {
          width:size * 2,
          height:size * 2,
          duration: 0.5,
          ease: "back.out",
          overwrite: true,
        });
      });
      element.addEventListener("mouseleave", () => {
        const size = 15;
        gsap.to(cursor, {
          width: size,
          height: size,
          duration: 1,
          ease: "power4.out",
          overwrite: true,
        });
      });
    });
  })

  return (
    <div id='global-container'>
      <div id='cursor' className='cursor'></div>
      <Header />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/works/`} element={<Works />} />
        <Route path={`/works/detail/:paramsId`} element={<WorksDetail />} />
        <Route path={`/photos/`} element={<Photos />} />
        <Route path={`/photos/detail/:paramsId`} element={<PhotosDetail />} />
        <Route path={`/persona/`} element={<Persona />} />
        <Route path={`/about/`} element={<About />} />
      </Routes>
    </div>
  );
};

export default App;