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
const Tasks = ({ tasks, onCheck, onDeleteTask }) => (
    
    <ul id="todo-list">
        {tasks.map(task => (
            <Task
            // Assignons une key aux éléments de notre liste dans tasks.map() afin de corriger le problème de clés manquantes.
            key={task.id}
            onTaskCheck={onCheck}
            onDeleteTask={ onDeleteTask}
            // je deverse les données de chaque Objet task (spread operator)
            {...task}
        />
        ))}
    </ul>
    );

    Tasks.propTypes = {
    onCheck: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
};
export default Tasks;