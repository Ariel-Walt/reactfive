import react from "react";
import './App.css';
import Home from "./Home"
import ServicesBTN from "./ServicesBTN";
import ProjectsBTN from "./ProjectsBTN.";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';


function App() {



  const [showContent, setShowContent] = useState(false);

  const handleToggleContent = () => {
    setShowContent(!showContent); 

  };



  
 const [removeNavBar, setremoveNavBar] = useState(true);

 let handleNavBar = () => {                         // Make Navbar go away when Image is clicked //

     setremoveNavBar(!removeNavBar);
 }



 const [appearNavBar, setappearNavBar] = useState(false);

 let handleappearNavBar = () => {                     // Make the NavBar reappear when X icon is clicked //

      setappearNavBar(!appearNavBar);

 }


 
 



return (

  <BrowserRouter>
   <CSSTransition
       in={showContent} // if its true will display the transition effects 
       timeout={1750} // 1750 seconds // 300 ml seconds 
       classNames="fade"
        // dont use the unmountExit it makes the code disappear 
  >
 
 

<div>

{removeNavBar && (

<main>


   <NavLink to="/" className="linkStylesMRC" onClick={handleToggleContent}>

    <h1>MCR</h1>
    <p>Construction</p>

   </NavLink>


 </main>

)}


   {appearNavBar &&  (

     <main>


    <NavLink to="/" className="linkStylesMRC" onClick={handleToggleContent}>

     <h1>MCR</h1>
     <p>Construction</p>

    </NavLink>


    </main>
      
   )}



    {removeNavBar && (
  
     <nav className="flex-container2"> 

     <div className="flex-item"><NavLink to="/services" className="linkStyles" onClick={handleToggleContent}><span>Services</span></NavLink></div>
     <div className='flex-item'><NavLink to="/projects" className="linkStyles2" onClick={handleToggleContent}><span>Projects</span></NavLink></div>
     <div className="flex-item"><NavLink to="/about"  className="linkStyles3"><span>About Us</span></NavLink></div>
     <div className="flex-item"><NavLink to="/careers" className="linkStyles4"><span>Careers</span></NavLink></div>
     <div className="flex-item"><NavLink to="/contact" className="linkStyles6"><span>Contact</span></NavLink></div>
     <div className="linkStyles5">Call Now</div>
           
     </nav>
    )}





    {appearNavBar && (


      <nav className="flex-container2"> 

    <div className="flex-item"><NavLink to="/services" className="linkStyles" onClick={handleToggleContent}><span>Services</span></NavLink></div>
    <div className='flex-item'><NavLink to="/projects" className="linkStyles2" onClick={handleToggleContent}><span>Projects</span></NavLink></div>
    <div className="flex-item"><NavLink to="/about"  className="linkStyles3"><span>About Us</span></NavLink></div>
    <div className="flex-item"><NavLink to="/careers" className="linkStyles4"><span>Careers</span></NavLink></div>
    <div className="flex-item"><NavLink to="/contact" className="linkStyles6"><span>Contact</span></NavLink></div>
    <div className="linkStyles5">Call Now</div>
      
     </nav>

    )}


        

         <Routes>

             <Route path="/" element={<Home />} />
             <Route path="/services" element={<ServicesBTN />} />
            <Route path="projects" element={<ProjectsBTN handleNavBar1={handleNavBar} handleappearNavBar1={handleappearNavBar} />} /> 

          </Routes>
      
   

</div>

  </CSSTransition>
</BrowserRouter>

);

}

 export default App;

 

  