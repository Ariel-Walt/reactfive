import react from "react";



let Contact = () => {


    let styles = {

        color: 'black',
        backgroundColor: '',
        position: 'relative',
        top: '-350px',
        left: '250px',

        }

        let arrayOne = MainContent.map(value => {


          return <Body 
                 name={value.name} 
                 surname={value.surname} 
                 age={value.age}
                 random={value.random}
                 randomTwo={value.randomTwo}
                 randomThree={value.randomThree}
                 randomFour={value.randomFour}
          
                 />
          
          })
          

          const [array, setArray] = useState([

            "item 1",
            "item 2",
            "item 3",
            "item 4"
            
            ]);
            

            let handleClick = () => {

              setArray(array.slice(1));
              
              };


              let arrayTwo = array.map(item => {
  
                return item;
              
              })


              const [dataOne, setData] = useState([]);


              useEffect(() => {
              
              fetchData();
              
              }, [])



              let fetchData = () => {

                fetch('https://api.chucknorris.io/jokes/categories')
                .then(response => response.json())
                .then(data => setData(data))
              
              }


              let eventClick = () => {

                fetchData();
                
                }



                








                

return (



<div>


<h3>{array}</h3>
 <button onClick={handleClick} style={{cursor: "pointer"}}>Click Me</button>
                
               
                
         {dataOne.map(category => (
         <h3>{category}</h3>
         ))}
               
        <button onClick={eventClick}>Click Me</button>
                      

    

       







       
</div>



);




}

 export default Contact;