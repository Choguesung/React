import { Container, Row, Col } from 'react-bootstrap';
import data from '../data';
import { useState, useEffect } from "react";
import axios from 'axios';

function Home() {
  let [shoes, setShoes] = useState(data);

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://13.124.53.73/'); // 클라우드 서버 엔드포인트
        setItems(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }

    fetchData();
  }, []);

  console.log(items);

  return (
    <div>
      <div className="main-bg"></div>
      <Card shoes={shoes}></Card>
      <MoreButton shoes={shoes} setShoes={setShoes} />
      {items.map(item => (
          <li key={item._id}>
            <strong>{item.name} </strong>
            <p>{item.email}</p>
          </li>
        ))}
    </div>
  )
}

export default Home;

function Card(props) {
  // 상품을 3개씩 나누어 배열로 만들기
  const chunkedShoes = [];
  const size = 3;
  for (let i = 0; i < props.shoes.length; i += size) {
    chunkedShoes.push(props.shoes.slice(i, i + size));
  }

  return (
    <Container>
      {chunkedShoes.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((shoe, colIndex) => (
            <Col sm key={colIndex}>
              <img src={`https://codingapple1.github.io/shop/shoes${rowIndex * size + colIndex + 1}.jpg`} alt={`Shoe ${rowIndex * size + colIndex + 1}`} />
              <p className="font-bold">{shoe.title}</p>
              <div>{shoe.price}</div>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}



function MoreButton(props) {
  return (
    <button className='border border-black' onClick={() => {
      axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((결과) => {
          console.log(결과.data);
          let copy = [...props.shoes, ...결과.data];
          props.setShoes(copy);
        })
      axios.post('/asd')

    }}>버튼</button>
  )
}