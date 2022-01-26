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
const Tasks = ({ tasks, actions  }) => (
    
        // console.log(...actions)
    <ul id="todo-list">
        {tasks.map(task => (
            <Task
            // Assignons une key aux éléments de notre liste dans tasks.map() afin de corriger le problème de clés manquantes.
            key={task.id}
        
            // je deverse les données de chaque Objet task (spread operator)
            {...task}
            {...actions}
        />
        ))}
    </ul>
    );

    Tasks.propTypes = {
        actions: PropTypes.objectOf(
            PropTypes.func.isRequired,
            ).isRequired,
        tasks: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired).isRequired,
    };
export default Tasks;