import React from "react"

const Card = function(){
    return (<div className="card" style={{width: "18rem"}}>
    <img src="https://www.cesarsway.com/wp-content/uploads/2019/09/AdobeStock_219003378-1024x683.jpeg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">My Beagle</h5>
      <p className="card-text">A esta pequeña le encanta salir a ver el atardecer y tambien le encanta posar para las fotos!</p>
      <a href="#" className="btn btn-primary">Find out more!</a></div>
  </div>)
}

export default Card