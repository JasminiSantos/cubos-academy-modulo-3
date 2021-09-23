import './App.css';
import eye from "./assets/olho-aberto.svg";

function App() {
  return (
    <div className="container">
        <form action="" id="login-form">
            <h2>Login</h2>

            <div className="email-section">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" required/>
            </div>

            <div className="password-section">
                <label for="password">Senha</label>
                <div className="input-eye">
                    <input type="password" name="password" id="password" required/>
                    <img id="eye" src={eye} alt="olho da senha aberto"/>
                </div>
            </div>
            <div className="enter-button">
                <button type="submit" id="entrar">Entrar</button>
            </div>
        </form>
    </div>
  );
}

export default App;
