/**
 * NPM import
 */
 import React from 'react';
 import PropTypes from 'prop-types';
 
 /**
  * Local import
  */
 import './counter.css';
 
 /**
  * Code
  */
//  je destructure les props props.count => {count}
const Counter = ({count}) =>{
    // je suitch afin de changer le message selon le compteur
    let message;
    switch (count) {
        case 0:
            message = 'Aucune tâche';
            break;
        case 1:
            message = 'Une tâche a effectuer';
            break;
    
        default:
            message = `${count} tâches a effectuer`;
            break;
    }
    return (
        <div id="todo-counter">
          {message}
        </div>
    )
}
// je valide mes données
// `isRequired` pour vous assurer qu'un avertissement s'affiche si la prop n'est pas fournie
Counter.propTypes = {
    count: PropTypes.number.isRequired
}
export default Counter;