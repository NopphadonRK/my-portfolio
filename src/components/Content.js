import { Routes, Route } from "react-router-dom";
import "./Content.css";
import About from "./MenuItems/About";
import Contact from "./MenuItems/Contact";
import Home from "./MenuItems/Home";
import Projects from "./MenuItems/Projects";
import Skill from "./MenuItems/Skill";

function Content() {
  return (
    <div className="Content">

      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        
      </Routes>
    </div>
  );
}

export default Content;
