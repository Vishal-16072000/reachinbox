import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./Pages/Login";
import Onebox from "./Pages/Onebox";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/onebox" element={<Onebox/>}/>
      </Routes>
    </Router>
  )
}

export default App;