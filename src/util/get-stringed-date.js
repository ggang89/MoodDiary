//value의 값은 문자만 인식하기 때문에 new Date()로 얻은 날짜를 문자로 바꿔줘야함
export const getStringedDate = (targetDate) => {
  //날짜 => yyyy-mm-dd
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${date}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
