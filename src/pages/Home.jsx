import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [params, setParams] = useSearchParams();
  //주소설정: localhost:5173/?value=hello
  console.log(params.get("value")); //hello 출력

  return <div>home</div>;
}
