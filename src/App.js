import logo from './logo.svg';
import './App.css';

import Form from './components/forms';
import Form2 from './components/form2';
import Form3 from './components/Form3';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
     <h2 className='head'>To-Do List</h2>
     <Todo/>
    </div>
  );
}

export default App;
