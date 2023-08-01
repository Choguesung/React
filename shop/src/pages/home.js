import {Container,Row,Col} from 'react-bootstrap';
import data from '../data';
import { useState } from "react";

function Home() {
    let [shoes] = useState(data);

    return(
        <div>
            <div className="main-bg"></div>
            <Card shoes={shoes}></Card> 
        </div>
    )
}

export default Home;

function Card(props) {
    return (
      <Container>
        <Row>
          {
            props.shoes.map(function(a,i){
              let sum = i+1;
              return(
                  <Col sm>
                    <img src={'https://codingapple1.github.io/shop/shoes'+sum+'.jpg'}></img>
                    <p className="font-bold">{props.shoes[i].title}</p>
                    <div>{props.shoes[i].price}</div>
                  </Col>
              )
            })
          }          
        </Row>
      </Container>
    );
  }