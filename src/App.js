import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="text-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
