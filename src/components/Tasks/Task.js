/**
 * NPM import
 */
 import React from 'react';
 import PropTypes from 'prop-types';
 
 /**
  * Local import
  */
 import './tasks.css';

 
 /**
  * Code
  */
//  je destructure chaque objet task reçu en props
const Task = ( {done, label} ) =>{
    return (
         /**
          * Si il y a beaucoup de noms de classes qui doivent être conditionnels sur le même élément
          * cela peut devenir un peu désordonné, mais cela fonctionne toujours.
          * Au lieu  : done ? 'task task--done' : 'task' label ? 'React' : ''
          * Utiliser la bliothèque Classnames
        */
    <li className="task task--done" >
        <input
          type="checkbox"
          checked={done}
        />
        <span className="task-label">{label}</span>
    </li>
    );    
}
Task.prototype ={
    done: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired
}
export default Task;