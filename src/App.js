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
  // NE JAMAIS MODIFIER LE STATE PAR NOUS MEME
  addTask = () =>{
    // je récupère les tâches du state
    const {tasks, input} = this.state;
    const content = input.trim();
    // Calcul du prochain ID
    const lastId = Math.max(...tasks.map(task => task.id)) + 1;
    // Si le contenu n'est pas vide je crée une nouvelle tâche
    if(content !== ''){
      const newTask = {
        id : lastId,
        label: content,
        done: false,
      };
      // NOUVELLE LISTE = ANCIENNE LISTE + NOUVELLE TACHE
      // OK : concat : On recup un nouveau tableau
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/concat
      // const newTasks = tasks.concat(newTask);
      
      // TOP: avec le spread operator ATTENTION à ne pas confondre avec rest operator
      const newTasks = [...tasks, newTask];
      console.log(newTasks)
      
      // je modifie le state
      // je reinitialise l'input apres avoir entrée une tâche
      this.setState({
        tasks: newTasks,
        input : '',
      })
    }
  }
  changeInput = (inputValue) => {
      // changer le state via setState
      this.setState({
        input: inputValue,
      });
  }
  changeCheckTask = id => () => {
    // retourner une fonction avec un code dormant qui sera executé au moment de l'evènement (onChange dans Task)
    // concepte de CLOSURE :  une fonction qui retourne autre fonction => en Closure(2ème fonction) j'ai une information ici l'id
    // Pas besoin de block d'execution donc fonction Double fléchée
   
    // je récupère les tâches du state
    const {tasks} = this.state
    //-> Avoir une copie du tableau de tâche
    //-> Identifier la tâche à faire évoluer
    const newTasks =  tasks.map(task =>{
      if(task.id === id){
        return {
          // je récupère tout ce que contient l'objet actuel
          ...task,
          // j'inverse la valeur done
          done : !tasks.done,
        };
      }
     return task; 
     });
    this.setState({
      tasks: newTasks
    });
  }
  handleDeleteTask = (id) => () => {
    // je récupère les tâches du state
    const {tasks} = this.state
     // filtrer les tâches pour ne conserver que les tâches différentes de l'id courant
    //  ERROR CONSOLE Encountered two children with the same key, `-Infinity`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
     const newTasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    });
  }
  render(){
    // je récupère des taches dans le state
    const { tasks, input } = this.state;
    // je recherche le nombre de tâches dans le tableau qui ont la valeur done à false
    const count = tasks.filter(task => !task.done).length;
 
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
        onCheck={this.changeCheckTask}
        onDeleteTask={this.handleDeleteTask}
      />
    </div>
  );
}
}
export default App;
