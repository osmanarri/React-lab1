import React from "react";
import Avatar from "./Avatar";
import Information from "./Information";

export default function Card(props){

    return (

        <div className="card">

            <div className="top">                
                <h2 className="name">{props.name}</h2>    
                <Avatar img={props.img}/>          
            </div>

            <div className="bottom">           
               
                <Information tel={props.tel} email={props.email}/>
            </div>

        </div>
    )

}