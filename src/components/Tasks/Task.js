/**
 * NPM import
 */
 import React from 'react';
 import PropTypes from 'prop-types';
 import classNames from 'classnames';
 
 /**
  * Local import
  */
 import './tasks.css';


 
 /**
  * Code
  */
//  je destructure chaque objet task reçu en props
const Task = ( {id, done, label, onTaskCheck} ) => (
         /**
          * Si il y a beaucoup de noms de classes qui doivent être conditionnels sur le même élément
          * cela peut devenir un peu désordonné, mais cela fonctionne toujours.
          * Au lieu  : done ? 'task task--done' : 'task' label ? 'React' : ''
          * Utiliser la librairie classNames
        */
    <li className={classNames(
      'task',
      {'task--done': done},
      )}
      >
        <input
          type="checkbox"
          checked={done}
          // onChange a besoin d'une fonction => fonction morte "dormante" qui sera executé lors de l'evenemebt
          onChange={onTaskCheck(id)}
        />
        <span className="task-label">{label}</span>
    </li>
    );    
  
  Task.propTypes ={
      id: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
      onTaskCheck: PropTypes.func.isRequired,
  };
export default Task;