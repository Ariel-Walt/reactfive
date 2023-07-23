
import react from "react";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



let ImageSlider = () => {



 let styleTen = {

  fontSize: '22.5px',
  fontWeight: '600',
  position: 'relative',
  top: '20px'

 }

 let styleEleven = {

  fontSize: '45px',
  color: 'orangered',
  position: 'relative',
  top: '-5px'

 }

 let styleTwelve = {

  width: '470px',
  lineHeight: '32px',
  fontFamily: 'Gill Sans',
  fontSize: '18px',
  position: 'relative',
  top: '-15px',
  left: '6px'


 }


return (

  <div className="cara">
  

  
  <header style={{position: 'relative', left: '155px', top: '-2420px'}}>

     <h1 style={styleTen}>What We Do</h1>
     <h1 style={styleEleven}>Our Projects</h1>
     <p style={styleTwelve}>It is not the beauty of a building you should look at; it’s the construction of the foundation that will stand the test of time. Every building within the construction industry has a foundation that all other components rely on for their existence.</p>

</header>
   
  



  <CarouselProvider style={{position: 'relative', left: '-62.5px', top: '-2350px'}}

      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={6}
      
    >
      <Slider>
          
     
        <Slide index={1}><img className="provider" style={{width: '1200px', position: 'relative', left: '220px', height: '530px'}} src="https://alexionpartners.com/wp-content/uploads/AdobeStock_284666797-e1569797264159.jpeg"/><p style={{color: ' rgb(105, 104, 104)', fontSize: '35px', position: 'relative', left: '615.5px', top: '10px', fontFamily: '', fontWeight: '400'}}>West Ridge Hill Interchange</p></Slide>
        <Slide index={2}><img className="provider" style={{width: '1200px', position: 'relative', left: '220px', height: '530px'}} src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg"/><p style={{color: ' rgb(105, 104, 104)', fontSize: '35px', position: 'relative', left: '696.5px', fontFamily: '', fontWeight: '400'}}>Halston Parkway</p></Slide>
        <Slide index={3}><img className="provider" style={{width: '1200px', position: 'relative', left: '220px', height: '530px'}} src="https://www.bellefirma.com/wp-content/uploads/2018/04/Alcatel-Lucent3-1.jpg"/><p style={{color: ' rgb(105, 104, 104)', fontSize: '35px', position: 'relative', left: "696px" }}>Great Hill Campus</p></Slide>
        <Slide index={4}><img className="provider" style={{width: '1200px', position: 'relative', left: '220px', height: '530px'}} src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/city-of-nice-central-train-station-view-brch-photography.jpg"/><p style={{color: ' rgb(105, 104, 104)', position: 'relative', left: '635px', fontSize: '35px'}}>Oceanside Railway Station</p></Slide>
        <Slide index={5}><img className="provider" style={{width: '1200px', position: 'relative', left: '220px', height: '530px'}} src="https://hiddencityphila.org/wp-content/uploads/2012/09/Winston-building.jpg"/><p style={{color: ' rgb(105, 104, 104)', fontSize: "35px", position: 'relative', left: '683px'}}>Wintworth Building</p></Slide>
        <Slide index={6}><img className="provider" style={{width: '1200px', position: 'relative', left: '220px', height: '530px'}} src="https://i.huffpost.com/gen/1549193/thumbs/o-SUBURBS-facebook.jpg"/><p style={{color: ' rgb(105, 104, 104)', fontSize: '35px', position: 'relative', left: '645px'}}>Highland West Parkway</p></Slide>

      </Slider>


      <ButtonBack style={{backgroundColor: 'transparent', color: 'black', fontSize: "30px", marginLeft: '200px'}}> 
      <SlArrowLeft style={{position: 'relative', top: "-1583.5px", left: '-53.5px'}} />
      </ButtonBack>


      <ButtonNext style={{backgroundColor: 'transparent', color: 'black', fontSize: '30px'}}>
      <SlArrowRight style={{position: 'relative', top: '-1584.5px', left: '1182.5px'}} />
      </ButtonNext>

  
      </CarouselProvider>
      
  


    <header className="headerOne" style={{textAlign: 'center' }}>

    
      <div>


      <h1 id="hOne" style={{fontSize: '22.5px', fontWeight: '600'}}>Our Clients</h1>
      <h1 style={{fontSize: '45px', color: ' rgb(255, 125, 77)'}}>We believe each client is a</h1>
      <h1 style={{fontSize: '45px', color: ' rgb(255, 125, 77)', marginTop: '-35px'}}>long term partnerhsip</h1>

     </div>
      
    


      <img className="imgOne" src="https://turbologo.com/articles/wp-content/uploads/2020/12/logo3.png" style={{width: '1125px', position: 'relative', top: '-3540px'}} />
  
     

    </header>



    
     
    
    



    
   </div>
  
);

}


  export default ImageSlider;

