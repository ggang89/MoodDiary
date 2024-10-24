import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      //모든 item중에서 id가 일치하는 data를 찾음
      (item) => String(item.id) === String(id)
    );
    //id가 일치하는 일기가 없을 때 => 존재하지 않는 페이지에 들어간 것!
    if (!currentDiaryItem) {
      //경고메시지 보여주고 홈페이지로 이동시키기
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
    //찾는 아이디의 페이지가 있는 경우
    setCurDiaryItem(currentDiaryItem);
  }, [data, id]);

  return curDiaryItem;
};

export default useDiary;