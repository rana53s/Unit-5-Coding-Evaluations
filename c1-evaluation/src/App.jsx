
import './App.css';
import { Books } from "./components/Books";
import { InkPens } from "./components/InkPens"
import { Notebooks } from "./components/Notebooks"
import { Pens } from "./components/Pens"



function App() {
  return (
    <div className="items">
      <h1>Inventory Management System</h1>
      < Books />
      < InkPens />
      < Notebooks />
      < Pens />
      <div className="total">{1}</div>
    </div>
  );
}

export default App;
