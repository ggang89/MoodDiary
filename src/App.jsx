import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import "./App.css";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const nav = useNavigate();

  const onClickBtn = () => {
    nav("/new");
  };

  return (
    <>
      <Header title={"Header"} leftChild={<Button text={"Left"}/>} rightChild={<Button text={"Right"}/>}/>
      
      <Button />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
