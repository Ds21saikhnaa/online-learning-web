import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Navbar } from "./pages"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;