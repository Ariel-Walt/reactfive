
import { IoCloseOutline } from "react-icons/io5";
import { useContext } from "react";
import RemoveNavContext from "./RemoveNavContext";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


let CareersInput = () => {


 const { handleToggleAppear, handleToggleContent, color } = useContext(RemoveNavContext);

 let careersInputBTN2 = () => {

     handleToggleAppear();
     handleToggleContent();
 }


   


   useEffect(() => {

        document.body.style.backgroundColor = color;
        
        
    return () => {
        document.body.style.backgroundColor = 'whitesmoke'; // Set the body background color back to its orginal which is whitesmoke // unmount is the word returns it in this function //
      };


   },[color]); // You don't need to have this in the dependency array foe it to work // 



   


  let CareersInput1 = {

    fontSize: "22.5px",
    fontWeight: "400",
    color: "white", 
    position: "relative",
    top: "-40px"


   }



   let CareersInput2 =  {

    color: "orangered",
    fontSize: "44px", 
    position: "relative", 
    top: "-20px"
 }





   return (

       <div>


        <main style={{zIndex: '1', position: 'relative', top: "100px", left: "250px"}}> 

            <h1>MCR</h1>
            <p>Construction</p>

        </main>

        



        <header style={{position: "relative", top: "120px", left: "266.5px"}}>

            <h1 style={CareersInput2}>Join the Success</h1>
            <p style={CareersInput1}>Please fill up the form below</p>

        </header>





        <div className="inputs">

        <label style={{color: "white", position: "relative", left: "270px", top: "85px"}} htmlFor="input1">First Name</label>
        <input style={{outline: "none"}} type="text" id="input1"></input>
            



        <label style={{color: "white", position: "relative", left: "235px", top: "85px"}} htmlFor="input1">Last Name</label>
        <input style={{position: "relative", left: "160px", outline: "none"}} type="text" id="input1"></input>
  
      
        

        <label style={{color: "white", position: "relative", left: "201px", top: "85px"}} htmlFor="input1">Email*</label>
        <input style={{position: "relative", left: "160px", outline: "none"}} type="text" id="input1"></input>


        
         
        <label style={{color: "white", position: "relative", left: "-782.5px", top: "230px"}} htmlFor="input1">Phone*</label>
        <input style={{position: "relative", left: "160px", left: "120px", top: "285px", left: "-834px", outline: "none"}} type="text" id="input1"></input>




        <label style={{color: "white", position: "relative", left: "-792px", top: "227px"}} htmlFor="input1">Address*</label>
        <input style={{position: "relative", left: "598.5px", top: "235.5px", paddingLeft: "415px", outline: "none"}} type="text" id="input1"></input>




        <label style={{color: "white", position: "relative", left: "-346px", top: "330px"}} htmlFor="input1">Position*</label>
        <input style={{position: "relative", left: "-408.5px", top: "390px", outline: "none"}} type="text" id="input1"></input>



        
        <label style={{color: "white", position: "relative", left: "-365px", top: "330px"}} htmlFor="input1">LinkedIn Link*</label>
        <input style={{position: "relative", left: "598.5px", top: "275px", paddingLeft: "415px", outline: "none"}} type="text" id="input1"></input>



       
        <label style={{color: "white", position: "relative", left: "-338px", top: "368px"}} htmlFor="input1">Cover Letter*</label>
        <input style={{position: "relative", left: "-432px", top: "500px", padding: "80px", paddingRight: "545px", outline: "none"}} type="text" id="input1"></input>
        <button style={{padding: "20px", width: "210px", position: "relative", top: "535px", left: "275px", backgroundColor: "orangered", fontSize: "16px", cursor: "pointer", fontWeight: "300px"}}>Submit</button>
      
         



         <select style={{width: "250px", color: "white", backgroundColor: "black", border: "none", outline: "none", cursor: "pointer", position: "relative", top: "155px", left: "80px", fontSize: "17px"}}>

                <option value="Positions"></option>
                <option value="Positions">Construction Scheduler</option>
                <option value="Positions">Receptionist</option>
                <option value="Positions">Civil Senior Level</option>
                <option value="Positions">CP Engineer</option>
                <option value="Positions">Site Safety and Healt Officier</option>
                <option value="Positions">Carpenter</option>

         </select>


        </div>




       <NavLink to="/careersHome">

       <IoCloseOutline onClick={careersInputBTN2} style={{fontSize: '45px', color: "white", cursor: "pointer", position: "relative", left: "1200px", top: "-580px", zIndex: '2'}} />

       </NavLink>

     </div>



  );


}

export default CareersInput;