import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import RequireAuth from "./CustomHooks/RequireAuth";

function App() {
  return (
    <div className="text-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
