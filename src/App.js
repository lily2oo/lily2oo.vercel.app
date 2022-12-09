import './App.css';
import './fonts/Antro_Vectra.otf'
import Header from './routes/Header';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Works from "./routes/Works.jsx";
import Works_detail from './routes/Works_detail';
import Photos from "./routes/Photos.jsx";
import Prototypes from "./routes/Prototypes.jsx";
import Persona from './routes/Persona';
import About from "./routes/About.jsx";


const App = () => {
  return (
    <div id='global-container'>
      <Header />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/works/`} element={<Works />} />
        <Route path={`/works/detail/:paramsId`} element={<Works_detail />} />
        <Route path={`/photos/`} element={<Photos />} />
        <Route path={`/prototypes/`} element={<Prototypes />} />
        <Route path={`/persona/`} element={<Persona />} />
        <Route path={`/about/`} element={<About />} />
      </Routes>
    </div>
  );
};

export default App;