import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ReqAuth from "./hoc/ReqAuth";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route path="/" element={<ReqAuth><Home />  </ReqAuth>} />
       
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
