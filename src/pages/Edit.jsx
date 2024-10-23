import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

export default function Edit() {
  const { id } = useParams();
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

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

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다!")) {
      //일기 삭제하기
      onDelete(id);
      nav("/", { replace: true });
    }
  };

  return (
    <>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor />
    </>
  );
}
