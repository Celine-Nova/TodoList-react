/**
 * NPM import
 */
import React from 'react';

// packages random values (id)
import { v4 as uuidv4 } from 'uuid';

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
    //  ERROR CONSOLE Encountered two children with the same key, `-Infinity`.Lorsque je supprime tout le state et que je rajoute deux taches elles sont la même clé.
    //  On pourrait faire une condition const lastId = task.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1; MAIS C'est Sale
    //  SOLUTION UIID
    // Calcul du prochain ID
    // const lastId = Math.max(...tasks.map(task => task.id)) + 1;
    // Si le contenu n'est pas vide je crée une nouvelle tâche
    if(content !== ''){
      const newTask = {
        id : uuidv4(),
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
  checkTask = id => () => {
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
          done : !task.done,
          
        };
      }
      // Je renvoie la tache (objet) non modifié
      // Si l'id ne correspond pas, pas besoin de faire de copie (pas de modif)
     return task; 
     });
    this.setState({
      tasks: newTasks
    });
  }
 removeTask = (id) => () => {
    // je récupère les tâches du state
    const {tasks} = this.state
     // filtrer les tâches pour ne conserver que les tâches différentes de l'id courant
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

    // Je prépare mes filtres pour afficher dans un certain ordre
    const filteredTasks = [
      // les tâches non effectuées
      ...tasks.filter(task => !task.done),
      // ensuite les tâche effectuées
      ...tasks.filter(task => task.done),
    ];

    // on prepare l'objet d'actions
    const actions = {
      onCheckTask:this.checkTask,
      onRemoveTask:this.removeTask
    }
 
    return (
    <div id="todo">
      <Form  
        onAddTask={this.addTask}
        onChangeInput={this.changeInput}
        inputValue={input}
        />
      <Counter count={count}/>
      <Tasks 
        tasks={filteredTasks}
        actions={actions}
      />
    </div>
  );
}
}
export default App;
