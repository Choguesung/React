/* eslint-disable */
import { useState } from "react";

function App() {
 
  let [글제목, 글제목변경] = useState(['여자 코트 추천','남자 코트 추천','강남 우동 맛집']); // 얘는 자동으로 렌더링 돼서 변경이 됨 html이 >> 이게 반응형인가
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    
    <div>
      <div className="flex h-10 items-center justify-center  bg-black text-white">
        <h4> Blog </h4>
      </div>

        {
          글제목.map(function(a,i){
            return (
              <div className="flex flex-col pl-5 justify-start border-b-2 border-gray-500 p-5" onClick={() => {setModal(true),setTitle(i)}}>
               <div className="flex font-bold pb-5">{ 글제목[i] }
                 <div onClick={()=> {따봉변경(따봉+1)}}> 👍 {따봉}</div>
               </div>
               <p> 2월 17일 발행</p>
               <button className="border border-red-500 w-10"
               onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
               }}>삭제</button>
              </div>
            )
          })
        }

        <input onChange={(e) => { 
          입력값변경(e.target.value);
        }}></input>
        <button onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}>글발행</button>
        
        {
           modal == true ? <Modal 글제목={글제목} title={title} ></Modal> : null
        }

       </div>
  );
}

function Modal(props){
  return(
    <div className="p-5 bg-gray-300 text-start bg-gray-500">
          <div className="font-bold">{props.글제목[props.title]}</div>
          <div>날짜</div>
          <div>내용</div>
    </div>
  )
}



export default App;
