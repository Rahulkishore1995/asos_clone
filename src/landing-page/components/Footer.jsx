import './Footer.css'
import logo from '../images/indian_flag.png';
export const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer">
                <div className='container'>'
                <div className='row footer_row'>
                    <div className='col-12 col-lg-3 col-md-3 col-sm-6'>
                        <ul className='footer_ele'>
                            <li className='head mb-2'>HELP & INFORMATION</li>
                            <li className='mb-2'> <a href="">Help</a> </li>
                            <li className='mb-2'> <a href="">Track order</a> </li>
                            <li className='mb-2'><a href="">Delivery & returns</a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-3 col-md-3 col-sm-6'>
                        <ul className='footer_ele'>
                            <li className='head mb-2'>ABOUT ASOS</li>
                            <li className='mb-2'><a href="">About us</a></li>
                            <li className='mb-2'><a href="">Careers at ASOS</a></li>
                            <li className='mb-2'><a href="">Corporate responsibility</a></li>
                            <li className='mb-2'><a href="">Investors' site</a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-3 col-md-3 col-sm-6'>
                        <ul className='footer_ele'>
                            <li className='head mb-2'>MORE FROM ASOS</li>
                            <li className='mb-2'><a href="">Mobile and ASOS apps</a></li>
                            <li className='mb-2'><a href="">ASOS Marketplace</a></li>
                            <li className='mb-2'><a href="">Gift vouchers</a></li>
                            <li className='mb-2'><a href="">Black Friday</a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-3 col-md-3 col-sm-6'>
                        <ul className='footer_ele'>
                            <li className='head mb-2'>SHOPPING FROM:</li>
                            <li> <span className='border-end border-dark'>You're in<img src="https://assets.asosservices.com/storesa/images/flags/in.png" className='ms-2 me-2' style={{ width: "15px", height: "15px", borderRadius: "50%", verticalAlign: "middle" }} alt="" /></span>  <span>CHANGE</span> </li>
                        </ul>
                    </div>

                </div>
                </div>
                <div className='bottom_'>
                    <div className='container d-flex justify-content-between pt-2'>
                        <div className='bottom_content'>
                            <p>© 2022 ASOS</p>
                        </div>
                        <div>
                            <p className='bottom_content'>Privacy & Cookies | Ts&Cs | Accessibility</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}