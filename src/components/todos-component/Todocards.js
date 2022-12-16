import React from "react";
import { useNavigate } from 'react-router-dom';
const Todocards = (props) => {
  const { item } = props;
  const { id, userId, title, completed } = item;
  let navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "pink",
        margin: "10px 0 29px 110px",
        padding: "15px",
        textAlign: "center",
        width: "250px",
        height:"auto"
      }}
      onClick={()=> navigate(`/todo/${id}`)}
    >
      <h1>{`Your ID: ${id}`}</h1>
      <h1>{`Your userId: ${userId}`}</h1>
      <h1>{`Title: ${title}`}</h1>
      <h1>{` completed: ${completed}`}</h1>
    </div>
  );
};

export default Todocards;
