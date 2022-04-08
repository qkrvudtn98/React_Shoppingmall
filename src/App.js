/*eslint-disable */

import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';
import Detail from './detail.js';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes, shoesSet] = useState(Data);
  let [count, countSet] = useState(2);
  let [show, showSet] = useState(true);
  let [loading, loadingSet] = useState(true);
  let [extra, extraSet] = useState([10, 11, 12]);

  return (
    <div className="App">      
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">FirstShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
          <Nav.Link as={Link} to="/price">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <Switch>

        <Route exact path="/">
          <Jumbotron />
          <Items />
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} extra={extra} extraChange={extraSet} />
        </Route>

        <Route path="/:id">
          <div>재현이는 오줌싸개!!</div>
        </Route>
      
      </Switch>
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
        {
          show == true
          ? <More></More>
          : null
        }
      </div>
    )
  }

  function More() {
    return (
      <button className='btn btn-primary' onClick={()=>{
        {
          loading == true
          ? <Loading></Loading>
          : null
        }

        {
          loading == false
          ? <Alert1></Alert1>
          : null
        }
        axios.get('https://codingapple1.github.io/shop/data' + count +'.json')
        .then((result)=>{ 
          shoesSet([...shoes, ...result.data])
          countSet((count + 1));
          showSet(true)
          loadingSet(false);
        })
        .catch(()=> {
          showSet(false)
          loadingSet(false);
        });
      }}>More</button>
    )
  }

  function Loading() {
    return (
      <div className='load-alert'>
        <p>로딩중입니다...</p>
      </div>
    )
  }

  function Alert1() {
    return (
      <div className='load-fail'>
        <p>데이터를 불러오는데 실패하였습니다... 다시 시도해주세요</p>
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
