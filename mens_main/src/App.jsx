import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {Menspage} from './components/mens_page'
import {Womenspage} from './components/Womens_page'
// import { useEffect,useState } from "react";
import {Nike} from"./components/Nike"
import { Shivani } from './components/Shivani';
import "./App.css";
const App =()=> {
  return (
    <div>
      <Menspage />
      <Womenspage />
      <Routes>
        {/* <Route path='/polo' element={<Shivani></Shivani>}> */}
          
        {/* </Route> */}
      </Routes>
    </div>
  )
}

// export default App


// import logo from './logo.svg';
// import { useEffect,useState } from "react";
// import "./App.css";
// import {Nike} from"./components/Nike"

// function Apps() {
//   const [item,setItem] = useState([])
 
//   useEffect(() => {
//     getdata();
//   }, []);

  

//   const getdata = async () => {
//     const data = await fetch("http://localhost:5100/nike").then((d) => d.json());
//     setItem(data)
//     console.log(item);
//   };
//   return (
//     <div className="App">
//       <div id="box">
//         {item.map((e) => {
//           return (
//             <Nike
              
//               image={e.image}
//               description={e.Description}
//               price={e.Price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }
// export default {App,Apps};
export default App;

