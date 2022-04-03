/*eslint-disable */

import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoesSet] = useState(Data);

  return (
    <div className="App">      
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">FirstShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <Route exact path="/">
        <Jumbotron />
        <Items />
      </Route>

      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
      </Route>

      {/* <Route path="/" component={}></Route> */}
    </div>
  );

  function Jumbotron () {
    return (
      <div className='jumbotron'>
        <div className='shop-name'>
          <h1>20% Season Off</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <Button variant="primary">Primary</Button>{' '}
        </div>
      </div>
    )
  }

  function Card(props) {
    return (
      <div className="col-md-4">
        <img src={ "https://codingapple1.github.io/shop/shoes" + (props.index + 1) + ".jpg" } alt="" width="100%"/>
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.content } & { props.shoes.price }</p>
      </div>
    );
  }

  function Items() {
    return (
      <div className='container'>
        <div className='row'>
          {
            shoes.map((a,i) => {
              return (<Card shoes={shoes[i]} index={i} key={i}/>)
            })
          }
        </div>
      </div>
    )
  }

  //  내가 만든 상품 데이터 바인딩 (반복문)
  // function ShoesInfo (props) {
  //   let items = [];
  //   for (let i=0; i<Data.length; i++) {
  //     items.push(
  //       <div className="col-md-4">
  //         <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%"/>
  //         <h4>{ props.shoes[i].title }</h4>
  //         <p>{ props.shoes[i].content } & { props.shoes[i].price }</p>
  //       </div>
  //     )
  //   }
  //   return items;
  // }
  
}

export default App;
