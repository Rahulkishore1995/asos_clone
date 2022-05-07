import logo from './logo.svg';
import './App.css';
import {Signup} from "./components/signup";
import  {Routes,Route} from "react-router-dom"
import { Navbar } from './components/navbar';
import {Signin} from "./components/signin";
import {Identity} from "./components/identity"


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path = "/" element = {<Signup/>}></Route>
        <Route path = "/signin" element = {<Signin/>}></Route>
        <Route path = "/success" element = {<Identity/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
