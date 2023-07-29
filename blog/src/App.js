/* eslint-disable */
import { useState } from "react";

function App() {
 
  let [글제목,글제목변경] = useState(['여자 코트 추천','남자 코트 추천','강남 우동 맛집']); // 얘는 자동으로 렌더링 돼서 변경이 됨 html이 >> 이게 반응형인가
  let [따봉,따봉변경] = useState(0);
  let [modal,setModal] = useState(false);

  return (
    
    <div>
      <div className="flex h-10 items-center justify-center  bg-black text-white">
        <h4> Blog </h4>
      </div>

      <button onClick={ ()=>{
        let copy = [...글제목]; // 포인터를 새로 만들어주세요 
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
      }}>
        글수정 </button>

      <div className="pl-5 justify-start border-b-2 border-gray-500 p-5">
         <div className="flex font-bold pb-5">
            <div className="pr-3"> { 글제목[0] } </div>
            <div className="pr-1"> <button onClick={() => {따봉변경(따봉++)}}> 👍 </button> </div>
             {따봉} 
         </div>
         <div>2월 17일 발행</div>
        </div>

        <div className="flex flex-col pl-5 justify-start border-b-2 border-gray-500 p-5">
          <div className="font-bold pb-5">{ 글제목[1] }</div>
          <div>2월 17일 발행</div>
        </div>

        <div className="flex flex-col pl-5 justify-start border-b-2 border-gray-500 p-5">
          <div className="font-bold pb-5" >{ 글제목[2] }</div>
          <div onClick={() => {setModal(true);}} >2월 17일 발행임</div>
        </div>

         {
            modal == true ? <Modal></Modal> : null
         }
         

      </div>
  );
}

function Modal(){
  return(
    <div className="p-5 bg-gray-300 text-start">
          <div className="font-bold">제목</div>
          <div>날짜</div>
          <div>내용</div>
    </div>
  )
}

export default App;
