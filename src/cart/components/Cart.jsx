import React from 'react'
import {Link} from "react-router-dom"
import  "./Cart.css"
import buslogo from "./favicon.svg"
import { useDispatch, useSelector } from "react-redux"
import {useState,useEffect} from "react"
import { useParams } from 'react-router'
import { CartContext } from "./cartContext";
import { useContext } from "react";
import {desc,price,image} from "./polodetails"

// import Button from "./Button.jsx"
export function Cart() {

  return (
    <div id="mainDiv">
      <div id="MainLeftDiv">
      
          <div id="div1">
              <div id="mybag">MY BAG</div>
              <div>Item are reserved for 60 minutes</div>
          </div>
          <div id="div2">
             <div id="prodDivflex">
                   <img src={image} alt="pro1" />
                   <div id = "check">
                       <h5>£{price}</h5>
                       <p>{desc}</p>
                        <div id="sizeQyt">
                        <p>BLACK  XL |</p>
                        <select name="" id="waistsize">
                               <option value="">W26</option>
                               <option value="">W28</option>
                               <option value="">W30</option>
                               <option value="">W32</option>
                               <option value="">W34</option>
                               <option value="">W36</option>
                               <option value="">W38</option>
                               <option value="">W40</option>
                               <option value="">W42</option>
                               <option value="">W44</option>
                               <option value="">W46</option>
                               <option value="">W48</option>
                                
                           </select>
                       <div>|  Qty: 1 </div>
                        </div>
                         
                        <button id="btnsave">♡ Save for later</button>
                   </div>
                   <div id='multiply'>×</div>
               </div>

          </div>
          <div id="div3">
             <div id="subtotalflex">
             <div>SUB-TOTAL</div>
              <div>£{price}</div>
             </div>
          </div>
          <div id="div4">
              <div>LOOKING FOR THESE...?</div>
              <div>The items below were recently moved to your Saved Items. Why?</div>
              <br />
             <hr />
              <div id="fixedimgflex">
                  <div id="image1">
                    <img src="https://images.asos-media.com/products/asos-design-skinny-chino-shorts-in-navy/201319979-1-navy?$s$" alt="image1" />
                    <div>Nike Swimming 7 inch 90s printed shorts</div>
                    <h5>£100.00</h5>
                    <hr />
                    <p>Multi</p>
                    <hr />
                    <p>W12</p>
                    <div id='btndiv'>ADD TO BAG</div>
                 

                  </div>
                  <div id="image2">
                  <img src="https://images.asos-media.com/products/asos-design-skinny-chino-shorts-in-navy/201319979-1-navy?$s$" alt="image2" />
                    <div>Nike Swimming 7 inch 90s printed shorts</div>
                    <h5>£100.00</h5>
                    <hr />
                    <p>Multi</p>
                    <hr />
                    <p>W12</p>
          
                    <div id='btndiv'>ADD TO BAG</div>
                  </div>
              </div>
              <button id='viewbag'>VIEW ALL SAVE ITEM</button>
          </div>
          <div id="div5">
            <div id="BusD">
            <div id="bus">
                 <img src={buslogo} alt="bus" width="50px" height="25px" />
              </div>
              < div id="DELIVERY">
                  <div>FREE* STANDARD DELIVERY</div>
                  <div>faster delivery options available to most countries.</div>
                  <div>More info</div>
              </div>
            </div>
          </div>
      </div>
      <div id="MainRightDiv">
        {/* <img src="https://user-images.githubusercontent.com/96075939/167146894-a2553a7b-51cc-4e72-96fd-384f5bb1fb3a.png" alt="av" /> */}
          <div id="borderMargin">
            <div id="toptotal">
            <div>TOTAL</div>
            <div></div>
            </div>
            <hr id="hr"/>
            <div>
               <div className="flextotal">  
                <div>Sub-total</div>    
                <div>£{price}.00</div>  
               </div> 
               <div className="flextotal">  
                <div>Deliver</div>    
                <div>£{0}.00</div>  
               </div>
               <Link to = "/checkout"><button id="checkoutbtn">CHECKOUT</button></Link>
               {/* <Button btn="CHECKOUT"></Button> */}
               
               <div className="flextotal">
            <div>WE ACCEPT :</div> 
            <div></div>
            </div>

            <div id="cardName"> <img src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="cardName" height="25px" width="70%" />  <div></div></div>
             <div id="oneline">Got a discount code? Add it in the next step.</div>
             </div>
             </div>
    </div>
    
    </div>
  )
}


