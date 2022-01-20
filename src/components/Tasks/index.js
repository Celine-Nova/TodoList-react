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
const Tasks = () =>{
    return (
        <div id="todo-taks">
            <ul>
                Liste de taches
                <Task/>
            </ul>
        </div>
    )
}
export default Tasks;