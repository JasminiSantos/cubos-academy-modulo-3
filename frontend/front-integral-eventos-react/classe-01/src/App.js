import {useState} from 'react';
import deletar from './assets/delete.svg';

function Tarefa(props){
  return (
    <li className="tarefa" >
      <span 
      onClick={()=> props.handleComplete(props.id)}
      style={{ TextDecoration: props.completa ? 'line-through' : ''}}>
      {props.children}
      </span>
      <input alt='Delete button' type="image" src={deletar} onClick={()=> props.handleDelete(props.id)}/>
    </li>
  )
}
function App() {
  const [tarefas, setTarefas] = useState([])

  function handleKeyDown(event){
    if(event.key !== 'Enter') return;

    const novasTarefas = [...tarefas, {id: Math.random(), texto: event.target.value, completa: false}];
    setTarefas(novasTarefas);

    event.target.value = '';
  }
  function handleDelete(id){
    const novasTarefas = tarefas.filter(function(tarefa){
      return tarefa.id !== id;
    });
    setTarefas(novasTarefas);
  }

  function handleComplete(id){
    const novasTarefas = [...tarefas];
    const tarefaCompletada = novasTarefas.find(function(tarefa){
      return tarefa.id === id;
    });
    tarefaCompletada.completa = !tarefaCompletada.completa;

    setTarefas(novasTarefas)
  }

  return (
    <div className="App">
      <div className='background'>
        <h1>TAREFAS</h1>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
      <ul className='tarefas'>
          {tarefas.map(function(tarefa){
            return (
              <Tarefa 
              key={tarefa.id} 
              id={tarefa.id} 
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              completa={tarefa.completa}
              >
              {tarefa.texto}
              </Tarefa>
            )
          })}
      </ul>
    </div>
  );
}

export default App;
