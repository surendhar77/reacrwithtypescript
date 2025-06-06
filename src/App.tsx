import React from 'react';
import AddToDo from './components/AddToDo';
import Todos from './components/Todos';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="app-container">
      <h1 className="app-title">TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
};

export default App;
