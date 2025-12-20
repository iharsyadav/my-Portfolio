import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Testing from "./components/testingpage/testing";

function App() {
  return (
    <>
      <Routes>  
        <Route path="/" element={<Testing/>} />
        <Route path="/" element={<Home />} />
        
       
        
       
      </Routes>
    </>
  );
}

export default App;
