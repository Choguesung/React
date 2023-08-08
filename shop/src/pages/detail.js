import { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { addItem } from '../store';
import { useDispatch } from 'react-redux';

function Detail(props) {

  useEffect(() => {

  })

  let [tap, setTap] = useState(0)
  let dispatch = useDispatch()
  let { id } = useParams()
  let finded = props.shoes.find(function (x) {
    return x.id == id
  });

  useEffect(() => {
    let take = localStorage.getItem('watched')
    take = JSON.parse(take)
    take.push(finded.id)

    take = new Set(take)
    take = Array.from(take)
    localStorage.setItem('watched',JSON.stringify(take))
  }, [])

  return (
    <Container className='p-3 animate-fade-in-out'>
      <Row>
        <Col>
          <img src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'} width="100%" />
        </Col>
        <Col className='p-1'>
          <p className="text-red-500">{finded.title}</p>
          <p>{finded.content}</p>
          <p>{finded.price}</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem({ id: 3, name: 'Greysd Yordan', count: 0 }))
          }}>주문하기</button>
        </Col>
      </Row>

      <PillsExample tap={tap} setTap={setTap} />

    </Container>
  )
}

export default Detail;

function PillsExample(props) {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { props.setTap(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { props.setTap(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { props.setTap(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tap={props.tap} />

    </div>

  );
}

function TabContent(props) {
  if (props.tap == 0) {
    return <div className=''>내용0</div>
  }
  if (props.tap == 1) {
    return <div>내용1</div>
  }
  if (props.tap == 2) {
    return <div>내용2</div>
  }
}


