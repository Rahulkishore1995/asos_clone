import { useParams } from "react-router"
import {useState,useEffect} from "react"
import { Navbar } from "../../landing-page/components/Navbar";
import { Footer } from "../../landing-page/components/Footer";
import "./product.css"
export const Nikedetails = ()=>{
    const {id} = useParams();
    console.log(id)

    const [item,setItem] = useState({})
 
  useEffect(() => {
    getdata();
  }, []);

  

  const getdata = async () => {
    const data = await fetch(`https://men-backend2.herokuapp.com/nike/${id}`).then((d) => d.json());
    setItem(data)
    
  };


    return (
        <div>
            <Navbar/>
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
            <button className = "add">ADD TO BAG</button>
            <div className = "pic_div"><img className = "pic" src={item.image} alt="" /></div>
            
            
            
            <Footer/>
        </div>
    )
}