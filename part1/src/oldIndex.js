import { useState }from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
//Le pasamos las props de esta manera que es más práctica
const Counter = ({number}) => {
  return (
    
    <h1>{number}</h1>
  )
}
const App = (props) => {
  //useState devuelve un array de dos posiciones que la primera posicion[0] devuelve el GET y la segunda posición [1] devuelve el SET
  const [contador,setContador] = useState(0);

  /*
  Es lo mismo que lo de arriba
  const valorcontador = contador[0];
  const aumentacontador = contador[1];
  */
 //Creamos la función que meteremos posteriormente en el onclick del botón 

 const incrementaValor = ()=>{
   
   setContador(contador + 1)};

   const decrementa = () => {
     setContador(contador - 1)
   }
 const reset = () =>{
   setContador(0);
 }


  // const incrementaValores = (boolean) => {
  //   if(true)
  //    setContador(contador => contador + 1)
  //    else
  //   setContador(contador => contador - 1)
  // }

// const resetea = () => {
//   setContador(0)
// }
//const isEven = contador % 2 === 0
//const mensajeParOImpar = isEven ? 'Es par' : 'Es impar'
  return (
  <div style={{color: props.color}}>
    <h2 >El valor del contador es:</h2>
  <Counter number = {contador}/>
  <button onClick={incrementaValor}>Incrementar</button>
  <button onClick={decrementa}>Decrementar</button>
  <button onClick={reset}>Reset</button>
  <div>{props.contador}</div>
  </div>

  )
} 
root.render(
  <App />
)
reportWebVitals();
/*
function x (a, b)

x(a,)

*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

