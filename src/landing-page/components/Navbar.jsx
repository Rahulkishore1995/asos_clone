import './NavbarStyle.css';
import {Link} from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <div className="container pt-1 pb-1">
                <div className="text-end">
                    <a href="" className='pe-3 ' style={{ borderRight: "1px solid lightgrey", color: "#666666", fontSize: "14px" }} >Marketplace</a>
                    <a href="" className='ps-3 pe-3' style={{ borderRight: "1px solid lightgrey", color: "#666666", fontSize: "14px" }}>Help & FAQs</a>
                    <img src="https://assets.asosservices.com/storesa/images/flags/in.png" className='ms-3' style={{ width: "15px", height: "15px", borderRadius: "50%", verticalAlign: "middle" }} alt="" />
                </div>
            </div>

            <div>
                <nav className="navbar navbar-expand-lg navbar-light navbackground">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <a className="display-4 text-white logo pe-2 mt-1" href="/">asos</a>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                            <ul className="navbar-nav mb-lg-0 ">
                                <li className="nav-item nav_wo_men">
                                    <a className="nav-link text-white " href="/womens">WOMEN</a>
                                </li>
                                <li className="nav-item nav_wo_men">
                                    <a className="nav-link text-white " href="/mens">MEN</a>
                                </li>
                            </ul>

                            <form className="d-flex">
                                <input className="form-control ms-4 input_field" type="search" placeholder="Search for items and brands" aria-label="Search" />
                            </form>
                            <div>
                                <Link to = "/signup"><i class="fa-regular fa-user user ms-4"></i></Link>
                                <i class="fa-regular fa-heart user ms-4"></i>
                                <i class="fas fa-shopping-cart ms-4" style={{color:"white"}}></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

{/* below navbar */}
            
            <div className='below_nav'>
                <div className='container below_nav_content'>

                <div className='row'>

                    <div className='col-lg-4 c_1'>
                        <button className=''>WOMEN</button>
                    </div>

                    <div className='col-lg-4 text-center mt-2 c_2'>
                        <strong className=''>UP TO 30% OFF SUN-READY STUFF
                                 
                        </strong>
                    </div>

                    <div className='col-lg-4  text-end c_1'>
                        <button className='me-5'>MEN</button>
                    </div>
                </div>
                </div>


            </div>

        </div>
    )
}