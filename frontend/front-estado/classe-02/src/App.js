import kelvin from './assets/kelvin-costa.png';
import { useState} from 'react';

function UserCard({picture, name, username, followers, following}){
  return (
    <div className="card">
      <img src={picture} alt={name}/>
      <h2>{name}</h2>
      <span className="username">{username}</span>
      <span className="followers">{followers} seguidores</span>
      <span className="following">{following} seguidores</span>
    </div>
  )
}

function FollowingButton(){
  const [estado, setEstado] = useState('Seguir');

  function Seguir(){
    const novoEstado = estado === 'Seguir' ? 'Seguindo' : 'Seguir';
  
    setEstado(novoEstado);
  }
  return (
    <div className="following-button">
      <button onClick={Seguir} className={estado}>{estado}</button>
    </div>
  );
}

function App() {
  const users = [
    {
      id: 1,
      name: "Kelvin Costa", 
      picture: kelvin, 
      username:"@costa", 
      followers:140, 
      following:207 
    }
  ];
  return (
    <div className="App">
      {users.map(function(user){
        return <UserCard 
        key={user.id}
        {...user}
        />
      })} 
      <FollowingButton/>
    </div>
  );
}

export default App;