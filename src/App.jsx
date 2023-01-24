import { ClassState } from './ClassState';
import { UseState } from './UseState';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="use State" />
      <ClassState name="class State" />
    </div>
  );
}

export default App;
