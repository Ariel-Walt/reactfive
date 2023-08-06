
import React, { createContext, useState } from 'react';

const RemoveNavContext = createContext();


export const NavProvider = ({ children }) => {

  const [hideNav, sethideNav] = useState(true);  //NavBar state //
  const [showContent, setShowContent] = useState(false); // For CSStransitions state //
  const [color, setColor] = useState("whitesmoke");




  const handleToggleContent = () => {
    setShowContent(!showContent);   // Transition effects for everything but being controlled globally/ fade in and out //

  };


  const handleToggleNav = () => {
    sethideNav(!hideNav);          // This is to handle the Navbar disappearing when the images are clicked //
    window.scrollTo(0, 0);
  };




  const handleToggleAppear = () => {     // This to to make the navbar reappear when the X- icon is clicked //
      sethideNav(true);
  };




  const handleColorChange = () => {
                                       // changes background color on Careers page //
       setColor("black");

  }



  return (
    <RemoveNavContext.Provider value={{ hideNav, handleToggleNav, handleToggleAppear, showContent, handleToggleContent, color, handleColorChange}}>

      {children}

    </RemoveNavContext.Provider>
  );
};




export default RemoveNavContext;

