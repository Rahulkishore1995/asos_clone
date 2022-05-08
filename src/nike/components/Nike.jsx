export const Nike = ({image,description,price})=>{
    return (
        
        <div className = "card">
            <div id = "img_div">
               <img id = "image" src={image} />
            </div>
            <div id = "desc">{description}</div>
            <div id = "price">£{price}</div>
       </div>
        
  )
}


export const Polo = ({image,description,price})=>{
    return (
        
        <div className = "card">
            <div id = "img_div">
               <img id = "image" src={image} />
            </div>
            <div id = "desc">{description}</div>
            <div id = "price">£{price}</div>
       </div>
        
  )
}
export const Holiday = ({image,description,price})=>{
    return (
        
        <div className = "card">
            <div id = "img_div">
               <img id = "image" src={image} />
            </div>
            <div id = "desc">{description}</div>
            <div id = "price">£{price}</div>
       </div>
        
  )
}

export const Berghause = ({image,description,price})=>{
    return (
        
        <div className = "card">
            <div id = "img_div">
               <img id = "image" src={image} />
            </div>
            <div id = "desc">{description}</div>
            <div id = "price">£{price}</div>
       </div>
        
  )
}