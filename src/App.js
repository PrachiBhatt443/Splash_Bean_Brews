import './App.css'
import React from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2'
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import { Route, Routes } from "react-router-dom";
import MainContainer from './components/MainContainer';
import CreateContainer from './components/CreateContainer';
function App() {
  return (
    
    <div className="App">
       
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
    </div>
  );
}
export default App;
