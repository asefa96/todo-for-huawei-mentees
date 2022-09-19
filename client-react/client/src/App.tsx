import React from 'react';
import TodoContainer from './components/Todo';
import './scss/index.scss';

function App() {
  return (
    <div className="App">
      <h1 className="p-2 text-gray text--center"> ToDo App </h1>
      <TodoContainer/>
    </div>
  );
}

export default App;
