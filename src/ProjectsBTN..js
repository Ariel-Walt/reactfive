 
 import react from "react";
 import React, { useState, useEffect} from "react";
 import { IoCloseOutline } from "react-icons/io5";
 import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
 import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
 import 'pure-react-carousel/dist/react-carousel.es.css';



 let ProjectsBTN = (props) => {

  let projectsStyle1 = {

    fontSize: '22.5px',
    fontWeight: '600',
 }

  let projectsStyle2 = {

    fontSize: '45px',
    color: 'orangered',
    position: 'relative',
    top: '-25px'

  }

  let projectsStyle3 = {

    width: '470px',
    lineHeight: '32px',
    fontFamily: 'Gill Sans',
    fontSize: '18px',
    fontWeight: '350',
    position: 'relative',
    top: '-40px'

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
    

     const [removeImg1, setremoveImg1] = useState(true);
      
      const handleRemoveImg1 = () => {       
                                                  // This get rid of the images and headings when the images is clicked 
          setremoveImg1(!removeImg1);
      }



  
        const [Xicon, setXicon] = useState(false);
  
        const handleXicon = () => {
         setXicon(!Xicon);
       }
  
  
  
       let handleNavRemove = () => {
  
        handleRemoveImg1();
        props.handleNavBar1();
        handleXicon();
        
       }

  
       let Xicon1 = () => {
  
        handleremoveAllCarousels();
        props.handleappearNavBar1();
        setremoveImg1(true);
        
       }


       

       

       useEffect(() => {
  
        let images1 = document.querySelectorAll('.removeImg');
        let footerRemove = document.getElementById('removeFooter');
        let hr = document.getElementById('hr1');

         
        let handleRemoveFooter = () => {
  
          footerRemove.style.color = 'transparent'
          hr.style.display = 'none'
          window.scrollTo(0, 0); // makes sure that whatever image is clicked brings it back to the top //
          
         }

         images1.forEach((img) => {
          img.addEventListener('click', handleRemoveFooter); 
            // This helps when you need to click on all the images to get rid of the footer/ must use ForEach
        });


        return () => {
          images1.forEach((img) => {
            img.removeEventListener('click', handleRemoveFooter);
            
          });
        }

       },[])


  
       
       
  
  
       const [carousel1, setCarousel1] = useState(false);
  
       let handleCarousel1 = () => {
  
         setCarousel1(!carousel1);
  
       }
  
       const [carousel2, setCarousel2] = useState(false);
  
       let handleCarousel2 = () => {
  
         setCarousel2(!carousel2);
  
       }
  
       const [carousel3, setCarousel3] = useState(false); 
  
       let handleCarousel3 = () => {
  
          setCarousel3(!carousel3);
  
       }
       
       
       const [carousel4, setCarousel4] = useState(false);
  
       let handleCarousel4 = () => {
  
           setCarousel4(!carousel4);
  
       }
  
  
       const [carousel5, setCarousel5] = useState(false);
  
       let handleCarousel5 = () => {
  
          setCarousel5(!carousel5);
  
       }
  
       const [carousel6, setCarousel6] = useState(false);
  
       
       let handleCarousel6 = () => {
  
            setCarousel6(!carousel6);
  
       }
  
  
       const [carousel7, setCarousel7] = useState(false);
  
       let handleCarousel7 = () => {
  
          setCarousel7(!carousel7);
  
       }
  
  
       const [carousel8, setCarousel8] = useState(false);
  
       let handleCarousel8 = () => {
  
           setCarousel8(!carousel8);
  
       }
  
  
       const [carousel9, setCarousel9] = useState(false);
  
       let handleCarousel9 = () => {
  
            setCarousel9(!carousel9);
       }
       
       const [removeAllCarousels, setremoveAllCarousels] = useState(true);
  
       
       let handleremoveAllCarousels = () => {
  
          setremoveAllCarousels(!removeAllCarousels);
  
       }


      
     return (

      <div>

      {removeImg1 && (
   
      <header style={{position: 'relative', left: '130px', top: '30px'}}>
   
      <h1 style={projectsStyle1}>Our Projects</h1> 
      <h1 style={projectsStyle2}>We Build Projects That Last</h1>
      <p style={projectsStyle3}>In the construction industry a Project Manager is highly needed, like in any industry the Project Manager has many responsibilities, passion for multitasking, communication and technical skills.</p>
   
      </header>
    
      )}


     


   
       {removeImg1 && ( 
   
   
       <div className="flex-container">
   
       <div className="flex-item1" onClick={handleNavRemove}>
   
        <img onClick={handleCarousel1} id="height1" className="removeImg && provider" src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg" />
        <h2 style={{fontWeight: '400'}}>Angela Residence</h2>
   
       </div>
   
   
   
       <div className="flex-item2" onClick={handleNavRemove}>
   
       <img onClick={handleCarousel2} id="height1" className="removeImg && provider" src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg" />
       <h2 style={{fontWeight: '400'}}>Sam Valley <span id="highway">Highway</span></h2>
   
   
       </div>
   
       <div className="flex-item3" onClick={handleNavRemove}>
   
        <img onClick={handleCarousel3} id="height1" className="removeImg && provider" src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg" />
        <h2 style={{fontWeight: '400'}}>Irving Industrial <span id="region">Region</span></h2>
   
   
       </div>
   
       <div className="flex-item4" onClick={handleNavRemove}>
   
        <img onClick={handleCarousel4} id="height1" className="removeImg && provider" src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg" />
        <h2 style={{fontWeight: '400'}}>Mission Lake <span id="bridge">Bridge</span></h2>
   
   
       </div>
   
       <div className="flex-item5" onClick={handleNavRemove}>
   
        <img onClick={handleCarousel5} id="height1" className="removeImg && provider" src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg" />
        <h2 style={{fontWeight: '400'}}>Halston Parkway</h2>
   
   
       </div>
   
       <div className="flex-item6" onClick={handleNavRemove}>
   
       <img onClick={handleCarousel6} id="height1" className="removeImg && provider" src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg" />
       <h2 style={{fontWeight: '400'}}>Sunnydale <span id="apartment">Apartment</span> <span id="complex">Complex</span></h2>
   
   
       </div>
   
       <div className="flex-item7" onClick={handleNavRemove}>
   
       <img onClick={handleCarousel7} id="height1" className="removeImg && provider" src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg" />
       <h2 style={{fontWeight: '400'}}>North Campus HQ</h2>
   
   
       </div>
   
       <div className="flex-item8" onClick={handleNavRemove}>
   
        <img onClick={handleCarousel8} id="height1" className="removeImg && provider" src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg" />
        <h2 style={{fontWeight: '400'}}>Oceanside Railway <span id="station">Station</span></h2>
   
   
   
       </div>
   
       <div className="flex-item9" onClick={handleNavRemove}>
   
       <img onClick={handleCarousel9} id="height1" className="removeImg && provider" src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg" />
       <h2 style={{fontWeight: '400'}}>Mills Way <span id="interchange">Interchange</span></h2>
    
   
       </div>
   
      </div>
      
       )}




<div id="removeFooter">
   
   <div id="footer3"> 

   <div id="footer" className="footer2">

  <hr id="hr1" style={{marginLeft: '140px', marginRight: '140px', position: 'relative', top: '-60px'}} /> 


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


</div>

      
{Xicon && (
   
   <div>
   
   <IoCloseOutline onClick={Xicon1} style={{fontSize: '60px', position: 'relative', top: '-2365px', left: '1415px', cursor: 'pointer'}} />  
   
   </div>

   )}
   
   
  
    {carousel1 && removeAllCarousels && (   //This both makes the carousel appear and disappear//
   
   
   <CarouselProvider style={{position: 'relative', top: '-2365px', left: '200px'}}
      
         naturalSlideWidth={100}
         naturalSlideHeight={50}
         totalSlides={9}
   
      >
       
         <Slider>
   
         <Slide index={1}><img className="provider" style={{width: '750px', height: '550px'}} src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Angela Residence</h1><p style={{width: '280px', lineHeight: '25px'}}>Living in residences allows the student to focus on his studies without worrying about the economic concepts of having a home, because one single bill covers everything. No need to worry about the costs of electricity, water, internet.</p></header></Slide>
         <Slide index={9}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mills Way Interchnage</h1><p style={{width: '280px', lineHeight: '25px'}}>Interchange is important because it helps drive the growth of the payment system. Interchange fees earned by card-issuing banks provide financial motivation for them to promote and issue more cards to more cardholders. Interchange also helps cover the risk associated with doing so.</p></header></Slide> 
         <Slide index={8}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35x'}}>Oceanside Railway Station</h1><p style={{width: '335px', lineHeight: '25px'}}>Regional rail services carry more than three times the numbers of passengers than
   the much higher profile long distance (Inter-City) services. As the UK’s city regions
   increasingly develop their service sector economies and concentrate employment
   in city centres, rail enables large numbers of people to be moved efficiently
   and effectively into these ever more congested places.</p></header></Slide>
         <Slide index={7}><img className="provider" style={{width: '750px', height: '550px'}} src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Norht Campus HQ</h1><p style={{width: '280px', lineHeight: '25px'}}>Living on campus enables you to be in the heart of things, and it also ensures that you’re part of a community. A campus offers more opportunity for social interaction and connection with other students than a city university, which means more opportunities to make friends.</p></header></Slide>
         <Slide index={6}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sunnydale Apartment Complex</h1><p style={{width: '350px', lineHeight: '25px', position: 'relative', left: '15px'}}>The first benefit of living in an apartment is the financial aspect of renting. Rent is generally cheaper than a mortgage. In addition to an overall lower monthly payment, other financial components such as upkeep and utilities are usually lower. This is due to the smaller space and the overall responsibility of a landlord/owner versus a tenant.</p></header></Slide>
         <Slide index={5}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Halston Parkway</h1><p style={{width: '280px', lineHeight: '25px'}}>Four parkways are stand-alone units of the National Park System: Blue Ridge Parkway, George Washington Parkway, John D. Rockefeller Memorial Parkway, and Natchez Trace Parkway. Others are managed as part of another unit.</p></header></Slide>
         <Slide index={4}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mission Lake Bridge</h1><p style={{width: '280px', lineHeight: '25px'}}>The bridges take a special role, due its function to connect two different points, crossing valleys, rivers, lakes and cliffs. Bridges are needed on land transportation infrastructure because they connect different points that usually can be inaccessible.</p></header></Slide>
         <Slide index={3}><img className="provider" style={{width: '750px', height: '550px'}} src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Irving Industrial Region</h1><p style={{width: '280px', lineHeight: '25px'}}>Regions in industrial transition have a comparatively strong potential to seize the chances offered
   by current megatrends to revive economic growth and productivity
   in industrial transition often have a strong legacy in manufacturing and sophisticated innovation activities
   in local core industries</p></header></Slide>
         <Slide index={2}><img className="provider" style={{width: '750px', height: '550px'}} src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sam Valley Highway</h1><p style={{width: '280px', lineHeight: '25px'}}>Highways play an important role in making travel easier and more expedient. This is of great assistance whether traveling for work or play as well as travel involving transporting goods. The highway system connects large metropolises and rural communities across the country.</p></header></Slide>
   
   
         </Slider>
   
   
          <ButtonBack style={{border: 'none', backgroundColor: 'whitesmoke'}} >
   
          <SlArrowLeft style={{fontSize: '25px', position: 'relative', left: '-63px', top: '-496px'}} />
   
          </ButtonBack>
   
   
   
          <ButtonNext style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
           <SlArrowRight style={{fontSize: '25px', position: 'relative', top: '-499px', left: '737px'}} />
   
          </ButtonNext>
   
   
        </CarouselProvider>
        
         
   )}



   
   
  
     {carousel2 && removeAllCarousels &&  (   //This both makes the carousel appear and disappear//
   
        
       <CarouselProvider style={{position: 'relative', top: '-2365px', left: '200px'}}
      
       naturalSlideWidth={100}
       naturalSlideHeight={50}
       totalSlides={9}
       
       
       >
   
    <Slider>
   
     <Slide index={2}><img className="provider" style={{width: '750px', height: '550px'}} src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sam Valley Highway</h1><p style={{width: '280px', lineHeight: '25px'}}>Highways play an important role in making travel easier and more expedient. This is of great assistance whether traveling for work or play as well as travel involving transporting goods. The highway system connects large metropolises and rural communities across the country.</p></header></Slide>
     <Slide index={1}><img className="provider" style={{width: '750px', height: '550px'}} src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Angela Residence</h1><p style={{width: '280px', lineHeight: '25px'}}>Living in residences allows the student to focus on his studies without worrying about the economic concepts of having a home, because one single bill covers everything. No need to worry about the costs of electricity, water, internet.</p></header></Slide>
         <Slide index={9}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mills Way Interchnage</h1><p style={{width: '280px', lineHeight: '25px'}}>Interchange is important because it helps drive the growth of the payment system. Interchange fees earned by card-issuing banks provide financial motivation for them to promote and issue more cards to more cardholders. Interchange also helps cover the risk associated with doing so.</p></header></Slide> 
         <Slide index={8}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35x'}}>Oceanside Railway Station</h1><p style={{width: '335px', lineHeight: '25px'}}>Regional rail services carry more than three times the numbers of passengers than
   the much higher profile long distance (Inter-City) services. As the UK’s city regions
   increasingly develop their service sector economies and concentrate employment
   in city centres, rail enables large numbers of people to be moved efficiently
   and effectively into these ever more congested places.</p></header></Slide>
         <Slide index={7}><img className="provider" style={{width: '750px', height: '550px'}} src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Norht Campus HQ</h1><p style={{width: '280px', lineHeight: '25px'}}>Living on campus enables you to be in the heart of things, and it also ensures that you’re part of a community. A campus offers more opportunity for social interaction and connection with other students than a city university, which means more opportunities to make friends.</p></header></Slide>
         <Slide index={6}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sunnydale Apartment Complex</h1><p style={{width: '350px', lineHeight: '25px', position: 'relative', left: '15px'}}>The first benefit of living in an apartment is the financial aspect of renting. Rent is generally cheaper than a mortgage. In addition to an overall lower monthly payment, other financial components such as upkeep and utilities are usually lower. This is due to the smaller space and the overall responsibility of a landlord/owner versus a tenant.</p></header></Slide>
         <Slide index={5}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Halston Parkway</h1><p style={{width: '280px', lineHeight: '25px'}}>Four parkways are stand-alone units of the National Park System: Blue Ridge Parkway, George Washington Parkway, John D. Rockefeller Memorial Parkway, and Natchez Trace Parkway. Others are managed as part of another unit.</p></header></Slide>
         <Slide index={4}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mission Lake Bridge</h1><p style={{width: '280px', lineHeight: '25px'}}>The bridges take a special role, due its function to connect two different points, crossing valleys, rivers, lakes and cliffs. Bridges are needed on land transportation infrastructure because they connect different points that usually can be inaccessible.</p></header></Slide>
         <Slide index={3}><img className="provider" style={{width: '750px', height: '550px'}} src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Irving Industrial Region</h1><p style={{width: '280px', lineHeight: '25px'}}>Regions in industrial transition have a comparatively strong potential to seize the chances offered
   by current megatrends to revive economic growth and productivity
   in industrial transition often have a strong legacy in manufacturing and sophisticated innovation activities
   in local core industries</p></header></Slide>
   
   
    </Slider>
   
   
    <ButtonBack style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
    <SlArrowLeft style={{fontSize: '25px', position: 'relative', left: '-63px', top: '-496px'}} />
   
    </ButtonBack>
   
   
   
    <ButtonNext style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
     <SlArrowRight style={{fontSize: '25px', position: 'relative', top: '-498px', left: '737px'}} />
   
    </ButtonNext>
   
       </CarouselProvider>
           
   
   )}


   
     {carousel3 && removeAllCarousels && (
   
        
     <CarouselProvider style={{position: 'relative', top: '-2365px', left: '200px'}}
      
     naturalSlideWidth={100}
     naturalSlideHeight={50}
     totalSlides={9}
   
   
     >
   
   
   
    <Slider>
     
    <Slide index={3}><img className="provider" style={{width: '750px', height: '550px'}} src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Irving Industrial Region</h1><p style={{width: '280px', lineHeight: '25px'}}>Regions in industrial transition have a comparatively strong potential to seize the chances offered
   by current megatrends to revive economic growth and productivity, but face challenges. Regions
   in industrial transition often have a strong legacy in manufacturing and sophisticated innovation activities
   in local core industries</p></header></Slide>
   <Slide index={2}><img className="provider" style={{width: '750px', height: '550px'}} src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sam Valley Highway</h1><p style={{width: '280px', lineHeight: '25px'}}>Highways play an important role in making travel easier and more expedient. This is of great assistance whether traveling for work or play as well as travel involving transporting goods. The highway system connects large metropolises and rural communities across the country.</p></header></Slide>
   <Slide index={1}><img className="provider" style={{width: '750px', height: '550px'}} src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Angela Residence</h1><p style={{width: '280px', lineHeight: '25px'}}>Living in residences allows the student to focus on his studies without worrying about the economic concepts of having a home, because one single bill covers everything. No need to worry about the costs of electricity, water, internet.</p></header></Slide>
   <Slide index={9}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mills Way Interchnage</h1><p style={{width: '280px', lineHeight: '25px'}}>Interchange is important because it helps drive the growth of the payment system. Interchange fees earned by card-issuing banks provide financial motivation for them to promote and issue more cards to more cardholders. Interchange also helps cover the risk associated with doing so.</p></header></Slide> 
   <Slide index={8}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35x'}}>Oceanside Railway Station</h1><p style={{width: '335px', lineHeight: '25px'}}>Regional rail services carry more than three times the numbers of passengers than
   the much higher profile long distance (Inter-City) services. As the UK’s city regions
   increasingly develop their service sector economies and concentrate employment
   in city centres, rail enables large numbers of people to be moved efficiently
   and effectively into these ever more congested places.</p></header></Slide>
   <Slide index={7}><img className="provider" style={{width: '750px', height: '550px'}} src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Norht Campus HQ</h1><p style={{width: '280px', lineHeight: '25px'}}>Living on campus enables you to be in the heart of things, and it also ensures that you’re part of a community. A campus offers more opportunity for social interaction and connection with other students than a city university, which means more opportunities to make friends.</p></header></Slide>
   <Slide index={6}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sunnydale Apartment Complex</h1><p style={{width: '350px', lineHeight: '25px', position: 'relative', left: '15px'}}>The first benefit of living in an apartment is the financial aspect of renting. Rent is generally cheaper than a mortgage. In addition to an overall lower monthly payment, other financial components such as upkeep and utilities are usually lower. This is due to the smaller space and the overall responsibility of a landlord/owner versus a tenant.</p></header></Slide>
   <Slide index={5}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Halston Parkway</h1><p style={{width: '280px', lineHeight: '25px'}}>Four parkways are stand-alone units of the National Park System: Blue Ridge Parkway, George Washington Parkway, John D. Rockefeller Memorial Parkway, and Natchez Trace Parkway. Others are managed as part of another unit.</p></header></Slide>
   <Slide index={4}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mission Lake Bridge</h1><p style={{width: '280px', lineHeight: '25px'}}>The bridges take a special role, due its function to connect two different points, crossing valleys, rivers, lakes and cliffs. Bridges are needed on land transportation infrastructure because they connect different points that usually can be inaccessible.</p></header></Slide>
   
    
   
   
   
    </Slider>
   
   
   <ButtonBack style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowLeft style={{fontSize: '25px', position: 'relative', left: '-63px', top: '-496px'}} />
   
   </ButtonBack>
   
   
   
   <ButtonNext style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowRight style={{fontSize: '25px', position: 'relative', top: '-498px', left: '737px'}} />
   
   </ButtonNext>
   
   
       </CarouselProvider>
   
     )}



    
   
      {carousel4 && removeAllCarousels &&  (
   
       <CarouselProvider style={{position: 'relative', top: '-2365px', left: '200px'}}
      
       naturalSlideWidth={100}
       naturalSlideHeight={50}
       totalSlides={9}
   
       >
        
   
        <Slider>
   
   <Slide index={4}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mission Lake Bridge</h1><p style={{width: '280px', lineHeight: '25px'}}>The bridges take a special role, due its function to connect two different points, crossing valleys, rivers, lakes and cliffs. Bridges are needed on land transportation infrastructure because they connect different points that usually can be inaccessible.</p></header></Slide>
   <Slide index={9}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mills Way Interchnage</h1><p style={{width: '280px', lineHeight: '25px'}}>Interchange is important because it helps drive the growth of the payment system. Interchange fees earned by card-issuing banks provide financial motivation for them to promote and issue more cards to more cardholders. Interchange also helps cover the risk associated with doing so.</p></header></Slide> 
   <Slide index={8}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35x'}}>Oceanside Railway Station</h1><p style={{width: '335px', lineHeight: '25px'}}>Regional rail services carry more than three times the numbers of passengers than
   the much higher profile long distance (Inter-City) services. As the UK’s city regions
   increasingly develop their service sector economies and concentrate employment
   in city centres, rail enables large numbers of people to be moved efficiently
   and effectively into these ever more congested places.</p></header></Slide>
   <Slide index={7}><img className="provider" style={{width: '750px', height: '550px'}} src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Norht Campus HQ</h1><p style={{width: '280px', lineHeight: '25px'}}>Living on campus enables you to be in the heart of things, and it also ensures that you’re part of a community. A campus offers more opportunity for social interaction and connection with other students than a city university, which means more opportunities to make friends.</p></header></Slide>
   <Slide index={6}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sunnydale Apartment Complex</h1><p style={{width: '350px', lineHeight: '25px', position: 'relative', left: '15px'}}>The first benefit of living in an apartment is the financial aspect of renting. Rent is generally cheaper than a mortgage. In addition to an overall lower monthly payment, other financial components such as upkeep and utilities are usually lower. This is due to the smaller space and the overall responsibility of a landlord/owner versus a tenant.</p></header></Slide>
   <Slide index={5}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Halston Parkway</h1><p style={{width: '280px', lineHeight: '25px'}}>Four parkways are stand-alone units of the National Park System: Blue Ridge Parkway, George Washington Parkway, John D. Rockefeller Memorial Parkway, and Natchez Trace Parkway. Others are managed as part of another unit.</p></header></Slide>
   <Slide index={3}><img className="provider" style={{width: '750px', height: '550px'}} src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Irving Industrial Region</h1><p style={{width: '280px', lineHeight: '25px'}}>Regions in industrial transition have a comparatively strong potential to seize the chances offered
   by current megatrends to revive economic growth and productivity
   in industrial transition often have a strong legacy in manufacturing and sophisticated innovation activities
   in local core industries</p></header></Slide>
        <Slide index={2}><img className="provider" style={{width: '750px', height: '550px'}} src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sam Valley Highway</h1><p style={{width: '280px', lineHeight: '25px'}}>Highways play an important role in making travel easier and more expedient. This is of great assistance whether traveling for work or play as well as travel involving transporting goods. The highway system connects large metropolises and rural communities across the country.</p></header></Slide>
        <Slide index={1}><img className="provider" style={{width: '750px', height: '550px'}} src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Angela Residence</h1><p style={{width: '280px', lineHeight: '25px'}}>Living in residences allows the student to focus on his studies without worrying about the economic concepts of having a home, because one single bill covers everything. No need to worry about the costs of electricity, water, internet.</p></header></Slide>
      
   
     </Slider>
   
   
   <ButtonBack style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowLeft style={{fontSize: '25px', position: 'relative', left: '-63px', top: '-496px'}} />
   
   </ButtonBack>
   
   
   
   <ButtonNext style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowRight style={{fontSize: '25px', position: 'relative', top: '-498px', left: '737px'}} />
   
   </ButtonNext>
   
   
     </CarouselProvider>
   
      )}



    
   
     {carousel5 && removeAllCarousels && (
   
   
     <CarouselProvider style={{position: 'relative', top: '-2365px', left: '200px'}}
      
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={9}
   
       >
   
     <Slider>
   
   
      <Slide index={5}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Halston Parkway</h1><p style={{width: '280px', lineHeight: '25px'}}>Four parkways are stand-alone units of the National Park System: Blue Ridge Parkway, George Washington Parkway, John D. Rockefeller Memorial Parkway, and Natchez Trace Parkway. Others are managed as part of another unit.</p></header></Slide>
      <Slide index={4}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mission Lake Bridge</h1><p style={{width: '280px', lineHeight: '25px'}}>The bridges take a special role, due its function to connect two different points, crossing valleys, rivers, lakes and cliffs. Bridges are needed on land transportation infrastructure because they connect different points that usually can be inaccessible.</p></header></Slide>
      <Slide index={3}><img className="provider" style={{width: '750px', height: '550px'}} src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Irving Industrial Region</h1><p style={{width: '280px', lineHeight: '25px'}}>Regions in industrial transition have a comparatively strong potential to seize the chances offered
   by current megatrends to revive economic growth and productivity, but face challenges. Regions
   in industrial transition often have a strong legacy in manufacturing and sophisticated innovation activities
   in local core industries</p></header></Slide>
      <Slide index={2}><img className="provider" style={{width: '750px', height: '550px'}} src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sam Valley Highway</h1><p style={{width: '280px', lineHeight: '25px'}}>Highways play an important role in making travel easier and more expedient. This is of great assistance whether traveling for work or play as well as travel involving transporting goods. The highway system connects large metropolises and rural communities across the country.</p></header></Slide>
      <Slide index={1}><img className="provider" style={{width: '750px', height: '550px'}} src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Angela Residence</h1><p style={{width: '280px', lineHeight: '25px'}}>Living in residences allows the student to focus on his studies without worrying about the economic concepts of having a home, because one single bill covers everything. No need to worry about the costs of electricity, water, internet.</p></header></Slide>
      <Slide index={7}><img className="provider" style={{width: '750px', height: '550px'}} src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Norht Campus HQ</h1><p style={{width: '280px', lineHeight: '25px'}}>Living on campus enables you to be in the heart of things, and it also ensures that you’re part of a community. A campus offers more opportunity for social interaction and connection with other students than a city university, which means more opportunities to make friends.</p></header></Slide>
      <Slide index={6}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sunnydale Apartment Complex</h1><p style={{width: '350px', lineHeight: '25px', position: 'relative', left: '15px'}}>The first benefit of living in an apartment is the financial aspect of renting. Rent is generally cheaper than a mortgage. In addition to an overall lower monthly payment, other financial components such as upkeep and utilities are usually lower. This is due to the smaller space and the overall responsibility of a landlord/owner versus a tenant.</p></header></Slide>
      <Slide index={8}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35x'}}>Oceanside Railway Station</h1><p style={{width: '335px', lineHeight: '25px'}}>Regional rail services carry more than three times the numbers of passengers than
     the much higher profile long distance (Inter-City) services. As the UK’s city regions
     increasingly develop their service sector economies and concentrate employment
     in city centres, rail enables large numbers of people to be moved efficiently
     and effectively into these ever more congested places.</p></header></Slide>
     <Slide index={9}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mills Way Interchnage</h1><p style={{width: '280px', lineHeight: '25px'}}>Interchange is important because it helps drive the growth of the payment system. Interchange fees earned by card-issuing banks provide financial motivation for them to promote and issue more cards to more cardholders. Interchange also helps cover the risk associated with doing so.</p></header></Slide> 
   
   
     </Slider>
   
   
   <ButtonBack style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowLeft style={{fontSize: '25px', position: 'relative', left: '-63px', top: '-496px'}} />
   
   </ButtonBack>
   
   
   
   <ButtonNext style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowRight style={{fontSize: '25px', position: 'relative', top: '-498px', left: '737px'}} />
   
   </ButtonNext>
   
   
     </CarouselProvider>
   
   
     )}


   
       {carousel6 && removeAllCarousels && (
   
      <CarouselProvider style={{position: 'relative', top: '-2365px', left: '200px'}}
      
         naturalSlideWidth={100}
         naturalSlideHeight={50}
         totalSlides={9}
   
        >
           
   
         <Slider>
   
     <Slide index={6}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px', position: 'relative', left: '-11px'}}>Sunnydale Apartment Complex</h1><p style={{width: '350px', lineHeight: '25px', position: 'relative', left: '15px'}}>The first benefit of living in an apartment is the financial aspect of renting. Rent is generally cheaper than a mortgage. In addition to an overall lower monthly payment, other financial components such as upkeep and utilities are usually lower. This is due to the smaller space and the overall responsibility of a landlord/owner versus a tenant.</p></header></Slide>
     <Slide index={5}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Halston Parkway</h1><p style={{width: '280px', lineHeight: '25px'}}>Four parkways are stand-alone units of the National Park System: Blue Ridge Parkway, George Washington Parkway, John D. Rockefeller Memorial Parkway, and Natchez Trace Parkway. Others are managed as part of another unit.</p></header></Slide>
     <Slide index={4}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mission Lake Bridge</h1><p style={{width: '280px', lineHeight: '25px'}}>The bridges take a special role, due its function to connect two different points, crossing valleys, rivers, lakes and cliffs. Bridges are needed on land transportation infrastructure because they connect different points that usually can be inaccessible.</p></header></Slide>
     <Slide index={3}><img className="provider" style={{width: '750px', height: '550px'}} src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Irving Industrial Region</h1><p style={{width: '280px', lineHeight: '25px'}}>Regions in industrial transition have a comparatively strong potential to seize the chances offered
   by current megatrends to revive economic growth and productivity, but face challenges. Regions
   in industrial transition often have a strong legacy in manufacturing and sophisticated innovation activities
   in local core industries</p></header></Slide>
      <Slide index={2}><img className="provider" style={{width: '750px', height: '550px'}} src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sam Valley Highway</h1><p style={{width: '280px', lineHeight: '25px'}}>Highways play an important role in making travel easier and more expedient. This is of great assistance whether traveling for work or play as well as travel involving transporting goods. The highway system connects large metropolises and rural communities across the country.</p></header></Slide>
      <Slide index={1}><img className="provider" style={{width: '750px', height: '550px'}} src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Angela Residence</h1><p style={{width: '280px', lineHeight: '25px'}}>Living in residences allows the student to focus on his studies without worrying about the economic concepts of having a home, because one single bill covers everything. No need to worry about the costs of electricity, water, internet.</p></header></Slide>
      <Slide index={9}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mills Way Interchnage</h1><p style={{width: '280px', lineHeight: '25px'}}>Interchange is important because it helps drive the growth of the payment system. Interchange fees earned by card-issuing banks provide financial motivation for them to promote and issue more cards to more cardholders. Interchange also helps cover the risk associated with doing so.</p></header></Slide> 
   <Slide index={8}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35x'}}>Oceanside Railway Station</h1><p style={{width: '335px', lineHeight: '25px'}}>Regional rail services carry more than three times the numbers of passengers than
   the much higher profile long distance (Inter-City) services. As the UK’s city regions
   increasingly develop their service sector economies and concentrate employment
   in city centres, rail enables large numbers of people to be moved efficiently
   and effectively into these ever more congested places.</p></header></Slide>
   <Slide index={7}><img className="provider" style={{width: '750px', height: '550px'}} src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Norht Campus HQ</h1><p style={{width: '280px', lineHeight: '25px'}}>Living on campus enables you to be in the heart of things, and it also ensures that you’re part of a community. A campus offers more opportunity for social interaction and connection with other students than a city university, which means more opportunities to make friends.</p></header></Slide>
   
   
   
      </Slider>
   
   
   <ButtonBack style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowLeft style={{fontSize: '25px', position: 'relative', left: '-63px', top: '-496px'}} />
   
   </ButtonBack>
   
   
   
   <ButtonNext style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowRight style={{fontSize: '25px', position: 'relative', top: '-498px', left: '737px'}} />
   
   </ButtonNext>
   
      </CarouselProvider>
   
       )}


   
   
      {carousel7 && removeAllCarousels && (
   
       
   <CarouselProvider style={{position: 'relative', top: '-2365px', left: '200px'}}
      
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={9}
   
        >
     
     
     <Slider>
   
   <Slide index={7}><img className="provider" style={{width: '750px', height: '550px'}} src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Norht Campus HQ</h1><p style={{width: '280px', lineHeight: '25px'}}>Living on campus enables you to be in the heart of things, and it also ensures that you’re part of a community. A campus offers more opportunity for social interaction and connection with other students than a city university, which means more opportunities to make friends.</p></header></Slide>
   <Slide index={6}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sunnydale Apartment Complex</h1><p style={{width: '350px', lineHeight: '25px', position: 'relative', left: '15px'}}>The first benefit of living in an apartment is the financial aspect of renting. Rent is generally cheaper than a mortgage. In addition to an overall lower monthly payment, other financial components such as upkeep and utilities are usually lower. This is due to the smaller space and the overall responsibility of a landlord/owner versus a tenant.</p></header></Slide>
   <Slide index={5}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Halston Parkway</h1><p style={{width: '280px', lineHeight: '25px'}}>Four parkways are stand-alone units of the National Park System: Blue Ridge Parkway, George Washington Parkway, John D. Rockefeller Memorial Parkway, and Natchez Trace Parkway. Others are managed as part of another unit.</p></header></Slide>
   <Slide index={4}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mission Lake Bridge</h1><p style={{width: '280px', lineHeight: '25px'}}>The bridges take a special role, due its function to connect two different points, crossing valleys, rivers, lakes and cliffs. Bridges are needed on land transportation infrastructure because they connect different points that usually can be inaccessible.</p></header></Slide>
   <Slide index={3}><img className="provider" style={{width: '750px', height: '550px'}} src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Irving Industrial Region</h1><p style={{width: '280px', lineHeight: '25px'}}>Regions in industrial transition have a comparatively strong potential to seize the chances offered
   by current megatrends to revive economic growth and productivity, but face challenges. Regions
   in industrial transition often have a strong legacy in manufacturing and sophisticated innovation activities
   in local core industries</p></header></Slide>
    <Slide index={2}><img className="provider" style={{width: '750px', height: '550px'}} src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sam Valley Highway</h1><p style={{width: '280px', lineHeight: '25px'}}>Highways play an important role in making travel easier and more expedient. This is of great assistance whether traveling for work or play as well as travel involving transporting goods. The highway system connects large metropolises and rural communities across the country.</p></header></Slide>
    <Slide index={1}><img className="provider" style={{width: '750px', height: '550px'}} src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Angela Residence</h1><p style={{width: '280px', lineHeight: '25px'}}>Living in residences allows the student to focus on his studies without worrying about the economic concepts of having a home, because one single bill covers everything. No need to worry about the costs of electricity, water, internet.</p></header></Slide>
    <Slide index={9}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mills Way Interchnage</h1><p style={{width: '280px', lineHeight: '25px'}}>Interchange is important because it helps drive the growth of the payment system. Interchange fees earned by card-issuing banks provide financial motivation for them to promote and issue more cards to more cardholders. Interchange also helps cover the risk associated with doing so.</p></header></Slide> 
   <Slide index={8}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35x'}}>Oceanside Railway Station</h1><p style={{width: '335px', lineHeight: '25px'}}>Regional rail services carry more than three times the numbers of passengers than
   the much higher profile long distance (Inter-City) services. As the UK’s city regions
   increasingly develop their service sector economies and concentrate employment
   in city centres, rail enables large numbers of people to be moved efficiently
   and effectively into these ever more congested places.</p></header></Slide>
   
    </Slider>
   
   
   <ButtonBack style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowLeft style={{fontSize: '25px', position: 'relative', left: '-63px', top: '-496px'}} />
   
   </ButtonBack>
   
   
   
   <ButtonNext style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowRight style={{fontSize: '25px', position: 'relative', top: '-498px', left: '737px'}} />
   
   </ButtonNext>
   
   </CarouselProvider>
   
      )}


   
     {carousel8 && removeAllCarousels && (
   
   <CarouselProvider style={{position: 'relative', top: '-2365px', left: '200px'}}
      
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={9}
   
         >
   
  
   <Slider>
        
        <Slide index={8}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35x'}}>Oceanside Railway Station</h1><p style={{width: '335px', lineHeight: '25px'}}>Regional rail services carry more than three times the numbers of passengers than
     the much higher profile long distance (Inter-City) services. As the UK’s city regions
     increasingly develop their service sector economies and concentrate employment
     in city centres, rail enables large numbers of people to be moved efficiently
     and effectively into these ever more congested places.</p></header></Slide>
        <Slide index={7}><img className="provider" style={{width: '750px', height: '550px'}} src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Norht Campus HQ</h1><p style={{width: '280px', lineHeight: '25px'}}>Living on campus enables you to be in the heart of things, and it also ensures that you’re part of a community. A campus offers more opportunity for social interaction and connection with other students than a city university, which means more opportunities to make friends.</p></header></Slide>
        <Slide index={6}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sunnydale Apartment Complex</h1><p style={{width: '350px', lineHeight: '25px', position: 'relative', left: '15px'}}>The first benefit of living in an apartment is the financial aspect of renting. Rent is generally cheaper than a mortgage. In addition to an overall lower monthly payment, other financial components such as upkeep and utilities are usually lower. This is due to the smaller space and the overall responsibility of a landlord/owner versus a tenant.</p></header></Slide>
        <Slide index={5}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Halston Parkway</h1><p style={{width: '280px', lineHeight: '25px'}}>Four parkways are stand-alone units of the National Park System: Blue Ridge Parkway, George Washington Parkway, John D. Rockefeller Memorial Parkway, and Natchez Trace Parkway. Others are managed as part of another unit.</p></header></Slide>
        <Slide index={4}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mission Lake Bridge</h1><p style={{width: '280px', lineHeight: '25px'}}>The bridges take a special role, due its function to connect two different points, crossing valleys, rivers, lakes and cliffs. Bridges are needed on land transportation infrastructure because they connect different points that usually can be inaccessible.</p></header></Slide>
        <Slide index={3}><img className="provider" style={{width: '750px', height: '550px'}} src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Irving Industrial Region</h1><p style={{width: '280px', lineHeight: '25px'}}>Regions in industrial transition have a comparatively strong potential to seize the chances offered
   by current megatrends to revive economic growth and productivity
   in industrial transition often have a strong legacy in manufacturing and sophisticated innovation activities
   in local core industries</p></header></Slide>
        <Slide index={2}><img className="provider" style={{width: '750px', height: '550px'}} src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sam Valley Highway</h1><p style={{width: '280px', lineHeight: '25px'}}>Highways play an important role in making travel easier and more expedient. This is of great assistance whether traveling for work or play as well as travel involving transporting goods. The highway system connects large metropolises and rural communities across the country.</p></header></Slide>
        <Slide index={1}><img className="provider" style={{width: '750px', height: '550px'}} src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Angela Residence</h1><p style={{width: '280px', lineHeight: '25px'}}>Living in residences allows the student to focus on his studies without worrying about the economic concepts of having a home, because one single bill covers everything. No need to worry about the costs of electricity, water, internet.</p></header></Slide>
        <Slide index={9}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mills Way Interchnage</h1><p style={{width: '280px', lineHeight: '25px'}}>Interchange is important because it helps drive the growth of the payment system. Interchange fees earned by card-issuing banks provide financial motivation for them to promote and issue more cards to more cardholders. Interchange also helps cover the risk associated with doing so.</p></header></Slide> 
   
   </Slider>
   
   
   <ButtonBack style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowLeft style={{fontSize: '25px', position: 'relative', left: '-63px', top: '-496px'}} />
   
   </ButtonBack>
   
   
   
   <ButtonNext style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowRight style={{fontSize: '25px', position: 'relative', top: '-498px', left: '737px'}} />
   
   </ButtonNext>
   
   </CarouselProvider>
      
           
   
     )}
    

   
      {carousel9 && removeAllCarousels && (
   
   
   <CarouselProvider style={{position: 'relative', top: '-2365px', left: '200px'}}
      
   naturalSlideWidth={100}
   naturalSlideHeight={50}
   totalSlides={9}
   
    >
   
   
   
   <Slider>
   
   <Slide index={9}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mills Way Interchnage</h1><p style={{width: '280px', lineHeight: '25px'}}>Interchange is important because it helps drive the growth of the payment system. Interchange fees earned by card-issuing banks provide financial motivation for them to promote and issue more cards to more cardholders. Interchange also helps cover the risk associated with doing so.</p></header></Slide> 
   <Slide index={8}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35x'}}>Oceanside Railway Station</h1><p style={{width: '335px', lineHeight: '25px'}}>Regional rail services carry more than three times the numbers of passengers than
   the much higher profile long distance (Inter-City) services. As the UK’s city regions
   increasingly develop their service sector economies and concentrate employment
   in city centres, rail enables large numbers of people to be moved efficiently
   and effectively into these ever more congested places.</p></header></Slide>
   <Slide index={7}><img className="provider" style={{width: '750px', height: '550px'}} src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Norht Campus HQ</h1><p style={{width: '280px', lineHeight: '25px'}}>Living on campus enables you to be in the heart of things, and it also ensures that you’re part of a community. A campus offers more opportunity for social interaction and connection with other students than a city university, which means more opportunities to make friends.</p></header></Slide>
   <Slide index={6}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg" /><header style={{position: 'relative', left: '835px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sunnydale Apartment Complex</h1><p style={{width: '350px', lineHeight: '25px', position: 'relative', left: '15px'}}>The first benefit of living in an apartment is the financial aspect of renting. Rent is generally cheaper than a mortgage. In addition to an overall lower monthly payment, other financial components such as upkeep and utilities are usually lower. This is due to the smaller space and the overall responsibility of a landlord/owner versus a tenant.</p></header></Slide>
   <Slide index={5}><img className="provider" style={{width: '750px', height: '550px'}} src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Halston Parkway</h1><p style={{width: '280px', lineHeight: '25px'}}>Four parkways are stand-alone units of the National Park System: Blue Ridge Parkway, George Washington Parkway, John D. Rockefeller Memorial Parkway, and Natchez Trace Parkway. Others are managed as part of another unit.</p></header></Slide>
   <Slide index={4}><img className="provider" style={{width: '750px', height: '550px'}} src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Mission Lake Bridge</h1><p style={{width: '280px', lineHeight: '25px'}}>The bridges take a special role, due its function to connect two different points, crossing valleys, rivers, lakes and cliffs. Bridges are needed on land transportation infrastructure because they connect different points that usually can be inaccessible.</p></header></Slide>
   <Slide index={3}><img className="provider" style={{width: '750px', height: '550px'}} src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Irving Industrial Region</h1><p style={{width: '280px', lineHeight: '25px'}}>Regions in industrial transition have a comparatively strong potential to seize the chances offered
   by current megatrends to revive economic growth and productivity
   in industrial transition often have a strong legacy in manufacturing and sophisticated innovation activities
   in local core industries</p></header></Slide>
   <Slide index={2}><img className="provider" style={{width: '750px', height: '550px'}} src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Sam Valley Highway</h1><p style={{width: '280px', lineHeight: '25px'}}>Highways play an important role in making travel easier and more expedient. This is of great assistance whether traveling for work or play as well as travel involving transporting goods. The highway system connects large metropolises and rural communities across the country.</p></header></Slide>
   <Slide index={1}><img className="provider" style={{width: '750px', height: '550px'}} src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg" /><header style={{position: 'relative', left: '865px', top: '-485px'}}><h1 style={{fontWeight: '400', fontSize: '35px'}}>Angela Residence</h1><p style={{width: '280px', lineHeight: '25px'}}>Living in residences allows the student to focus on his studies without worrying about the economic concepts of having a home, because one single bill covers everything. No need to worry about the costs of electricity, water, internet.</p></header></Slide>
   
   
   </Slider>
   
   
   <ButtonBack style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowLeft style={{fontSize: '25px', position: 'relative', left: '-63px', top: '-496px'}} />
   
   </ButtonBack>
   
   
   
   <ButtonNext style={{border: 'none', backgroundColor: 'whitesmoke'}}>
   
   <SlArrowRight style={{fontSize: '25px', position: 'relative', top: '-498px', left: '737px'}} />
   
   </ButtonNext>
   
   </CarouselProvider>
   
   
      )}



     
  

   </div>
   
      
   
    );

     
     
     }
  
   
  


      

 export default ProjectsBTN;