import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { data } from "./components/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./components/History";
import Vision from "./components/Vision";
import Goals from "./components/Goals";
console.log(data);
function App() {
  const [tabs, setTabs] = useState(data);
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Main />
          <Routes>
            <Route path="/" element={<History tabs={tabs} />} />
            <Route path="/vision" element={<Vision tabs={tabs} />} />
            <Route path="/goals" element={<Goals tabs={tabs} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
