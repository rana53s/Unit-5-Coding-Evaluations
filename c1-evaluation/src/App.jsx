//import logo from './logo.svg';
import './App.css';
import { Books } from "./components/Books";
import { InkPens } from "./components/InkPens"
import { Notebooks } from "./components/Notebooks"
import { Pens } from "./components/Pens"

function App() {
  return (
    <div className="App">
      <h1>Inventory Management System</h1>
      < Books />
      < InkPens />
      < Notebooks />
      < Pens />
    </div>
  );
}

export default App;
