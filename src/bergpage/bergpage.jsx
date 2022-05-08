// import logo from './logo.svg';
import { useEffect,useState } from "react";
import { Navbar } from "../landing-page/components/Navbar";
import { Footer } from "../landing-page/components/Footer";
import {Berghause} from"./components/Berghause"

export function Bergpage() {
  const [item,setItem] = useState([])
 
  useEffect(() => {
    getdata();
  }, []);

  

  const getdata = async () => {
    const data = await fetch("https://men-backend2.herokuapp.com/berghause").then((d) => d.json());
    setItem(data)
    console.log(item);
  };
  return (
    <div className="App">
      
      <div id="box">
        {item.map((e) => {
          return (
            <Berghause
              
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



