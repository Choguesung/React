import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '../store';
import axios from 'axios';
import Swal from 'sweetalert2';

function Home() {
  // 리코일 사용
  let [count, setCount] = useRecoilState(countState);

  useEffect(() => {
    axios.get('http://13.209.14.107/api/post').then(res => {
      console.log(res.data);
    });
  }, [count]);

  // 일반 자바스크립트 주석
  // let [count, setCount] = useState(0);
  let [list, setList] = useState(['content1', 'content2', 'content3']);

  const onClick = () => setCount(++count);

  return (
    <>
      {/* 리턴문 안에서의 주석 */}
      <div>
        <h1>home !</h1>
        {count >= 5 ? <h4>count 가 5보다 큼</h4> : null}
        <span onClick={onClick}>{count}</span>

        {list.length >= 4 ? null : (
          <h2
            onClick={() => {
              setList([...list, 'content4']);
              Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool',
              });
            }}
          >
            클릭시 변경
          </h2>
        )}

        {list.map(x => {
          return (
            <>
              <h1>{x}</h1>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
