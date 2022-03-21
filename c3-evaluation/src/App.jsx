import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { HistorySection } from './components/Section/HistorySection';
import { MysterySection } from './components/Section/MysterySection';
import { MythologySection } from './components/Section/MythologySection';
import { TechnologySection } from './components/Section/TechnologySection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/mystery" element={<MysterySection />} ></Route>
        <Route path="/technology" element={<TechnologySection />} ></Route>
        <Route path="/mythology" element={<MythologySection />} ></Route>
        <Route path="/history" element={<HistorySection/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
