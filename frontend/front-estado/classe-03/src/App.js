import hamburguer from './assets/hamburguer.png'; 
import {useState} from 'react';
function FoodCard(){
  const [contador, setContador] = useState(0);

  function somar(){
  
    setContador(contador + 1);

  }
  function subtrair(){
  
    setContador(function(contador){
      if(contador === 0){
        contador = 0;
      }
      else{
        contador = contador-1;
      }
      return contador;
    });

  }

  return (
    <div className='card'>
      <img src={hamburguer} alt="Hamburguer" />
      <h2>Hamburguer</h2>
      <span className='descricao'>
        Arcu, sagittis, ut lectus congue dapibus semper odio a, lobortis. 
      </span>

      <div className='secao-contagem'>
        <button onClick={subtrair} className='contagem-button'>-</button>
        <span className='contagem'>{contador}</span>
        <button onClick={somar} className='contagem-button'>+</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <FoodCard/>
    </div>
  );
}

export default App;
