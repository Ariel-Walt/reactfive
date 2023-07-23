import React from "react";

function Jocko() {

let arrayOne = [

   {

       name: "David",
       surname: "Goggins",
       age: "42"

   },


   {

       name: "Jocko",
       surname: "Wilik",
       age: "45"

   },



   {


       name: "Joe",
       surname: "Rogan",
       age: "52"

   }
      



];

let dataArray = arrayOne.map(item => 
    
    <div>

    <h2>{item.name}</h2>
    <small><p>{item.surname}</p></small>
    <p>{item.age}</p>
    
    
    </div>
    );




return (


<h1>{dataArray}</h1>

);


}

export default Jocko;

