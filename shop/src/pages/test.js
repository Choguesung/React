import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../action/fetchdata.js'; // 데이터를 받아오는 액션 함수 가져오기

function Component() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData()); // 데이터를 받아오는 액션 실행
  }, [dispatch]);

  console.log(items);

  return (
    <div>
      {/* items를 사용하여 UI 렌더링 */}
      {/* {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))} */}
    </div>
  );
}

export default Component;
