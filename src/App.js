import './App.css';
import Content from './components/dashboard/landindpage';
import Drug from '../src/components/dashboard/drug/drug'
import Pharmacies from './components/dashboard/pharmacies/pharmacies';
import Pro from './components/dashboard/provides/providers';

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
        <Route path="/maintask_deploy" element={<Content />}/>
        <Route path="/Drug" element={<Drug/>}/> 
        <Route path="/Pharmacies" element={<Pharmacies/>}/> 
        <Route path="/Pro" element={<Pro/>}/> 
    </Routes>
      </>
  );
}

export default App;
