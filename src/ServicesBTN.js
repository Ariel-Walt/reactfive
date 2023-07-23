
import react from "react";
import Services from "./Services";


let ServicesBTN = () => {


 let serviceStyle1 = {

    fontSize: '22.5px',
    fontWeight: '600',
 }

 let serviceStyle2 = {

     fontSize: '45px',
     color: 'orangered',
     position: 'relative',
     top: '-20px'

 }

   let serviceStyles3 = {
 
    fontSize: '45px',
    color: 'orangered',
    position: 'relative',
    top: '-50px'

   }


   let serviceStyle4 = {

    width: '470px',
    lineHeight: '32px',
    fontFamily: 'Gill Sans',
    fontSize: '18px',
    fontWeight: '350',
    position: 'relative',
    top: '-60px'

   }


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

    
<div>

  {Services.map(value => (
    
    <div>

     <header style={{position: 'relative', left: '120px', top: '30px'}}>

     <h1 style={serviceStyle1}>{value.ourServices}</h1>
     <h1 style={serviceStyle2}>{value.servicenameOne}</h1>
     <h1 style={serviceStyles3}>{value.servicenameTwo}</h1>
     <p style={serviceStyle4}>{value.servicePara}</p>

    </header>


     <header style={{position: 'relative', left: '88px', top: '185px'}}>
  
            <h1 style={{fontWeight: '400', fontFamily: 'gill-sans', fontSize: '30px'}}>{value.commercialConstr}</h1>
            <p style={{width: '470px', lineHeight: '35.5px', fontWeight: '350', fontFamily: 'Gill Sans', fontSize: '17px'}}>{value.commercialconstrPara}</p>

      </header>


     <header style={{position: 'relative', top: '520px', left: '950px', zIndex: '1'}}>

             <h1 style={{fontWeight: '400', fontFamily: 'gill-sans', fontSize: '30px'}}>{value.residentialConstr}</h1>
             <p style={{width: '470px', lineHeight: '35.5px', fontWeight: '350', fontFamily: 'Gill Sans', fontSize: '17px'}}>{value.residentialconstrPara}</p>

     </header>



     <header style={{position: 'relative', top: '820px', left: '100px'}}>

             <h1 style={{fontWeight: '400', fontFamily: 'gill-sans', fontSize: '30px'}}>{value.preConstr}</h1>
             <p style={{width: '470px', lineHeight: '35.5px', fontWeight: '350', fontFamily: 'Gill Sans', fontSize: '17px'}}>{value.preconstrPara}</p>
     </header>


      <header style={{position: 'relative', left: '965px', zIndex: '1', top: '1150px'}}>

              <h1 style={{fontWeight: '400', fontFamily: 'gill-sans', fontSize: '30px'}}>{value.specialPro}</h1>
              <p style={{width: '470px', lineHeight: '35.5px', fontWeight: '350', fontFamily: 'Gill Sans', fontSize: '17px'}}>{value.specialproPara}</p>

      </header>


      <header style={{position: 'relative', left: '105px', top: '1450px'}}>

              <h1 style={{fontWeight: '400', fontFamily: 'gill-sans', fontSize: '30px'}}>{value.siteManagement}</h1>
              <p style={{width: '470px', lineHeight: '35.5px', fontWeight: '350', fontFamily: 'Gill Sans', fontSize: '17px'}}>{value.siteManagementPara}</p>

      </header>



      <header style={{position: 'relative', left: '1000px', top: '1735px', zIndex: '1'}}>

              <h1 style={{fontWeight: '400', fontFamily: 'gill-sans', fontSize: '30px'}}>{value.infrastructureConstr}</h1>
              <p style={{width: '470px', lineHeight: '35.5px', fontWeight: '350', fontFamily: 'Gill Sans', fontSize: '17px'}}>{value.infrastructureconstrPara}</p>


     </header>

   </div>
    
    ))}



    <div>

     <img style={{width: '850px', position: "relative", left: "585px", top: "-2000px"}} src="https://www.trimarkproperties.com/gainesville/commercial-real-estate/Ingenuity/assets/images/gallery/exterior-1.jpg" height="700px" />
     <img style={{width: '800px', position: 'relative', left: '100px', top: '-2004px'}} src="https://www.berbay.com/wp/wp-content/uploads/2017/09/Real-estate-Storytelling.jpg" height="650px" />
     <img style={{width: '815px', position: 'relative', left: '615px', top: '-2008px'}} src="https://lemacon.com/wp-content/uploads/2020/01/PreConstructionImage.jpg" height="645px" />
     <img style={{width: '800px', position: 'relative', left: '105px', top: '-2012px'}} src="https://images.adsttc.com/media/images/5195/64bd/b3fc/4bc8/9b00/006c/large_jpg/069-hr-FNC_01.jpg?1368745135" height='645px' />
     <img style={{width: '800px', position: 'relative', left: '635px', top: '-2016px'}} src="https://az505806.vo.msecnd.net/cms/c5e01cf7-d140-4442-86a2-85a8ec25bd50/a1ec53b7-cecf-4d9e-a362-3c4be059cd93.jpg" height='630px' />
     <img style={{width: '825px', position: 'relative', top: '-2020px', left: '110px'}} src="https://www.dmagroup.co.uk/wp-content/uploads/2018/10/shutterstock_622211642-e1542980458353.jpg" height='615px' />

    </div>
    
    


    
    <div id="footer" className="footer2">

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









</div>
    



);



}

export default ServicesBTN;



