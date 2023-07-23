import react from "react";
import React, { useState } from "react";


let MemesData = () => {


let arrayOne = [


   {

    name: 'Ariel',
    surname: 'Walt',
    age: '25'

   },


   {

    name: 'Johnathan',
    surname: 'Walt',
    age: '62'


   },


   {

    
    name: 'Lisa',
    surname: 'Collins',
    age: '61'

   },


   {


    name: 'Natasha',
    surname: 'Collins',
    age: '32'


   },



   {

 
    name: 'Jeremy',
    surname: 'Walt',
    age: '52'

   }





];




const [count, setCount] = useState('');


let handleClick = () => {


    let nameArray = arrayOne;
    let randomName = Math.floor(Math.random() * nameArray.length);
    let name = nameArray[randomName].name
    let surname = nameArray[randomName].surname
    let age = nameArray[randomName].age

    setCount(name);
    

}



return (

<div>


<button onClick={handleClick}>Click Me</button>

<h1>My name is {count}</h1>

</div>


);



}
 export default MemesData;