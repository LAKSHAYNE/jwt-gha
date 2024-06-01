import "./App.css";
import Login from "./views/login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./views/register/Register";
import Home from "./views/Home/Home";
import { ProtectedRoute } from "./hooks/ProtectRoutes";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRoute element={<Home/>} />} />
      </Routes>
    </div>
  );
}

export default App;
