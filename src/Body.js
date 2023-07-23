import react from "react";


function Body(props) {

 let outCome = '';

if (props.random === '0') {


  outCome = 'Sold Out';

}


else if (props.randomTwo === '1') {

   outCome = 'Limited Stock';

}


else if (props.randomThree === '2') {


outCome = 'Special Offer';


}


else if (props.randomFour === '3') {

outCome = 'Pre-existing offer';

}


return (

<div>

   {outCome && <div id="id">{outCome}</div>}
   <h1>{props.name}</h1>
   <h2>{props.surname}</h2>
   <p>{props.age}</p>
   



</div>




);


}


export default Body;