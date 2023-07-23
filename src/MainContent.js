
import react from "react";
import React, { useEffect, useState } from 'react';
import NameData from "./NameData";


let MainContent = () => {

     let styleOne = {

        position: 'relative',
        top: '-410.5px',
        left: '127px',
        fontSize: '22.5px',
        fontWeight: '600',
        color: 'black',
        zIndex:'-1'

    }

    let styleTwo = {

        position: 'relative',
        top: '-425.5px',
        left: '125px',
        color: 'orangered',
        zIndex: '-1',
        fontSize: '45px'

   }


    let styleThree = {

        position: 'relative',
        top: '-460px',
        left: '124.5px',
        fontSize: '45px',
        color: 'orangered',
        zIndex: '-1'

   }


    let firstImg = {

        width: "775px",
        position: 'relative',
        left: '685px',
        top: '-400px',
        height: '735px'

    }

    let styleFour = {

       position: 'relative',
       top: '-1000px',
       left: '131px'

    }



    let styleFive = {

      position: 'relative',
      top: '-980px',
      width: '410px',
      left: '129.5px',
      lineHeight: '40px',
      fontFamily: 'Gill Sans',
      fontSize: '18px'

    }


    let secondImg = {

      width: '700px',
      position: 'relative',
      top: '-800px',
      left: '100px',
      height: '720px'

    }

    let styleSix = {

      position: 'relative',
      top: '-1295px',
      left: '920px'

    }

    let styleSeven = {

      position: 'relative',
      top: '-1273.5px',
      left: '920.5px',
      width: '410px',
      lineHeight: '40px',
      fontSize: '18px',
      fontFamily: 'Gill Sans'

    }


    let thirdImg = {

       position: 'relative',
       left: '710px',
       top: '-1130px',
       width: '750px',
       height: '750px'

    }


    let styleEight = {

        position: 'relative',
        top: '-1700px',
        left: '160px'
  
    }


    let styleNine = {

     
        position: 'relative',
        top: '-1675px',
        left: '160px',
        fontFamily: 'Gill Sans',
        width: '400px',
        fontSize: '18px',
        lineHeight: '40px'

    }

       
      let parallaxStyle = {
      
        backgroundImage: 'url(http://www.proctorcc.com/wp-content/uploads/2016/07/services-construction-management.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
     
      };


        


       let dataFive = NameData.map(value => 
        
        <header style={{position: 'relative', top: '-2055px', left: '100px'}}>

         <h1 style={{color: "white", fontSize: "22.5px", fontWeight: '600'}}>{value.nameOne}</h1>
         <h1 style={{color: 'orangered', fontSize: '45px', marginTop: '-8px'}}>{value.nameTwo}</h1>
         <p style={{color: 'white', width: '500px', marginTop: '-8.5px', lineHeight: '35px', fontFamily: 'sans-serif'}}>{value.nameThree}</p>
 
         <h1 style={{color: "white", fontSize: '65px', marginBottom: '70px'}}>{value.number1}</h1>
         <h1 style={{color: 'white', fontSize: '65px', position: 'relative', top: '-156px', left: '220px'}}>{value.number2}</h1>
         <h1 style={{color: "white", fontSize: "65px", position: 'relative', top: '-285px', left: '398.5px'}}>{value.number3}</h1>
         <h1 style={{color: "white", fontSize: '65px', position: 'relative', top: "-415px", left: '600px'}}>{value.number4}</h1>
         
         
         <p style={{position: 'relative', top: '-470px', color: 'white'}}>{value.establishment}</p>
         <p style={{position: 'relative', left: '223px', color: 'black', top: '-505px', color: 'white'}}>{value.projects}</p>
         <p style={{position: 'relative', position: 'relative', left: '415px', top: '-540px', color: 'white'}}>{value.employees}</p>
         <p style={{position: 'relative', position: 'relative', left: '615px', top: '-577px', color: 'white'}}>{value.partners}</p>
      
        

        </header>
        
        );
    
        


        
        
   return (

   

     <div>

     
 
  
         
       <div>


       <h1 style={styleOne}>Building Is What We Do</h1>
       <h1 style={styleTwo}>MCR Construction Is</h1>
       <h1 style={styleThree}>Leading Quality Projects</h1>

       </div>



   

      <div>

      <img style={firstImg} src='https://www.cavendishprofessionals.com/wp-content/uploads/2019/05/Construction-building-min.jpg' />
      <h1 style={styleFour}>Commercial</h1>
      <p style={styleFive}>Commercial real estate is an excellent opportunity for investing and generating outside income. There are numerous people over the years that have started to invest in commercial real estate, with this type of property being sold and purchased on a regular basis, this could be a great way to invest your money with the potential of a good return. Before anyone ever decides to invest in the commercial market, it is extremely important to understand the industry and all the components surrounding it</p>

      </div>


   


      <div>


       <img style={secondImg} src="https://g.foolcdn.com/editorial/images/440687/infrastructure.jpg" />
       <h1 style={styleSix}>Infrastructure</h1>
       <p style={styleSeven}>Infrastructure includes a variety of systems and structures where physical components are required such as the electrical grid across a city, state, or country. While the facilities, equipment, or similar physical assets like bridges and roads are essential to an economy, infrastructure also enables citizens to participate in the social and economic community and provides them with necessities such as food and water.</p>


      </div>


      
       


       <div>

       <img style={thirdImg} src="https://media.consumeraffairs.com/files/news/New_Home_Construction__alisonhancock_-_Fotolia.com.jpg" />
       <h1 style={styleEight}>Residential</h1>
       <p style={styleNine}>In certain residential areas, especially rural, large tracts of land may have no services whatever, such that residents seeking services must use a motor vehicle or other transportation, so the need for transportation has resulted in land development following existing or planned transport infrastructure such as rail and road. Development patterns may be regulated by restrictive covenants contained in the deeds to the properties in the development and may also result from or be reinforced by zoning.</p>

      </div>

    



       
        

        <div>

       <div className="parallax-image" style={parallaxStyle}></div>

        {dataFive}
        
      </div>

       

       



    </div>

    

);


}



export default MainContent;
