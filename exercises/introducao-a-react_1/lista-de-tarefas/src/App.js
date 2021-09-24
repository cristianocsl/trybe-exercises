import React from 'react';
import Task from './Component1';
import './App.css';

const tarefas = ['Acordar às 5h', 'Exercícios às 5h30', 'Café da manhã às 6h', 'Codar o dia inteiro'];

function App() {
  return (
    <ol className="App">
      {tarefas.map((tarefa) => <Task tarefaUnica = {tarefa}/>)}
    </ol>
  );
}

export default App;
