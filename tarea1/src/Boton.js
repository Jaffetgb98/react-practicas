import React from "react";
function Boton(props) {
    let cargando=(props.cargando)
function Carga(){
    if(cargando=true){
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Listo</h1>
            </div>
        )
    }
}
    
    return (
        <div>
        <button onClick={Carga}>Iniciar</button>
        </div>
    )
}
export default Boton;