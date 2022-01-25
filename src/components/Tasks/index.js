/**
 * NPM import
 */
 import React from 'react';
 import PropTypes from 'prop-types';
 
 /**
  * Local import
  */
 import './tasks.css';
 import Task from './Task';

 
 /**
  * Code
  */
const Tasks = ({ tasks }) => (

    <ul id='todo-list'>
        {tasks.map(task=>
        // Assignons une key aux éléments de notre liste dans numbers.map() afin de corriger le problème de clés manquantes.
       
        <Task 
            key={task.id}
            // je deverse les données de chaque Objet task (spread operator)
            {...task}
        />
        )}
    </ul>
)
Tasks.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired).isRequired
    
}
export default Tasks;