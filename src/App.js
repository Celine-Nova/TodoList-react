/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import './App.css';
import Counter from './components/Counter'
import Form from './components/Form'
import Tasks from './components/Tasks'
// j'importe le tableau de donnée de tâches
import data from './data/tasks'

class App extends React.Component {
  render(){
    // je recherche le nombre de tâches dans le tableau qui ont la valeur done à false
    const count = data.filter(task => !task.done).length
 
    return (
    <div id="todo">
      <Form/>
      <Counter count={count}/>
      <Tasks tasks={data}/>
    </div>
  );
}
}
export default App;
