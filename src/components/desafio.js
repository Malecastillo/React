import * as React from 'react'

const Desafio = () => {
    const [counter, setCounter] = React.useState(0);
  
    const handleClick = () => {
    setCounter((prevState) => prevState + 1); {/* prevstate es un nombre provisorio de counter, porque no se puede utilizar al lado de setcounter */}
    };


 return (
      <div>
        <p> Cantidad de productos: {counter}</p>
        <button onClick={handleClick}> Agregar al carrito </button>
      </div>
    );
 };
export default Desafio;
