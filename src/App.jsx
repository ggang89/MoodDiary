import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import "./App.css";

function App() {
  const nav = useNavigate();

  const onClickBtn = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}>HOME</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickBtn}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
