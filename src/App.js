import logo from './logo.svg';
import './App.css';
import {Signup} from "./login/signup";
import  {Routes,Route} from "react-router-dom"
import { Switch } from './login/switch';
import {Signin} from "./login/signin";
import {Identity} from "./login/identity";
import {Menspage} from "../src/mens_main/src/components/mens_page";
import {Landingpage} from "./landing-page/landing"
import {Womenspage} from "../src/mens_main/src/components/women"
import {Bergpage} from "./bergpage/bergpage"
import {Holidaypage} from "./holiday/holiday1"
import {Nikepage} from "./nike/nike"
import {Polopage} from "./polo/polopage"
import {Productdetails} from "./cart/components/polodetails"
import {Nikedetails} from "./cart/components/nikedetails";
import {Cart} from "./cart/components/Cart"
import { Checkout } from './cart/components/Checkout';
import {Payment} from "./cart/components/pay"
import {Navbar} from "./landing-page/components/Navbar"
import {Footer} from "./landing-page/components/Footer"
import {WomenPage} from "./womens/womenpage"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Landingpage/>}></Route>
        <Route path = "/signup" element = {<Signup/>}></Route>
        <Route path = "/signin" element = {<Signin/>}></Route>
        <Route path = "/success" element = {<Identity/>}></Route>
        <Route path = "/mens" element = {<Menspage/>}></Route>
        <Route path = "/berghaus" element = {<Bergpage/>}></Route>
        <Route path = "/holiday" element = {<Holidaypage/>}></Route>
        <Route path = "/womens" element = {<Womenspage/>}></Route>
        <Route path = "/nike" element = {<Nikepage/>}></Route>
        <Route path = "/nike/:id" element = {<Nikedetails/>}></Route>
        <Route path = "/polo" element = {<Polopage/>}></Route>
        <Route path = "/cart" element = {<Cart/>}></Route>
        <Route path = "/checkout" element = {<Checkout/>}></Route>
        <Route path = "/polo/:id" element = {<Productdetails/>}></Route>
        <Route path = "/done" element = {<Payment/>}></Route>
        <Route path = "/women" element = {<WomenPage/>}></Route>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
