// import { ClassState } from './ClassState';
import { UseState } from './UseState';
import { UseReducer } from './UseReducer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <UseState name="use State" />
      <ClassState name="class State" /> */}
      <UseState name="use State" />
      <UseReducer name="class Reducer" />
    </div>
  );
}

export default App;
