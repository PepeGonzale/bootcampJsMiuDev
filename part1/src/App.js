
import './App.css';
import Mensaje from './Mensaje';
import Probar from './Prueba';
//Asi se crean los componentes, siempre empiezan por mayuscula para no condunfir con elementos de html. 
const App  = () => {
  return (
    //En realidad es js pero pasa por babeljs y parece HTML pero no lo es. 
    //Para que se lean las variables hay que ponerlas entre llaves
    <div className="App">         
      <App2/>  
      <Mensaje color = 'red' message = 'Estamos trabajando '/>
      <Mensaje color = 'green' message = 'en un curso de React'/>
      <Probar color = 'blue' mensaje = 'PROBANDO EL ESTADO DEL COMPONENTE EN REACT'/>
    </div>   
  );
}
//los componenentes se deben crear fuera de otros componentes
const App2 = () => {
  const mensaje = 'hola'
  return (
    <div className='App2'>     
        <h2>PROBANDO {mensaje}</h2>
    </div>  
  )
}
export default App;
