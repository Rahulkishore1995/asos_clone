import './HomePageContent.css'
export const HomeImage = () => {
    return (
        <div>

            <div className="container home_container">
                <div className="row">
                    <div className=" col-lg-12 col-md-12 col-sm-12 content_over_image d-flex align-items-center">
                        <div className='content_under_img text-center'>
                            <h1 className='heading'>This is ASOS</h1> <br />
                            <p className='para'>ASOS DESIGN and 850+ brands</p> <br />
                            <button className='b1 me-3  mt-3'>SHOP WOMEN</button><button className='b2 ms-3 mt-3'>SHOP MEN</button>
                        </div>
                    </div>
                </div>


                <div className='row below_img'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12 text-center pt-2'>
                        <p className='delivery'>EASY DELIVERY WORLDWIDE</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12 text-center pt-2'>
                        <p className='delivery'>DISCOVER OVER 850 BRANDS</p>
                    </div>
                </div>


                <div className='row d-flex '>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 pt-3 border-end'>
                        <ul className='social '>
                            <li className='me-5'>
                                <h3 className='facebook' >
                                    <a href="">
                                        <i className="fa-brands fa-facebook "></i>
                                    </a>
                                </h3>
                            </li>

                            <li className='me-5'>
                                <h3 className='facebook' >
                                    <a href="">
                                    <i className="fa-brands fa-instagram insta p-1"></i>
                                    </a>
                                </h3>
                            </li>


                            <li className='me-5'>
                                <h3 className='facebook' >
                                    <a href="">
                                    <i className="fa-brands fa-snapchat snap p-1"></i>
                                    </a>
                                </h3>
                            </li>


                    
                        </ul>
                    </div>

                    
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 pt-3'>
                        <ul className='banks'>
                            <li >
                                <img src="https://images.asos-media.com/navigation/visa-png" alt="" />
                            </li>
                            <li className='ms-4'>
                                <img src="https://images.asos-media.com/navigation/mastercard-png" alt="" />
                            </li>
                            <li className='ms-4'>
                                <img src="https://images.asos-media.com/navigation/pay-pal-png" alt="" />
                            </li>
                            <li className='ms-4'>
                                <img src="https://images.asos-media.com/navigation/american-express-png" alt="" />
                            </li>
                            <li className='ms-4'>
                                <img src="https://images.asos-media.com/navigation/visa-electron-png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}