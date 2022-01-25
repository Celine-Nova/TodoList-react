/**
 * NPM import
 */
 import React from 'react';
 import PropTypes from 'prop-types';
 /**
  * Local import
  */
 import './form.css';

 class Form extends React.Component {
   handleSubmit = (evt) =>{
     evt.preventDefault()
    //  j'agis sur le state
    const { onAddTask } = this.props;
    // j'appelle la fonction
    onAddTask();
   }
   handleChange = (evt) => {
    // Je recupère la valeur du champ
    const { value } = evt.target;
    // Je recupère la fonction a exécuter
    const { onChangeInput } = this.props;

    onChangeInput(value);
  }
   render(){
    // Je récup les props dont j'ai besoin
    const { inputValue } = this.props;
   return (
    <form id="todo-form" onSubmit={this.handleSubmit}>
    <input
      id="todo-input"
      placeholder="Ajouter une tâche"
      type="text"
      autoComplete="off"
      value={inputValue}
      onChange={this.handleChange}
    />
  </form>
   );
  }
 }
 Form.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
 }
 export default Form;
 