import './App.css';

import { AddHouse } from "./components/AddHouse/AddHouse";

function App() {
  return (
    <div className="App">
      <AddHouse />
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
        Add House
      </button>
      {/* Show component based on state */}
      <br />
      <button>Rent Low to High</button>
      <button>Rent High to Low</button>
      <button>Arear Low to High</button>
      <button>Area High to Low</button>
    </div>
  );
}

export default App;
