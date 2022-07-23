import { Routes, Route, Link } from "react-router-dom";


import Home from "./components/Home";
import FAQ from "./components/FAQ";

import DeveloperAPI from "./components/DeveloperAPI";
import "./App.css";

function App() {


  return (
    <div className="App">
      <h1>SHRTCODE</h1>

      <nav>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <span>|</span>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <span>|</span>
          <li>
            <Link to="/developerapi">DEVELOPER API</Link>
          </li>
          <span>|</span>
          <li className="more">
            MORE
            
         
          </li>
      
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/developerapi" element={<DeveloperAPI />} />

        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
