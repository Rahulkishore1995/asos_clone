// import logo from './logo.svg';
import { useEffect,useState } from "react";
import { Navbar } from "../landing-page/components/Navbar";
import { Footer } from "../landing-page/components/Footer";
import {Holiday} from"./Holiday"

export function Holidaypage() {
  const [item,setItem] = useState([])
 
  useEffect(() => {
    getdata();
  }, []);

  

  const getdata = async () => {
    const data = await fetch("https://men-backend2.herokuapp.com/holiday").then((d) => d.json());
    setItem(data)
    console.log(item);
  };
  return (
    <div className="App">
      
      <div id="box">
        {item.map((e) => {
          return (
            <Holiday
              
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



