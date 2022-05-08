import {Link} from "react-router-dom";
export const Switch = ()=>{
    return (
        <div >
            <div className = "to"><Link  to = "/signup">JOIN</Link></div>
            <div className = "to1"><Link  to = "/signin">SIGN IN</Link></div>
        </div>
    )
}