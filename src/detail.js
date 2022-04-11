/*eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';
import './detail.scss';
import {extraContext} from './App.js';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";

let Box = styled.div`
  padding : 20px;
`;

let Title = styled.h4`
  font-size : 25px;
  color : ${ props => props.color }
`;

function Detail(props) {

  let [alert,alertChange] = useState(true);
  let [inputData, inputDataSet] = useState('');
  let [tab, tabSet] = useState(0); 

  let [onOff, onOffSet] = useState(false);
  let extra = useContext(extraContext);

  useEffect(()=>{
    let timer = setTimeout(()=>{alertChange(false)},2000);
    console.log('앙냥 재현?');
    return ()=>{clearTimeout(timer)};
  },[alert]);

  let { id } = useParams();
  let findItem = props.shoes.find((item) => {
      return item.id == id
  });

  let history = useHistory();

  function Alert() {
    return (
      <div className="my-alert">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>
    );
  }

  return (
    <div className="container">      
      <Box>
        <Title className="red">Detail</Title>
      </Box>

      <input onChange={(e) => {inputDataSet(e.target.value);}}/>

      {
        alert === true
        ? <Alert></Alert>
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (findItem.id + 1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>

          <Extra extra={props.extra} />

          <button className="btn btn-danger"onClick={() => {
            history.goBack();
          }}>뒤로가기</button> 
          <button className="btn btn-danger" onClick={()=>{ props.extraChange([9,11,12]) }}>주문하기</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => {onOffSet(false), tabSet(0)}}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => {onOffSet(false), tabSet(1)}}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={onOff} classNames="wow" timeout={500}>
        <TabContent tab={tab} onOff={onOff}></TabContent>
      </CSSTransition>
    </div> 
  );

  function TabContent(props) {

    useEffect(() => {
      props.onOffSet(true);
    });

    if (props.tab === 0) {
      return <div>0번째 내용입니다</div>
    } else if (props.tab === 1) {
      return <div>1번째 내용입니다</div>
    } else if (props.tab === 2) {
      return <div>2번째 내용입니다</div>
    }
  }

  function Extra() {
    return (
      <p>재고 : {extra}</p>
    )
  }

}
  export default Detail;