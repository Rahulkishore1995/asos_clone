import {Link} from "react-router-dom";
export const Navbar = ()=>{
    return (
        <div >
            <div className = "to"><Link  to = "/">JOIN</Link></div>
            <div className = "to1"><Link  to = "/signin">SIGN IN</Link></div>
        </div>
    )
}