import React from "react";
import "./card.css"

const Card = (props) => {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
              </div>
            </div>
    
    )
}
export default Card;