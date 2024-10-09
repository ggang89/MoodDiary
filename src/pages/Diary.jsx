import { useParams } from "react-router-dom";

export default function Diary() {
  const { id } = useParams();
  return (
    <>
      <h1>{id}번째 다이어리입니다</h1>
    </>
  );
}
