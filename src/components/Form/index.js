/**
 * NPM import
 */
 import React from 'react';

 /**
  * Local import
  */
 import './form.css';

 class Form extends React.Component {
   render(){
   return (
    <form id="todo-form">
    <input
      id="todo-input"
      placeholder="Ajouter une tâche"
      type="text"
      autoComplete="off"
    
     
    />
  </form>
   );
 }
 }
 export default Form;
 