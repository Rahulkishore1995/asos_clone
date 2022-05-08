import { identity } from "./signin"
export const Identity = ()=>{
    return (
        <div>
        <h1 >Welcome <span className = "identity">{identity}</span></h1>
       <a href = "/mens"> <button id = "go_shop">Shop Now</button></a>
        </div>
    )
}