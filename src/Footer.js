
import react from "react";
import React, { useEffect } from "react";

function Footer() {

    
let footerArray = [

{

   MCR: 'MCR',
   Construction: 'Construction'


},

    

   {

  headOffice: 'Head Office',
  name1: '500 Terry Francine Street',
  name2: 'San Francisco, CA 94158',

  name3: '123-456-7890',
  name4: 'info@mysite.com'



   },




  {

   Socials: 'Socials',
   name5: 'Facebook',
   name6: 'Instagram',
   name7: 'LindedIn' 


  },




 {
   
   Inquiries: "Inquiries",
   name8: "For any inquiries, questions",
   name9: 'or commendations, please',
   name10: 'call: 123-456-7890'



 }



];




      

return (


<div id="footer">

<hr style={{marginLeft: '140px', marginRight: '140px', position: 'relative', top: '-60px'}} /> 

{footerArray.map(result => (

  <div>

<header style={{position: 'relative', left: "-525px", top: "15px"}}>
  <h1>{result.MCR}</h1>
  <p style={{position: 'relative', top: "-25px", left: '5px'}}>{result.Construction}</p>
</header>


<header style={{position: 'relative', top: '-94px', left: '-150px'}}>

  <h1 style={{fontSize: '28px', fontWeight: '450'}}>{result.headOffice}</h1>
  
  <p>{result.name1}</p>
  <p>{result.name2}</p>
  <p>{result.name3}</p>
  <p>{result.name4}</p>

</header>

  
   <header style={{position: 'relative', left: '130px', top: '-303px'}}>

 <h1 style={{fontSize: '28px', fontWeight: '450'}}>{result.Socials}</h1>

 <p>{result.name5}</p>
 <p>{result.name6}</p>
 <p>{result.name7}</p>

   </header>


<header style={{position: 'relative', left: '415px', top: '-480.5px'}}>

  
    <h1 style={{fontSize: '28px', fontWeight: '450'}}>{result.Inquiries}</h1>

    <p>{result.name8}</p>
    <p>{result.name9}</p>
    <p>{result.name10}</p>

    

</header>


  </div>
  
  ))}
  

 
 


 
</div>

);




}

export default Footer;
