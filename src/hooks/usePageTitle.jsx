import { useEffect } from "react";


const usePageTitle = (title) => {
  //페이지가 로딩된 후 title 태그 안 속성 바꾸기
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);//마운트되거나, title바뀌면 useEffect 실행
};

export default usePageTitle;