import React from "react";
import "../styles/Card.css";
import MyCard from "./MyCard";
import { Col, Space } from "antd";

function CardList() {
  return (
    <div className="card-list">
      {Array(10)
        .fill()
        .map((_, i) => (
          <MyCard key={i} />
        ))}
    </div>
  );
}

export default CardList;
