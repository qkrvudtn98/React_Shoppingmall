import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';
import './detail.scss';

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
          <button className="btn btn-danger"onClick={() => {
            history.goBack();
          }}>뒤로가기</button> 
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  );
}

  export default Detail;