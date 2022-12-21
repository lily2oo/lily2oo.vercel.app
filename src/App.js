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


const App = () => {

  useLocationChange((location) => {
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', function (e) {
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });
    let link = document.querySelectorAll('a, .link');
    for (var i = 0; i < link.length; i++) {
      link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
      });
      link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');
      });
      cursor.classList.remove('cursor--hover');
    }
    console.log(location.pathname)
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