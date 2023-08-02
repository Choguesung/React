import { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {

  useEffect(()=>{
    
  })

  let [count, setCount] = useState(0)

  let {id} = useParams();
  let finded = props.shoes.find(function(x){
    return x.id == id
  });

    return(
       <Container>
        {count}
        <button onClick={()=>{setCount(count+1)}}> 버튼 </button>
         <Row>
          <Col>
            <img src={'https://codingapple1.github.io/shop/shoes'+id+'.jpg'} width="100%" />
          </Col>
          <Col className='p-1'>
            <p className="text-red-500">{finded.title}</p>
            <p>{finded.content}</p>
            <p>{finded.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </Col>
         </Row>
        </Container>
    )
}

export default Detail;