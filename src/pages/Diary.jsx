import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

export default function Diary() {
  const { id } = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(id);
  console.log(curDiaryItem);
  //먼저 undefined 반환 후 값 반환
  //curDiaryITem이 useEffect안에 있는데, useEffect는 렌더링 후 실행된다.
  //그래서 state 초기값인 undefined가 반환되고, 그 후 useEffect실행해서 그 값 반환됨

  //반환값이 undefined일 경우를 대비
  if (!curDiaryItem) {
    return <div>데이터 로딩중....!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로 가기"}
          />
        }
        rightChild={
          <Button
            onClick={() => {
              nav(`/edit/${id}`);
            }}
            text={"수정하기"}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </>
  );
}
