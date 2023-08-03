import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import RedirectAuth from "./components/common/RedirectAuth";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/auth/callback" element={<RedirectAuth/>}/>
        </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
