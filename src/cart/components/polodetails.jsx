import { Navigate, useParams } from "react-router"
import {useState,useEffect} from "react"
import { Navbar } from "../../landing-page/components/Navbar";
import { Footer } from "../../landing-page/components/Footer";
import "../components/product.css";
import { Cart } from "./Cart";
import { CartContext } from "./cartContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
export var desc = "";
export var price = "";
export var image = "";


export const Productdetails = ()=>{
    const {id} = useParams()
    const [item,setItem] = useState({})
    const {handlechange} = useContext(CartContext);
    desc = item.Description;
    price = item.Price;
    image = item.image;
    const navigate = useNavigate();




 
  useEffect(() => {
    getdata();
  }, []);

  

  const getdata = async () => {
    const data = await fetch(`https://men-backend2.herokuapp.com/polo/${id}`).then((d) => d.json());
    setItem(data)
    
  }


    return (
        <div>
            
            <div id="firsttwobox">
                <div id="leftmensdiv">
                    <div id="textfirst">
                        <p>GET 30% OFF JEANS!*</p>
                        <p>TOPMAN, ASOS DESIGN&MORE</p>
                        <p>With code: STAPLES</p>
                    </div>

                </div>
                <div id="rightmensdiv">
                    <div id="textsecond">
                        <p>EXTRA 20% OFF*</p>
                        <p>SUN-READY TEES, SHORTS&MORE</p>
                        <p>With code: 20DEGREES</p>
                    </div>
                </div>
            </div>
            <div className = "desc">{item.Description}</div>
            <div className = "price">£{item.Price}.00</div>
            <button  className = "add" onClick = {()=>{
                handlechange(item);
                navigate("/cart")
                
            }}>ADD TO BAG</button>
            <div className = "pic_div"><img className = "pic" src={item.image} alt="" /></div>
            
            
            
            
            
        </div>
    )
}