import React from "react";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Detail from "./components/Detail";
import { Counter } from "./features/counter/Counter";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/detail" element={<Detail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
