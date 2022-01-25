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
  // State grâce à @Babel ecriture simplifiée sans constructor
  state ={
    tasks: data,
    input: ''
  }
  addTask = () =>{
    const {tasks, input} = this.state;
    const content = input.trim();
    // Calcul du prochain ID
    const lastId = Math.max(...tasks.map(task => task.id)) + 1;
    // je crée une nouvelle tâche
    const newTask ={
      id : lastId,
      label: content,
      done: false,
    }
    // OK : concat : On recup un nouveau tableau
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/concat
      // const newTasks = tasks.concat(newTask);

      // TOP: avec le spread operator
      const newTasks = [...tasks, newTask];

      // je modifie le state
      // je reinitialise l'input apres avoir entrée une tâche
      this.setState({
        tasks: newTasks,
        input : '',
      })
  }
  changeInput = (inputValue) => {
      // changer le state via setState
      this.setState({
        input: inputValue,
      });
  }
  render(){
    // je récupère des taches dans le state
    const { tasks, input } = this.state;
    // je recherche le nombre de tâches dans le tableau qui ont la valeur done à false
    const count = data.filter(task => !task.done).length
 
    return (
    <div id="todo">
      <Form  
        onAddTask={this.addTask}
        onChangeInput={this.changeInput}
        inputValue={input}
        />
      <Counter count={count}/>
      <Tasks 
        tasks={tasks}
      />
    </div>
  );
}
}
export default App;
