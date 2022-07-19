import React from "react";
export default function Lista() {
    let valores=["vaca", "perro", "pato"]
    return(
        <div>
            <h1>Animales mencionados</h1>
            {valores.map((data)=>{
                 return <p>El nombre es {data}</p>
            })}
           
        </div>
            
        )
        
}