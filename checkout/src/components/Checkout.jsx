import React from 'react'
import  "./Checkout.css";
import brandlogo from "./asos.svg"
import cardlogo from "./card.svg"
// import {KeyboardArrowDown} from '@mui/icons-material';
function Checkout() {
  return (
    <div>
      <div id="mainCDiv">
      
      <div id="MainLeftCDiv">



      <div id="brandCheckout" >
            <div>
                <img src={brandlogo} alt="brandlogo" height="30px" width="80px"/>
            </div>
            <div id="brandCheckoutname">CHECKOUT</div>
          </div>


          <div id="divC1">
              <div>
                  <div>DELIVERY COUNTRY</div>
                  <div id="flageflex">
                      <img src="https://p.kindpng.com/picc/s/192-1929235_indian-flag-button-india-flag-button-png-transparent.png" alt="" width='25px' height='25px'/>
                      <div>India</div>
                  </div>
              </div>
              <div>
                  <button id="cngbtn">CHANGE</button>
              </div>
          </div>
          <div id="divC2">
              <div>PROMO/STUDENT CODE OR VOUCHERS </div>
              {/* <KeyboardArrowDown /> */}
          </div>
          <div id="divC3">
              <div>EMAIL ADDRESS</div> 
              
                <input type="text" />  
                
          </div>
          <div id="divC4">
              <div>DELIVERY ADDRESS</div>
                
                   <div>ADD ADDRESS</div>
                  
             
              <div>
                  <div>FIRST NAME :</div>
                  <input type="text" name="" id="" />

              </div>
              <div>
                  <div>LAST NAME :</div>
                  <input type="text" name="" id="" />
              </div>
              <div>
                  <div>MOBILE :</div>
                  <input type="text" name="" id="" />

              </div>
              <div>
                  <div>ADDRESS :</div>
                  <input type="text" name="" id="" />
                  <input type="text" name="" id="" />
              </div>
              <div>
                  <div>CITY :</div>
                  <input type="text" name="" id="" />
              </div>
              <div>
                  <div>STATE :</div>
                  
                      <select id="filter"  >
                        <option value="">State</option>
                        <option value="">Andhra Pradesh</option>
                        <option value="">Arunachal Pradesh</option>
                        <option value="">Assam</option>
                        <option value="">Bihar</option>
                        <option value="">Chhattisgarh</option>
                        <option value="">Goa</option>
                        <option value="">Gujarat</option>
                        <option value="">Haryana</option>
                        <option value="">Himachal Pradesh</option>
                        <option value="">Jharkhand</option>
                        <option value="">Karnataka</option>
                        <option value="">Kerala</option>
                        <option value="">Madhya Pradesh</option>
                        <option value="">Maharashtra</option>
                        <option value="">Manipur</option>
                        <option value="">Meghalaya</option>
                        <option value="">Mizoram</option>
                        <option value="">Nagaland</option>
                        <option value="">Odisha</option>
                        <option value="">Punjab</option>
                        <option value="">Rajasthan</option>
                        <option value="">Sikkim</option>
                        <option value="">Tamil Nadu</option>
                        <option value="">Telangana</option>
                        <option value="">Tripura</option>
                        <option value="">Uttar Pradesh</option>
                        <option value="">Uttarakhand</option>
                        <option value="">West Bengal</option>
                      </select>
              </div>

              <div>
                  <div>ZIP CODE :</div>
                  <input type="text" name="" id="" />
              </div>
              <div>
                  <div>COUNTRY :</div>
                  <input type="text" name="" id="" />
              </div>
          </div>
          {/* <div id="divC5">Dilivery Option</div> */}
          <div id="divC6">
              <div>PAYMENT TYPE</div>
              <div id="creditdebitcancel">
                  <div>ADD CREDIT/DEBIT CARD</div>
                  <button>CANCEL</button>
               </div>
               
               <div className='cardexp'>
                 <div>NUMBER ON CARD</div>
                 <input type="text" name="" id="" src={cardlogo}/>
                </div>

               <div id="selectdate">
                   <div>EXPIRY DATE</div>
                   <select name="" id="month">
                               <option value="">Month</option>
                               <option value="">Jan(01)</option>
                               <option value="">Feb(02)</option>
                               <option value="">March(03)</option>
                               <option value="">April(04)</option>
                               <option value="">May(05)</option>
                               <option value="">June(06)</option>
                               <option value="">July(07)</option>
                               <option value="">Aug(08)</option>
                               <option value="">Sept(09)</option>
                               <option value="">Oct(10)</option>
                               <option value="">Nov(11)</option>
                               <option value="">Dec(12)</option>
                           </select>

                           <select name="" id="year">
                               <option value="">YEAR</option>
                               <option value="">2022</option>
                               <option value="">2023</option>
                               <option value="">2024</option>
                               <option value="">2025</option>
                               <option value="">2026</option>
                               <option value="">2027</option>
                               <option value="">2028</option>
                               <option value="">2029</option>
                               <option value="">2030</option>
                               <option value="">2031</option>
                               <option value="">2032</option>
                               <option value="">2033</option>
                           </select>
                           <div className='cardexp'>
                               <div>NAME ON CARD</div>
                                <input type="text" name="" id="" />
                            </div>
                           <div className="cardexp">
                               <div>CVV</div>
                               <input type="number" name="" id="" />
                           </div>
                           <br />
                           <div id="flexcheckbox">
                               <input type="checkbox" name="" id="checkboxpadding" />
                               <p>Save card details for next time</p>
                           </div>
                           <br />
                           <button>USE THIS CARD</button>
                           <br />
                           <br />
                           <div className="flextotalwithcard">
                            <div>WE ACCEPT :</div> 
                            <div><img src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="cardName" height="25px" width="70%" /> </div>
                           </div>

                           <br />
                           <br />
               </div>
          </div>
          <div id="divC7">
              
              <button id="placeorder">PLACE ORDER</button>
              <p>By placing your order you agree to our <span>Terms & Conditions</span>, <span>privacy</span> and <br /> <span>returns policies</span>. You also consent to some of your data being stored by <br /> ASOS, which may be used to make future shopping experiences better for <br /> you.</p>
             <br />
          </div>


      </div>


      <div id='MainRightCDiv'>
          {/* item */}
      {/* <img src="./imagelogo.png" alt="logo" /> */}
            
          <div>
          <div id="item">
              <div id="itemQty">
                  <div>1 ITEM</div>
                  <div>Edit</div>
               </div>     
               <hr />
               <div id="imgflex">
                   <img src="https://images.asos-media.com/products/asos-design-skinny-chino-shorts-in-navy/201319979-1-navy?$s$" alt="pro1" />
                   <div>
                       <h5>£100.00</h5>
                       <p>Rebook small logo shorts in black</p>
                       <h5>BLACK  XL</h5>
                       <div id="spanQty">Qty: <span>1</span> </div>
                   </div>
               </div>
          <hr />
          <div className="flextotaldelivery">
              <p>Subtotal</p>
              <p>£100.00</p>
          </div>
          <div className="flextotaldelivery">
              <p>Delivery</p>
              <p>£00.00</p>
          </div>

          <div id="flextotalpay">
              <p>TOTAL TO PAY</p>
              <p>£100.00</p>
          </div>
          </div> 
         
      
          </div> 
      </div>
      </div>
      
       <div id="footerdiv">
           ASOS Help
       </div>
    </div>
  )
}

export default Checkout

// import React from 'react'
// import  "./Cart.css"
// function Cart() {
//   return (
//     <div id="mainDiv">
//       <div id="MainLeftDiv">
//           <h1></h1>
//           <h2>CHECKOUT

//           </h2>
//           <div id="div1">My Bag</div>
//           <div id="div2">Product</div>
//           <div id="div3">Sub-Total</div>
//           <div id="div4">Free Standard Deliver</div>
//       </div>
//       <div id="MainRightDiv">Total</div>
//     </div>
//   )
// }

// export default Cart