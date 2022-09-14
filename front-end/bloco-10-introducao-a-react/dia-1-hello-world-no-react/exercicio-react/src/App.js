import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

  const tasks = ['Estudar', 'Jogar Valorant', 'Tomar banho'];

function App() {
  return (
    <ul>{ tasks.map(tarefa => Task(tarefa)) }</ul>
  );
}

export default App;
