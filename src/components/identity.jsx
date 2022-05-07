import { identity } from "./signin"
export const Identity = ()=>{
    return (
        <h1 >Welcome <span className = "identity">{identity}</span></h1>
    )
}