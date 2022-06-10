import React from 'react';
import './Catalogo.css';


{/*ver por que se usa esto de extends/react.component/etc., porque lo copie*/}
class Catalogo extends React.Component { 

    render(){
        return(
        <div>
            <h1>Iniciaste sesión: Bienvenida {this.props.name}</h1>
            {/*con this props llamo a la prop creada como clase, sino no lleva this*/}
        </div>
        );
    }
}


export default Catalogo; 



