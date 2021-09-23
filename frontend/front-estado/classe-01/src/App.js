import close from './assets/close.svg';
import cookie from './assets/cookie.svg';
import { useState } from 'react';


function AlertCard(props){
  const [estado, setEstado] = useState('block');

  function FecharAlert(){
    const novoEstado = estado === 'block' ? 'none' : 'block';
  
    setEstado(novoEstado);
  }
  return (
    <div className="App">
      <div className={`card ${estado}`}>
        <img src={close} onClick={FecharAlert} alt="Close" className="close-button"/>
        <img         
          src={cookie} 
          alt='Cookie' 
          className="icon"
        />
        <p>
          {props.children}
        </p>
        <button onClick={FecharAlert} className={props.type}>
          {props.message}
        </button>
      </div>
    </div>
  )
}

function App() {

  return (
    <div className='App'>
     <AlertCard type="cookie" message="Tudo bem!">
      Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
     </AlertCard>
    </div>
  );
}

export default App;
