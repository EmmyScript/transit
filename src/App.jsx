import { useEffect, useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Navbar from "./component/Navbar";

import  PackingList  from "./PackingList";
import  Stats  from "./Stats";
import "./style.css";


const initialIitems =[
  {id: 1, description: 'passports', quantity: 2, packed: false },

  {id: 2, description: 'shock', quantity: 5, packed: true },

  {id: 3, description: 'chargers', quantity: 7, packed: true },

];



export default function App() {
  const [items, setItems] = useState( [] );
  
  function handleAddItems (item) {
    setItems((items) => [...items, item] );

      }

      function handleDeleteItem(id){
        const filterItem = items.filter((obj)=>obj.id !==id)
        setItems(filterItem);
      }

      //checked box to toggle

function handleToggleItem(id) {
 let objReturn =  items.find((obj)=>obj.id === id);
 let remainObj =  items.filter((obj)=>obj.id !== id);
 objReturn.packed =  !objReturn.packed
 setItems([objReturn,...remainObj])
}


// clear list button
function handleClearList(){

  // to display clear all
  const confirmed = window.confirm("are u sure you want to delete all items?"
  );

 if(confirmed) setItems([]);
}

  return(
    <div className=" curr container-fluid">
      <Navbar/>
    <Currency/>
    
</div>
 
  );
}

// test 1
async function calculate(arr){

  
    const  result = await  arr.reduce((a,b)=>a+b)

    if(result) {
      return result
    }
    return result

}


// currency convert

  function Currency() {
    const[amount, setAmount]= useState(1);
    const[fromCur, setFromCur]= useState("EUR")
    const[toCur, setToCur]= useState("USD");
    const[converted, setConvervetd] = useState("")
    const[isLoading, setIsLoading] =useState(false)

    
     calculate([2,3]).then((ans)=>{
      console.log(ans)

    })

    const handleSubmit =() =>{
      console.log('clicked')
    }


    
     async function convert() {
      setIsLoading(true);
  
  const res = await fetch(
    `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    
  const data = await res.json();
  
  setConvervetd(data.rates[toCur]);
  if(fromCur=== toCur) return setConvervetd(amount)
  setIsLoading(false);

      }
    useEffect(()=>{
      convert();
    },
    [amount, fromCur, toCur])
  
    
    return(
      <div className="curren ">
        
        <h1 className="text-white">currency convert
        <h3>{isLoading && "Loading, wait pls..."}</h3>
        <input type="text" className="form" value={amount} onChange={(e) =>setAmount(Number(e.target.value))}
       onSubmit={(handleSubmit)}/>
      

        <select  className ="selectfrom" value={fromCur} onChange={(e) => setFromCur(e.target.value)} >

          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
          
        
         
        </select>
        <select className ="selectto" value={toCur} onChange={(e) =>setToCur(e.target.value)}disabled={isLoading}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
          <option value="NGN">NGN</option>
         
        </select>
        </h1>
        <p>{converted} {toCur}
        </p>
        
      </div>

    )
  }


// test 2

const faqs = [
  {
    title: "emma can you do it",
    text: "yes i will",
  },


  {
    title: "where are these chairs assembled?",
    text: "lorem10 emmy is learrning react with laptop, it depend on the charger am using",
  },

  {
    title: "how long  do i have to return the charger",
    text: "it depend on the charger am using",
  },
];

function Accordion({ data}) {
  return(
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title = {el.title} text = {el.text}
        num ={i}  key={el.title}/>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text}){

  const [isOpen, setIsOpen] = useState(false);


  function handleToggle(){ 
    setIsOpen((isOpen) =>(!isOpen));
  }

  return(
    
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}`: num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"} </p>

      {isOpen && <div className="content-box" >{text} </div>}
    
    </div>
  );
}



