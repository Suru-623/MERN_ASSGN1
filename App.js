import logo from './logo.svg';
import './App.css';
import ParentComponent from './props/ParentComponent';
import ChildComponent from './props/ChildComponent';

function App() {
  return (
    <div>
      <ChildComponent/>
      <ParentComponent/>
    </div>
  );
}

export default App;
