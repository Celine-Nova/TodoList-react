/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import './App.css';
import Counter from './components/Counter'
import Form from './components/Form'
import Tasks from './components/Tasks'

class App extends React.Component {
  render(){
  return (
    <div id="todo">
      <Form/>
      <Counter/>
      <Tasks/>
    </div>
  );
}
}
export default App;
