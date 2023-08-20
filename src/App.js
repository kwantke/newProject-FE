/* eslint-disable */
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import RedirectAuth from "./components/common/RedirectAuth";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/auth/callback" element={<RedirectAuth/>}/>
          <Route path="/signUp" element={<Signup/>}/>
        </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
