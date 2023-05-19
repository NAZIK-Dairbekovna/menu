import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Menu from "./components/pages/Menu";
import Orders from "./components/pages/Order";
import Admin from "./components/pages/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Menu/>}/>
        <Route path={'/orders'} element={<Orders/>}/>
        <Route path={'/admin'} element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
