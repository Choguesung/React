import { useState } from "react";


function App() {
 
  let post = '강남 우동 맛집';
  let [글제목,b] = useState(['여자 코트 추천','남자 코트 추천']); // 얘는 자동으로 렌더링 돼서 변경이 됨 html이 >> 이게 반응형인가
  let [logo, setLogo] = useState('ReactBlog'); // 사이트 로고는 바뀔 필요가 없으니까 굳이 이렇게 x 

  return (
    <div>
      <div className="flex h-10 items-center justify-center  bg-black text-white">
        <h4>{logo}</h4>
      </div>
      <div className="flex flex-col pl-5 justify-start border-b-2 border-gray-500 p-5">
        <div className="font-bold pb-5">{ 글제목[1] }</div>
        <div>2월 17일 발행</div>
      </div>
    </div>
  );
}

export default App;
