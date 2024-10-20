import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";

export default function DiaryList({ data }) {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새 일기 쓰기"} type={"POSITIVE"} />
      </div>
      <div className="list_Wrapper">
        {data.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}