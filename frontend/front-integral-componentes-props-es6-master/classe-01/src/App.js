import close from './assets/close.svg';
import cookie from './assets/cookie.svg';
import alert from './assets/alert.svg';

function AlertCard(props){
  return (
    <div className="App">
      <div className="card">
        <img src={close} alt="Close" className="close-button"/>
        <img         
          src={props.type === 'cookie' ? cookie : alert} 
          alt={props.type === 'cookie' ? "Cookie" : "Alert"} 
          className="icon"
        />
        <p>
          {props.children}
        </p>
        <button className={props.type}>
          {props.message}
          </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
     <AlertCard type="cookie" message="Tudo bem!">
      Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
     </AlertCard>
     <AlertCard type="alert" message="Extender login">
      Você será deslogado imediatamente!
     </AlertCard>
    </div>
  );
}

export default App;
