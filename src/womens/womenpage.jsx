import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import "./Women.css"
import {Women} from"./Women"
import { Navbar } from "../landing-page/components/Navbar";
import { Footer } from "../landing-page/components/Footer";
import {Select} from "../Select/select"

export function WomenPage() {
  const [item,setItem] = useState([])
  
useEffect(() => {
    getdata();
  },[]);

  const handlesort = ()=>{
    const sorted = [...item].sort(function(a,b){
      return a.Price-b.Price
    })
    setItem(sorted)
  }
  const handlesort1 = ()=>{
    const sorted = [...item].sort(function(a,b){
      return b.Price-a.Price
    })
    setItem(sorted)
  }

  const getdata = async () => {
    const data = await fetch("https://backend-women.herokuapp.com/women").then((d) => d.json());
    setItem(data)
  };
  return (
    <div className="App">
        <Select/>
      <h1>SORT BY PRICE</h1>
      <select className = "sort" onChange ={(e)=>{
        if(e.target.value === "low"){
          handlesort()
        }
        else{
          handlesort1()
        }
      }}>

        <option >CHOOSE PRICE</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
        
      </select>
      
      <div id="box">
        
        {item.map((e) => {
          return (
            <Women
              
              image={e.image}
              description={e.Description}
              price={e.Price}
            />
            
          );
        })}
      </div>
      
    </div>
  );
}