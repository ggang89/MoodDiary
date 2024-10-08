import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import New from "./pages/New"
import Diary from "./pages/Diary";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="*" element={<h1>Not  Found</h1> } />
    </Routes>
  );
}

export default App;
